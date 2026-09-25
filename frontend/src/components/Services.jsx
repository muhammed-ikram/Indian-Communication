import React, { useState, useMemo } from 'react';
import ServiceCard from './ServiceCard';

export default function Services({ services, lang, t, onSelectService }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: t.servicesSection.allCategory },
    { id: 'banking', label: t.servicesSection.bankingCategory },
    { id: 'insurance', label: t.servicesSection.insuranceCategory },
    { id: 'money_transfer', label: t.servicesSection.moneyCategory },
    { id: 'travel', label: t.servicesSection.travelCategory },
    { id: 'citizen', label: t.servicesSection.citizenCategory },
    { id: 'utility', label: t.servicesSection.utilityCategory },
  ];

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      // Category check
      const matchesCategory =
        selectedCategory === 'all' || service.category === selectedCategory;

      // Search query check (search both English & Telugu strings)
      if (!matchesCategory) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const titleEn = service.title.en.toLowerCase();
      const titleTe = service.title.te.toLowerCase();
      const descEn = service.shortDesc.en.toLowerCase();
      const descTe = service.shortDesc.te.toLowerCase();

      return (
        titleEn.includes(q) ||
        titleTe.includes(q) ||
        descEn.includes(q) ||
        descTe.includes(q)
      );
    });
  }, [services, selectedCategory, searchQuery]);

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <div className="section-badge">
            <span>✨</span>
            <span>{t.servicesSection.badge}</span>
          </div>

          <h2 className="section-title">
            {t.servicesSection.title}
            {lang === 'both' && (
              <span className="bilingual-sub">సమగ్ర సేవల సమాహారం</span>
            )}
          </h2>

          <p className="section-subtitle">
            {t.servicesSection.subtitle}
          </p>
        </div>

        {/* Filter Toolbar: Search + Category Pills */}
        <div className="services-toolbar">
          {/* Live Search Input */}
          <div className="search-bar-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.servicesSection.searchPlaceholder}
              aria-label="Search services"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                title="Clear Search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="category-pills-row" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Count Indicator */}
        <div className="services-count-bar">
          <span className="count-tag">
            {filteredServices.length} {filteredServices.length === 1 ? 'Service' : 'Services'}
          </span>
          {searchQuery && (
            <span className="search-active-hint">
              Filtering for &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* Services Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="services-cards-grid">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                lang={lang}
                t={t}
                onSelectService={onSelectService}
              />
            ))}
          </div>
        ) : (
          <div className="no-services-found">
            <div className="empty-icon">🔍</div>
            <h3>{t.servicesSection.noResults}</h3>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              {t.servicesSection.clearSearch}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
