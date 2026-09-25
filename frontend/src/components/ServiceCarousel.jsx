import React, { useState, useEffect, useCallback, useRef } from 'react';

export default function ServiceCarousel({ services, lang, onSelectService }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // Show 3 cards on desktop, 2 on tablet, 1 on mobile
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = services.length;

  const goTo = useCallback((index, dir = 'next') => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(((index % total) + total) % total);
      setIsAnimating(false);
    }, 280);
  }, [isAnimating, total]);

  const next = useCallback(() => {
    goTo(current + 1, 'next');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1, 'prev');
  }, [current, goTo]);

  // Auto-play every 4.5 seconds (paused on hover)
  useEffect(() => {
    if (isPaused) return;
    autoPlayRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(autoPlayRef.current);
  }, [total, isPaused]);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % total);
      }, 4500);
    }
  };

  // Get the visible cards (circular)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCount; i++) {
      cards.push(services[(current + i) % total]);
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  const isTelugu = lang === 'te';
  const isDual = lang === 'both';

  return (
    <section 
      className="carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="All Our Services Showcase"
    >
      <div className="container">
        <div className="section-head-center">
          <div className="section-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            <span>{isTelugu ? 'మా సేవల సమాహారం' : 'Explore Featured Services'}</span>
          </div>

          <h2 className="section-title">
            All Our Services
            {isDual && <span className="bilingual-sub">అన్ని ప్రముఖ సేవలు</span>}
          </h2>

          <p className="section-subtitle">
            {isTelugu
              ? 'బ్యాంకింగ్, ఇన్సూరెన్స్, మనీ ట్రాన్స్‌ఫర్ మరియు ప్రభుత్వ సేవలు ఒకే చోట.'
              : 'Discover our complete range of banking, insurance, government, and digital solutions at a glance.'}
          </p>
        </div>

        <div className="carousel-wrapper">
          {/* Left Arrow */}
          <button
            type="button"
            className="carousel-arrow carousel-arrow-left"
            onClick={() => { prev(); resetAutoPlay(); }}
            aria-label="Previous service"
            title="Previous"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Cards Track */}
          <div className={`carousel-track ${isAnimating ? `slide-${direction}` : ''}`}>
            {visibleCards.map((service, idx) => {
              const badgeText = isTelugu ? service.badge.te : service.badge.en;
              const titleText = isTelugu ? service.title.te : service.title.en;
              const secondaryTitle = isDual ? service.title.te : null;
              const descText = isTelugu ? service.shortDesc.te : service.shortDesc.en;

              return (
                <div
                  key={`${service.id}-${idx}`}
                  role="button"
                  tabIndex={0}
                  className="carousel-card"
                  onClick={() => onSelectService(service)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectService(service);
                    }
                  }}
                  aria-label={`View details for ${service.title.en}`}
                >
                  <div className="carousel-card-img-wrap">
                    <img
                      src={service.image}
                      alt={service.title.en}
                      className="carousel-card-img"
                      loading="lazy"
                    />
                    <span className="carousel-badge">{badgeText}</span>
                    <div className="carousel-card-overlay">
                      <span className="carousel-view-label">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"/>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                        View Details
                      </span>
                    </div>
                  </div>

                  <div className="carousel-card-content">
                    <h3 className="carousel-card-title">
                      {titleText}
                      {secondaryTitle && (
                        <span className="bilingual-sub">{secondaryTitle}</span>
                      )}
                    </h3>

                    <p className="carousel-card-desc">
                      {descText}
                    </p>

                    <div className="carousel-card-footer">
                      <span className="carousel-card-link">
                        <span>Know More</span>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                      <span className="carousel-card-quick-tag">
                        Instant
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            className="carousel-arrow carousel-arrow-right"
            onClick={() => { next(); resetAutoPlay(); }}
            aria-label="Next service"
            title="Next"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Carousel Bottom Controls & Progress */}
        <div className="carousel-controls-bar">
          <div className="carousel-dots-wrapper">
            <div className="carousel-dots">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`carousel-dot ${idx === current ? 'active' : ''}`}
                  onClick={() => { goTo(idx); resetAutoPlay(); }}
                  aria-label={`Go to service ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="carousel-counter-badge">
            <span className="counter-current">{String(current + 1).padStart(2, '0')}</span>
            <span className="counter-divider">/</span>
            <span className="counter-total">{String(total).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
