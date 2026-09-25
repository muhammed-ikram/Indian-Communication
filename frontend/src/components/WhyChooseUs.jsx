import React from 'react';

// Professional SVG icon components
const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const BoltIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);

export default function WhyChooseUs({ lang, t }) {
  const isDual = lang === 'both';

  const highlights = [
    {
      icon: <ShieldIcon />,
      title: t.whyUs.item1Title,
      desc: t.whyUs.item1Desc,
      tag: 'Certified & Secure',
      color: '#0F7BE0',
    },
    {
      icon: <BoltIcon />,
      title: t.whyUs.item2Title,
      desc: t.whyUs.item2Desc,
      tag: 'Instant Turnaround',
      color: '#F59E0B',
    },
    {
      icon: <ChatIcon />,
      title: t.whyUs.item3Title,
      desc: t.whyUs.item3Desc,
      tag: 'English & తెలుగు',
      color: '#10B981',
    },
    {
      icon: <GridIcon />,
      title: t.whyUs.item4Title,
      desc: t.whyUs.item4Desc,
      tag: 'All-In-One Center',
      color: '#8B5CF6',
    },
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="section-head-center">
          <div className="section-badge">
            <ShieldIcon />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="section-title">
            {t.whyUs.title}
            {isDual && (
              <span className="bilingual-sub">వేలాది మంది కస్టమర్లు మమ్మల్ని ఎందుకు నమ్ముతారు?</span>
            )}
          </h2>
          <p className="section-subtitle">{t.whyUs.subtitle}</p>
        </div>

        <div className="why-us-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="why-card">
              <div className="why-card-top">
                <span className="why-card-icon" style={{ color: item.color }}>{item.icon}</span>
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
