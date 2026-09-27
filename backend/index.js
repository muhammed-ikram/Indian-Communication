const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const dns = require('dns');
require('dotenv').config();

// Prefer IPv4 resolution to prevent IPv6 ENETUNREACH in cloud environments like Render
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'ic_secret_key_2024';

// ─── CORS ────────────────────────────────────────────────────────────────────
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// ─── MONGODB CONNECTION ───────────────────────────────────────────────────────
mongoose.connect(process.env.MONGODB_URL, {
  dbName: 'IndianCommunication'
}).then(() => {
  console.log('✅ MongoDB connected successfully');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});

// ─── SCHEMA / MODEL ───────────────────────────────────────────────────────────
const leadSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true, unique: true },
  source: { type: String, default: 'General' },
  serviceName: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});
const Lead = mongoose.model('Lead', leadSchema);

// ─── NODEMAILER TRANSPORTER (SMTP) ───────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.FROM_MAIL?.trim(),
    pass: process.env.APP_PASSWORD?.trim()
  },
  connectionTimeout: 8000,
  greetingTimeout: 8000,
  socketTimeout: 8000
});

async function sendLeadEmail({ name, phone, source, serviceName }) {
  const toMail = process.env.TO_MAIL?.trim() || 'ikramuk232006@gmail.com';
  const fromMail = process.env.FROM_MAIL?.trim() || 'indiancommunicationatp@gmail.com';
  const subject = `📥 New Lead – ${source} | Indian Communication`;
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
      <div style="background:#1a237e;color:#fff;padding:20px 24px;">
        <h2 style="margin:0;font-size:20px;">🇮🇳 Indian Communication – New Lead</h2>
        <p style="margin:4px 0 0;opacity:0.8;font-size:13px;">Source: <strong>${source}</strong></p>
      </div>
      <div style="padding:24px;background:#fafafa;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#555;font-size:14px;width:130px;"><strong>Name</strong></td><td style="padding:8px 0;font-size:15px;color:#111;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#555;font-size:14px;"><strong>Mobile</strong></td><td style="padding:8px 0;font-size:15px;color:#111;">+91 ${phone}</td></tr>
          ${serviceName ? `<tr><td style="padding:8px 0;color:#555;font-size:14px;"><strong>Service</strong></td><td style="padding:8px 0;font-size:15px;color:#111;">${serviceName}</td></tr>` : ''}
          <tr><td style="padding:8px 0;color:#555;font-size:14px;"><strong>Date/Time</strong></td><td style="padding:8px 0;font-size:15px;color:#111;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td></tr>
        </table>
      </div>
      <div style="background:#e8eaf6;padding:12px 24px;font-size:12px;color:#666;text-align:center;">
        Automated notification from Indian Communication website.
      </div>
    </div>
  `;

  // 1. HTTP API via Resend (Works seamlessly on Render Free Tier via Port 443)
  if (process.env.RESEND_API_KEY?.trim()) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY.trim()}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM?.trim() || 'Indian Communication <onboarding@resend.dev>',
          to: [fromMail],
          subject,
          html
        })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || JSON.stringify(data));
      }
      console.log(`📧 Email sent via Resend HTTP API for: ${name} (${phone})`);
      return;
    } catch (err) {
      console.error('❌ Resend email failed:', err.message);
    }
  }

  // 2. HTTP API via Brevo (Works seamlessly on Render Free Tier via Port 443)
  if (process.env.BREVO_API_KEY?.trim()) {
    try {
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': process.env.BREVO_API_KEY.trim(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sender: { name: 'Indian Communication', email: fromMail },
          to: [{ email: toMail }],
          subject,
          htmlContent: html
        })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || JSON.stringify(data));
      }
      console.log(`📧 Email sent via Brevo HTTP API for: ${name} (${phone})`);
      return;
    } catch (err) {
      console.error('❌ Brevo email failed:', err.message);
    }
  }

  // 3. Fallback: Nodemailer SMTP
  try {
    await transporter.sendMail({
      from: `"Indian Communication" <${fromMail}>`,
      to: toMail,
      subject,
      html
    });
    console.log(`📧 Email sent via SMTP for: ${name} (${phone})`);
  } catch (err) {
    console.error('❌ Email send failed:', err.message);
  }
}

// ─── AUTH MIDDLEWARE ──────────────────────────────────────────────────────────
function requireAdmin(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ success: false, error: 'No token provided' });
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== 'admin') throw new Error('Not admin');
    req.admin = decoded;
    next();
  } catch {
    return res.status(403).json({ success: false, error: 'Invalid or expired token' });
  }
}

// ─── ROUTES ───────────────────────────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'Indian Communication Backend API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// ── 1. Submit a lead (service popup / enquire now / contact us) ───────────────
app.post('/api/leads', async (req, res) => {
  const { name, phone, source, serviceName } = req.body;

  if (!name?.trim() || !phone?.trim()) {
    return res.status(400).json({ success: false, error: 'Name and phone are required.' });
  }
  if (!/^\d{10}$/.test(phone.trim())) {
    return res.status(400).json({ success: false, error: 'Phone must be a 10-digit number.' });
  }

  try {
    const existing = await Lead.findOne({ phone: phone.trim() });
    if (existing) {
      // Already in DB – skip email, just let them through silently
      return res.status(200).json({
        success: true,
        message: 'Lead already exists.',
        alreadyExists: true,
        data: { name: existing.name, phone: existing.phone }
      });
    }

    const lead = await Lead.create({
      name: name.trim(),
      phone: phone.trim(),
      source: source || 'General',
      serviceName: serviceName || ''
    });

    // Send HTTP response immediately so the frontend form never waits or gets stuck
    res.status(201).json({
      success: true,
      message: 'Lead submitted successfully.',
      data: { name: lead.name, phone: lead.phone }
    });

    // Send email asynchronously in background
    sendLeadEmail({ name: lead.name, phone: lead.phone, source: lead.source, serviceName: lead.serviceName })
      .catch((err) => console.error('❌ Background lead email error:', err.message));

    return;
  } catch (err) {
    console.error('Lead save error:', err.message);
    return res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
});

// ── 2. Legacy enquiry endpoint (kept for compatibility) ───────────────────────
app.post('/api/enquiries', async (req, res) => {
  const { name, phone, service, language, message } = req.body;
  if (!name?.trim() || !phone?.trim()) {
    return res.status(400).json({ success: false, error: 'Name and phone are required.' });
  }

  try {
    const existing = await Lead.findOne({ phone: phone.trim() });
    if (existing) {
      res.status(200).json({ success: true, message: 'Enquiry received.', alreadyExists: true });
      sendLeadEmail({ name: existing.name, phone: existing.phone, source: 'Contact Us', serviceName: service || '' })
        .catch(err => console.error('❌ Background enquiry email error:', err.message));
      return;
    }
    const lead = await Lead.create({
      name: name.trim(),
      phone: phone.trim(),
      source: 'Contact Us',
      serviceName: service || ''
    });
    res.status(201).json({ success: true, message: 'Enquiry submitted successfully.', data: lead });
    sendLeadEmail({ name: lead.name, phone: lead.phone, source: 'Contact Us', serviceName: service || '' })
      .catch(err => console.error('❌ Background enquiry email error:', err.message));
    return;
  } catch (err) {
    console.error('Enquiry error:', err.message);
    return res.status(500).json({ success: false, error: 'Server error.' });
  }
});

// ── 3. Admin Login ────────────────────────────────────────────────────────────
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;
  const adminEmail = process.env.ADMIN?.trim();
  const adminPassword = process.env.ADMIN_PASSWORD?.trim();

  if (!email || !password) {
    return res.status(400).json({ success: false, error: 'Email and password are required.' });
  }
  if (email.trim() !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ success: false, error: 'Invalid credentials.' });
  }

  const token = jwt.sign({ email: adminEmail, role: 'admin' }, JWT_SECRET, { expiresIn: '8h' });
  return res.status(200).json({ success: true, token, email: adminEmail });
});

// ── 4. Admin – Get all unique leads ──────────────────────────────────────────
app.get('/api/admin/leads', requireAdmin, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, total: leads.length, leads });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Failed to fetch leads.' });
  }
});

// ── 5. Admin – Delete a lead by ID ─────────────────────────────────────────
app.delete('/api/admin/leads/:id', requireAdmin, async (req, res) => {
  try {
    const deleted = await Lead.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, error: 'Lead not found.' });
    return res.status(200).json({ success: true, message: 'Lead deleted successfully.' });
  } catch (err) {
    console.error('Delete lead error:', err.message);
    return res.status(500).json({ success: false, error: 'Failed to delete lead.' });
  }
});

// ── 6. Admin – Manually add a new lead ───────────────────────────────────────
app.post('/api/admin/leads', requireAdmin, async (req, res) => {
  const { name, phone, source, serviceName } = req.body;

  if (!name?.trim() || !phone?.trim()) {
    return res.status(400).json({ success: false, error: 'Name and phone are required.' });
  }
  if (!/^\d{10}$/.test(phone.trim())) {
    return res.status(400).json({ success: false, error: 'Phone must be a 10-digit number.' });
  }

  try {
    const existing = await Lead.findOne({ phone: phone.trim() });
    if (existing) {
      return res.status(409).json({ success: false, error: 'A lead with this phone number already exists.' });
    }
    const lead = await Lead.create({
      name: name.trim(),
      phone: phone.trim(),
      source: source || 'General',
      serviceName: serviceName || ''
    });
    return res.status(201).json({ success: true, message: 'Lead added successfully.', data: lead });
  } catch (err) {
    console.error('Admin add lead error:', err.message);
    return res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
});

// Root
app.get('/', (req, res) => {
  res.send('Indian Communication API Server is running smoothly.');
});

// ─── START ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Indian Communication Server running on port ${PORT}`);
});
