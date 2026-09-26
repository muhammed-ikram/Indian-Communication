import React, { useState, useEffect } from 'react';
import { submitLead } from '../services/api';

/**
 * ServiceLeadModal
 * Shows the first time a user clicks any service card / "Know More" button.
 * Remembers the user for 2 days via localStorage so it doesn't show again.
 *
 * Props:
 *  - serviceName  {string}  – name of the clicked service
 *  - onClose      {fn}      – called to dismiss the modal
 *  - onProceed    {fn}      – called after submit (or if user already submitted before)
 *                             to proceed to the ServiceDetailModal
 */
export default function ServiceLeadModal({ serviceName, onClose, onProceed }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll while modal is open
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

  // Auto-proceed after success state is shown briefly
  useEffect(() => {
    if (submitted) {
      const t = setTimeout(() => {
        onProceed();
      }, 1800);
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

    // Remember this user for 2 days
    const expiry = Date.now() + 2 * 24 * 60 * 60 * 1000;
    localStorage.setItem('ic_lead_submitted', JSON.stringify({ name: name.trim(), phone: phone.trim(), expiry }));

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Quick Interest Form">
      <div
        className="modal-dialog service-lead-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '440px' }}
      >
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close">✕</button>

        {submitted ? (
          <div className="modal-success-state animate-fade-in" style={{ textAlign: 'center', padding: '40px 24px' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎉</div>
            <h4 style={{ margin: '0 0 8px', fontSize: '20px', color: '#1a237e' }}>Thank You, {name}!</h4>
            <p style={{ color: '#555', fontSize: '14px' }}>Our team will reach out to you shortly on <strong>+91 {phone}</strong>.</p>
            <p style={{ color: '#888', fontSize: '13px', marginTop: '8px' }}>Loading service details…</p>
          </div>
        ) : (
          <>
            <div className="modal-header-clean" style={{ marginBottom: '4px' }}>
              <div className="header-icon-circle" style={{ background: 'linear-gradient(135deg,#1a237e,#283593)' }}>🏦</div>
              <div>
                <h3 className="modal-heading-text" style={{ marginBottom: '4px' }}>Quick Interest Form</h3>
                <p className="modal-subheading-text" style={{ fontSize: '13px', color: '#666' }}>
                  {/* {serviceName
                    ? `Interested in "${serviceName}"? Share your details and we'll contact you.`
                    : 'Share your details to explore our services.'} */}
                  Submit to explore more about the services we offer.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="quick-enquiry-form" style={{ marginTop: '16px' }} noValidate>
              {errorMsg && <div className="form-alert-error animate-fade-in">⚠️ {errorMsg}</div>}

              <div className="form-group">
                <label className="form-label">Full Name <span className="req">*</span></label>
                <input
                  type="text"
                  className="form-input"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrorMsg(''); }}
                  placeholder="Enter your full name"
                  autoFocus
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number <span className="req">*</span></label>
                <div className="input-prefix-wrap">
                  <span className="phone-prefix">+91</span>
                  <input
                    type="tel"
                    maxLength="10"
                    className="form-input with-prefix"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value.replace(/\D/g, '')); setErrorMsg(''); }}
                    placeholder="10-digit number"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary btn-full-width"
                disabled={submitting}
                style={{ marginTop: '8px' }}
              >
                {submitting ? (
                  <span>Submitting…</span>
                ) : (
                  <>
                    <span>Enter</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </>
                )}
              </button>

              <p style={{ textAlign: 'center', fontSize: '12px', color: '#888', marginTop: '12px' }}>
                🔒 Your information is private and secure.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
