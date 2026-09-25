import React from 'react';

export default function StickyEnquireBtn({ lang, t, onOpenEnquire }) {
  const isTelugu = lang === 'te';

  return (
    <div className="sticky-enquire-container" role="complementary" aria-label="Quick Enquiry Trigger">
      <button
        type="button"
        className="sticky-enquire-btn"
        onClick={onOpenEnquire}
        id="sticky-enquire-now-btn"
        title={t.stickyEnquire.text}
      >
        <span className="sticky-btn-pulse"></span>
        <span className="sticky-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </span>
        <div className="sticky-text-group">
          <span className="sticky-main-text">{t.stickyEnquire.text}</span>
          <span className="sticky-sub-text">
            {isTelugu ? 'తక్షణ సహాయం' : 'Instant Help'}
          </span>
        </div>
      </button>
    </div>
  );
}
