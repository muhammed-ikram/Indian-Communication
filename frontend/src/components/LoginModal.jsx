import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { adminLogin } from '../services/api';

export default function LoginModal({ lang, t, onClose, onAdminLoginSuccess }) {
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
          <h3 className="login-title">CSP Admin Portal</h3>
          <p className="login-subtitle">Sign in with your admin credentials to access the dashboard.</p>
        </div>

        {/* Admin Login Form */}
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
      </div>
    </div>
  );
}
