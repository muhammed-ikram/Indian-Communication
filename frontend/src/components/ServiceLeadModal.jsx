import React, { useState, useEffect } from 'react';
import { submitLead } from '../services/api';

/**
 * ServiceLeadModal
 * Shows the first time a user clicks any service card / "Know More" button.
 * Remembers the user for 2 days via localStorage so it doesn't show again.
 */
export default function ServiceLeadModal({ serviceName, onClose, onProceed }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  useEffect(() => {
    if (submitted) {
      const t = setTimeout(() => { onProceed(); }, 1800);
      return () => clearTimeout(t);
    }
  }, [submitted, onProceed]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) { setErrorMsg('Please enter your name.'); return; }
    if (!/^\d{10}$/.test(phone.trim())) { setErrorMsg('Please enter a valid 10-digit mobile number.'); return; }

    setSubmitting(true);
    setErrorMsg('');

    await submitLead({
      name: name.trim(),
      phone: phone.trim(),
      source: 'Service Popup',
      serviceName: serviceName || '',
    });

    const expiry = Date.now() + 2 * 24 * 60 * 60 * 1000;
    localStorage.setItem('ic_lead_submitted', JSON.stringify({ name: name.trim(), phone: phone.trim(), expiry }));

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Quick Interest Form">
      <div className="slm-dialog" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button type="button" className="slm-close-btn" onClick={onClose} aria-label="Close">✕</button>

        {submitted ? (
          <div className="slm-success animate-fade-in">
            <div className="slm-success-icon">🎉</div>
            <h4 className="slm-success-title">Thank You, {name}!</h4>
            <p className="slm-success-msg">Our team will reach out to you shortly on <strong>+91 {phone}</strong>.</p>
            <p className="slm-success-sub">Loading service details…</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="slm-header">
              <div className="slm-icon-wrap">🏦</div>
              <div className="slm-header-text">
                <h3 className="slm-title">Quick Interest Form</h3>
                <p className="slm-subtitle">Submit to explore more about the services we offer.</p>
              </div>
            </div>

            {/* Divider */}
            <div className="slm-divider" />

            {/* Form */}
            <form onSubmit={handleSubmit} className="slm-form" noValidate>
              {errorMsg && <div className="slm-error animate-fade-in">⚠️ {errorMsg}</div>}

              <div className="slm-field">
                <label className="slm-label">Full Name <span className="slm-req">*</span></label>
                <input
                  type="text"
                  className="slm-input"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrorMsg(''); }}
                  placeholder="Enter your full name"
                  autoFocus
                  required
                />
              </div>

              <div className="slm-field">
                <label className="slm-label">Mobile Number <span className="slm-req">*</span></label>
                <div className="slm-phone-wrap">
                  <span className="slm-prefix">+91</span>
                  <input
                    type="tel"
                    maxLength="10"
                    className="slm-input slm-phone-input"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value.replace(/\D/g, '')); setErrorMsg(''); }}
                    placeholder="10-digit number"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="slm-submit-btn" disabled={submitting}>
                {submitting ? (
                  <span>Submitting…</span>
                ) : (
                  <>
                    <span>Submit</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </>
                )}
              </button>

              <p className="slm-privacy">🔒 Your information is private and secure.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
