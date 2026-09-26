import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { adminLogin } from '../services/api';

export default function LoginModal({ lang, t, onClose, onAdminLoginSuccess }) {
  const [activeTab, setActiveTab] = useState('customer'); // 'customer' or 'agent'
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [authSuccess, setAuthSuccess] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  // Admin tab state
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');
  const [adminLoading, setAdminLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setStatusMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    setOtpSent(true);
    setStatusMsg('Demo OTP sent: 123456');
  };

  const handleVerifyLogin = (e) => {
    e.preventDefault();
    setAuthSuccess(true);
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setAdminError('');
    if (!adminEmail.trim() || !adminPassword) {
      setAdminError('Please enter both email and password.');
      return;
    }
    setAdminLoading(true);
    try {
      const res = await adminLogin({ email: adminEmail.trim(), password: adminPassword });
      if (res.success) {
        // Pass token + email up to App
        onAdminLoginSuccess?.({ token: res.token, email: res.email });
      } else {
        setAdminError(res.error || 'Invalid credentials. Please try again.');
      }
    } catch {
      setAdminError('Server unreachable. Please try again.');
    } finally {
      setAdminLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog login-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="login-modal-header">
          <img src={logoImg} alt="Indian Communication" className="login-brand-logo" />
          <h3 className="login-title">{t.loginModal.title}</h3>
          <p className="login-subtitle">{t.loginModal.subtitle}</p>
        </div>

        {/* Segmented Tab Switcher */}
        <div className="login-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'customer'}
            className={`login-tab ${activeTab === 'customer' ? 'active' : ''}`}
            onClick={() => { setActiveTab('customer'); setAuthSuccess(false); setStatusMsg(''); }}
          >
            👤 {t.loginModal.tabCustomer}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'agent'}
            className={`login-tab ${activeTab === 'agent' ? 'active' : ''}`}
            onClick={() => { setActiveTab('agent'); setAuthSuccess(false); setStatusMsg(''); setAdminError(''); }}
          >
            🏛️ {t.loginModal.tabAgent}
          </button>
        </div>

        {/* Tab Content */}
        {authSuccess ? (
          <div className="login-success-state animate-fade-in">
            <span className="success-icon-big">🎉</span>
            <h4>Authentication Successful!</h4>
            <p>Welcome to Indian Communication Portal. Connecting your secured session...</p>
            <button
              type="button"
              className="btn-primary"
              style={{ marginTop: '16px' }}
              onClick={onClose}
            >
              Enter Dashboard
            </button>
          </div>
        ) : activeTab === 'customer' ? (
          <form onSubmit={otpSent ? handleVerifyLogin : handleSendOtp} className="login-form">
            {statusMsg && (
              <div className="login-status-alert animate-fade-in">
                ℹ️ {statusMsg}
              </div>
            )}

            <div className="form-group">
              <label className="form-label">{t.loginModal.phoneEmailLabel}</label>
              <div className="input-prefix-wrap">
                <span className="phone-prefix">+91</span>
                <input
                  type="tel"
                  maxLength="10"
                  className="form-input with-prefix"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter 10-digit mobile number"
                  disabled={otpSent}
                  required
                />
              </div>
            </div>

            {otpSent && (
              <div className="form-group animate-fade-in">
                <label className="form-label">{t.loginModal.otpPasswordLabel}</label>
                <input
                  type="text"
                  maxLength="6"
                  className="form-input otp-input"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 123456"
                  required
                />
              </div>
            )}

            <button type="submit" className="btn-primary btn-full-width">
              <span>{otpSent ? t.loginModal.loginBtn : t.loginModal.getOtp}</span>
            </button>

            {otpSent && (
              <button
                type="button"
                className="btn-link-resend"
                onClick={() => setOtpSent(false)}
              >
                Change Phone Number
              </button>
            )}

            <p className="login-secure-notice">
              🔒 {t.loginModal.note}
            </p>
          </form>
        ) : (
          /* Admin Login Form */
          <form onSubmit={handleAdminLogin} className="login-form">
            {adminError && (
              <div className="form-alert-error animate-fade-in" style={{ marginBottom: '12px' }}>
                ⚠️ {adminError}
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Admin Email</label>
              <input
                type="email"
                className="form-input"
                value={adminEmail}
                onChange={(e) => { setAdminEmail(e.target.value); setAdminError(''); }}
                placeholder="admin@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                value={adminPassword}
                onChange={(e) => { setAdminPassword(e.target.value); setAdminError(''); }}
                placeholder="••••••••••••"
                required
              />
            </div>

            <button type="submit" className="btn-primary btn-full-width" disabled={adminLoading}>
              <span>{adminLoading ? 'Signing in…' : 'Sign In to Dashboard'}</span>
            </button>

            <p className="login-secure-notice">
              🔒 {t.loginModal.note}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
