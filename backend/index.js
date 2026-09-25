const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for Vercel frontends and local dev
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// In-memory store for enquiries (persists across runtime, can be backed by MongoDB)
const enquiries = [];

// 1. Health check endpoint (Render uses this for zero-downtime health monitoring)
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'Indian Communication Backend API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// 2. Submit new customer enquiry
app.post('/api/enquiries', (req, res) => {
  const { name, phone, service, language, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      error: 'Name and phone number are required.'
    });
  }

  const newEnquiry = {
    id: Date.now().toString(),
    name: name.trim(),
    phone: phone.trim(),
    service: service || 'General Financial Inquiry',
    language: language || 'English',
    message: message || '',
    createdAt: new Date().toISOString(),
    status: 'Pending Contact'
  };

  enquiries.unshift(newEnquiry);
  console.log(`[Enquiry Received] Name: ${newEnquiry.name}, Phone: ${newEnquiry.phone}, Service: ${newEnquiry.service}`);

  return res.status(201).json({
    success: true,
    message: 'Enquiry submitted successfully. A representative will reach out shortly.',
    data: newEnquiry
  });
});

// 3. Fetch all enquiries (for administrative / portal use)
app.get('/api/enquiries', (req, res) => {
  res.json({
    success: true,
    total: enquiries.length,
    enquiries
  });
});

// Root welcome route
app.get('/', (req, res) => {
  res.send('Indian Communication API Server is running smoothly.');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Indian Communication Server running on port ${PORT}`);
});
