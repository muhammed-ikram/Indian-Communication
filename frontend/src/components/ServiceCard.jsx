import React from 'react';

export default function ServiceCard({ service, lang, t, onSelectService }) {
  const isTelugu = lang === 'te';
  const isDual = lang === 'both';

  const badgeText = isTelugu ? service.badge.te : service.badge.en;
  const titleText = isTelugu ? service.title.te : service.title.en;
  const secondaryTitle = isDual ? service.title.te : null;
  const descText = isTelugu ? service.shortDesc.te : service.shortDesc.en;
  const featuresList = isTelugu ? service.features.te : service.features.en;

  return (
    <article className="service-card" id={`service-card-${service.id}`}>
      {/* Card Image Thumbnail */}
      <div className="card-media-wrapper">
        <img
          src={service.image}
          alt={service.title.en}
          className="service-card-img"
          loading="lazy"
        />
        <div className="card-media-overlay"></div>
        <span className={`card-category-badge badge-${service.category}`}>{badgeText}</span>
      </div>

      {/* Card Body */}
      <div className="card-content">
        <h3 className="service-card-title">
          {titleText}
          {secondaryTitle && (
            <span className="bilingual-sub">{secondaryTitle}</span>
          )}
        </h3>

        <p className="service-card-desc">
          {descText}
        </p>

        {/* Feature Highlights (first 2-3 items) */}
        <ul className="service-feature-list">
          {featuresList.slice(0, 2).map((feat, i) => (
            <li key={i} className="service-feature-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="check-icon">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Card Footer / Action */}
        <div className="card-footer-action">
          <button
            type="button"
            className="btn-know-more"
            onClick={() => onSelectService(service)}
            aria-label={`Know more about ${service.title.en}`}
          >
            <span>{t.servicesSection.cardKnowMore}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
