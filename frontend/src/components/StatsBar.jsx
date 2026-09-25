import React from 'react';

export default function StatsBar({ t }) {
  const statsList = [
    { number: t.stats.servicesCount, label: t.stats.servicesLabel, icon: '🏦' },
    { number: t.stats.customersCount, label: t.stats.customersLabel, icon: '👥' },
    { number: t.stats.securityCount, label: t.stats.securityLabel, icon: '🔒' },
    { number: t.stats.speedCount, label: t.stats.speedLabel, icon: '⚡' }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsList.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <span className="stat-icon">{stat.icon}</span>
              <div className="stat-text-wrap">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
