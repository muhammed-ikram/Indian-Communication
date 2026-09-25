import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function LoginModal({ lang, t, onClose }) {
  const [activeTab, setActiveTab] = useState('customer'); // 'customer' or 'agent'
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [agentId, setAgentId] = useState('');
  const [agentPassword, setAgentPassword] = useState('');
  const [authSuccess, setAuthSuccess] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

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
            onClick={() => { setActiveTab('agent'); setAuthSuccess(false); setStatusMsg(''); }}
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
          <form onSubmit={handleVerifyLogin} className="login-form">
            <div className="form-group">
              <label className="form-label">{t.loginModal.agentIdLabel}</label>
              <input
                type="text"
                className="form-input"
                value={agentId}
                onChange={(e) => setAgentId(e.target.value)}
                placeholder="e.g. IC-ATP-00481"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t.loginModal.agentPassLabel}</label>
              <input
                type="password"
                className="form-input"
                value={agentPassword}
                onChange={(e) => setAgentPassword(e.target.value)}
                placeholder="••••••••••••"
                required
              />
            </div>

            <div className="biometric-row">
              <span className="bio-icon">👆</span>
              <span className="bio-text">Biometric RD Service Ready (Morpho / Mantra)</span>
            </div>

            <button type="submit" className="btn-primary btn-full-width">
              <span>{t.loginModal.loginBtn}</span>
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
