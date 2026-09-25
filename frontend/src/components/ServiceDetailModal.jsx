import React, { useEffect } from 'react';

export default function ServiceDetailModal({ service, lang, t, onClose, onEnquireForService }) {
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

  if (!service) return null;

  const isTelugu = lang === 'te';
  const isDual = lang === 'both';

  const title = isTelugu ? service.title.te : service.title.en;
  const secondaryTitle = isDual ? service.title.te : null;
  const badge = isTelugu ? service.badge.te : service.badge.en;
  const desc = isTelugu ? service.shortDesc.te : service.shortDesc.en;
  const features = isTelugu ? service.features.te : service.features.en;
  const documents = isTelugu ? service.documents.te : service.documents.en;
  const processing = isTelugu ? service.processingTime.te : service.processingTime.en;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog service-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Banner Graphic */}
        <div className="modal-media-header">
          <img src={service.image} alt={service.title.en} className="modal-banner-img" />
          <div className="modal-media-overlay">
            <span className="modal-badge">{badge}</span>
            <h2 className="modal-title">
              {title}
              {secondaryTitle && (
                <span className="bilingual-sub">{secondaryTitle}</span>
              )}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body-scroll">
          {/* Detailed Overview */}
          <div className="modal-section">
            <p className="modal-lead-desc">{desc}</p>
          </div>

          {/* Turnaround / Processing Time */}
          <div className="processing-time-box">
            <span className="clock-icon">⏱️</span>
            <div>
              <strong>Processing Timeline:</strong>
              <p>{processing}</p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <span>💎</span> {t.modal.keyFeatures}
            </h4>
            <ul className="modal-checklist">
              {features.map((feat, index) => (
                <li key={index} className="checklist-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="check-svg">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <span>📋</span> {t.modal.eligibilityDocs}
            </h4>
            <ul className="modal-docs-list">
              {documents.map((doc, index) => (
                <li key={index} className="doc-item">
                  <span className="doc-bullet">●</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="modal-footer">
          <button
            type="button"
            className="btn-secondary"
            onClick={onClose}
          >
            {t.modal.close}
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              onClose();
              onEnquireForService(service);
            }}
          >
            <span>{t.modal.enquireForService}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
