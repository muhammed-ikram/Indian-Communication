/**
 * Indian Communication API Client
 * Configured for seamless deployment across Vercel (Frontend) and Render (Backend).
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function submitEnquiry(enquiryData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...enquiryData,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.warn('API call failed or backend offline. Saving enquiry to local storage fallback:', error.message);
    // Graceful offline fallback
    try {
      const existing = JSON.parse(localStorage.getItem('ic_offline_enquiries') || '[]');
      existing.push({ ...enquiryData, submittedAt: new Date().toISOString(), id: Date.now() });
      localStorage.setItem('ic_offline_enquiries', JSON.stringify(existing));
    } catch (e) {
      console.error('LocalStorage write failed', e);
    }
    return {
      success: true,
      message: 'Enquiry received successfully (offline mode)',
      fallback: true,
    };
  }
}

export async function checkBackendHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/health`, { method: 'GET' });
    return res.ok;
  } catch {
    return false;
  }
}
