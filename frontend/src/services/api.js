/**
 * Indian Communication API Client
 * Configured for seamless deployment across Vercel (Frontend) and Render (Backend).
 *
 * In development:  VITE_API_URL is empty → relative /api/* paths are proxied by Vite
 *                  to http://localhost:5000 (see vite.config.js server.proxy).
 *                  This ensures mobile devices on the same LAN work correctly.
 * In production:   Set VITE_API_URL=https://your-backend.onrender.com in Vercel env vars.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Submit a lead from any form (Service Popup, Enquire Now, Contact Us).
 * @param {{ name: string, phone: string, source: string, serviceName?: string }} data
 */
export async function submitLead(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.warn('submitLead failed:', error.message);
    // Offline fallback
    try {
      const existing = JSON.parse(localStorage.getItem('ic_offline_leads') || '[]');
      existing.push({ ...data, submittedAt: new Date().toISOString(), id: Date.now() });
      localStorage.setItem('ic_offline_leads', JSON.stringify(existing));
    } catch {}
    return { success: true, fallback: true };
  }
}

/**
 * Legacy enquiry submit (Contact Us form) – kept for compatibility.
 */
export async function submitEnquiry(enquiryData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...enquiryData, submittedAt: new Date().toISOString() }),
    });
    if (!response.ok) throw new Error(`Server returned status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn('submitEnquiry failed:', error.message);
    try {
      const existing = JSON.parse(localStorage.getItem('ic_offline_enquiries') || '[]');
      existing.push({ ...enquiryData, submittedAt: new Date().toISOString(), id: Date.now() });
      localStorage.setItem('ic_offline_enquiries', JSON.stringify(existing));
    } catch {}
    return { success: true, fallback: true };
  }
}

/**
 * Admin login – returns { success, token, email } or { success: false, error }
 */
export async function adminLogin({ email, password }) {
  const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
}

/**
 * Fetch all leads (admin-only, requires JWT token).
 */
export async function fetchAdminLeads(token) {
  const response = await fetch(`${API_BASE_URL}/api/admin/leads`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  return await response.json();
}

/**
 * Delete a lead by ID (admin-only, requires JWT token).
 */
export async function deleteAdminLead(token, leadId) {
  const response = await fetch(`${API_BASE_URL}/api/admin/leads/${leadId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  return await response.json();
}

/**
 * Add a new lead manually (admin-only, requires JWT token).
 */
export async function addAdminLead(token, data) {
  const response = await fetch(`${API_BASE_URL}/api/admin/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function checkBackendHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/health`, { method: 'GET' });
    return res.ok;
  } catch {
    return false;
  }
}
