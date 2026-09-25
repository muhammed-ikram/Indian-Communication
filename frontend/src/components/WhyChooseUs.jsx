import React from 'react';

export default function WhyChooseUs({ lang, t }) {
  const isDual = lang === 'both';

  const highlights = [
    {
      icon: '🏛️',
      title: t.whyUs.item1Title,
      desc: t.whyUs.item1Desc,
      tag: 'Certified & Secure'
    },
    {
      icon: '⚡',
      title: t.whyUs.item2Title,
      desc: t.whyUs.item2Desc,
      tag: 'Instant Turnaround'
    },
    {
      icon: '🗣️',
      title: t.whyUs.item3Title,
      desc: t.whyUs.item3Desc,
      tag: 'English & తెలుగు'
    },
    {
      icon: '🎯',
      title: t.whyUs.item4Title,
      desc: t.whyUs.item4Desc,
      tag: 'All-In-One Center'
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="section-head-center">
          <div className="section-badge">
            <span>🛡️</span>
            <span>{t.whyUs.badge}</span>
          </div>

          <h2 className="section-title">
            {t.whyUs.title}
            {isDual && (
              <span className="bilingual-sub">వేలాది మంది కస్టమర్లు మమ్మల్ని ఎందుకు నమ్ముతారు?</span>
            )}
          </h2>

          <p className="section-subtitle">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="why-us-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="why-card">
              <div className="why-card-top">
                <span className="why-card-icon">{item.icon}</span>
                <span className="why-card-tag">{item.tag}</span>
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
