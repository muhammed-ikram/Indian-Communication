import React, { useState, useEffect } from 'react';
import { fetchAdminLeads } from '../services/api';

const SOURCE_COLORS = {
  'Service Popup': { bg: '#e8f5e9', color: '#2e7d32' },
  'Enquire Now':   { bg: '#e3f2fd', color: '#1565c0' },
  'Contact Us':    { bg: '#fce4ec', color: '#c62828' },
  'General':       { bg: '#f3e5f5', color: '#6a1b9a' },
};

function getSourceStyle(source) {
  return SOURCE_COLORS[source] || { bg: '#f5f5f5', color: '#444' };
}

export default function AdminDashboard({ token, adminEmail, onLogout }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [sourceFilter, setSourceFilter] = useState('All');

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError('');
      const res = await fetchAdminLeads(token);
      if (res.success) {
        setLeads(res.leads);
      } else {
        setError(res.error || 'Failed to load data.');
      }
      setLoading(false);
    })();
  }, [token]);

  const sources = ['All', ...Array.from(new Set(leads.map((l) => l.source)))];

  const filtered = leads.filter((l) => {
    const matchSource = sourceFilter === 'All' || l.source === sourceFilter;
    const q = search.toLowerCase().trim();
    const matchSearch = !q || l.name.toLowerCase().includes(q) || l.phone.includes(q) || (l.serviceName || '').toLowerCase().includes(q);
    return matchSource && matchSearch;
  });

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0d1b4b 0%, #1a237e 50%, #283593 100%)', fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      {/* Top Bar */}
      <header style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg,#f9a825,#ff8f00)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🏦</div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '16px', lineHeight: 1.2 }}>Indian Communication</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Admin Dashboard</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>{adminEmail}</span>
          <button
            onClick={onLogout}
            style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '8px 18px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600, transition: 'background 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
          >
            Logout
          </button>
        </div>
      </header>

      <div style={{ padding: '32px' }}>
        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '28px' }}>
          {[
            { label: 'Total Leads', value: leads.length, icon: '👥', color: '#64b5f6' },
            { label: 'Service Popup', value: leads.filter(l => l.source === 'Service Popup').length, icon: '🔔', color: '#81c784' },
            { label: 'Enquire Now', value: leads.filter(l => l.source === 'Enquire Now').length, icon: '⚡', color: '#ffb74d' },
            { label: 'Contact Us', value: leads.filter(l => l.source === 'Contact Us').length, icon: '📞', color: '#f48fb1' },
          ].map((stat) => (
            <div key={stat.label} style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '28px' }}>{stat.icon}</div>
              <div>
                <div style={{ color: stat.color, fontSize: '28px', fontWeight: 800, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginTop: '4px' }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '16px 20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: '200px' }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px' }}>🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, phone or service…"
              style={{ background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: '14px', flex: 1, minWidth: 0 }}
            />
            {search && <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: '16px' }}>✕</button>}
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {sources.map((src) => (
              <button
                key={src}
                onClick={() => setSourceFilter(src)}
                style={{
                  padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', border: '1px solid',
                  ...(sourceFilter === src
                    ? { background: '#ffffff', color: '#1a237e', borderColor: '#ffffff' }
                    : { background: 'transparent', color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.3)' })
                }}
              >{src}</button>
            ))}
          </div>
        </div>

        {/* Table / Content */}
        <div style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ margin: 0, color: '#fff', fontSize: '16px', fontWeight: 700 }}>All Leads</h3>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{filtered.length} record{filtered.length !== 1 ? 's' : ''}</span>
          </div>

          {loading ? (
            <div style={{ padding: '60px', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>⏳</div>
              <p>Loading leads…</p>
            </div>
          ) : error ? (
            <div style={{ padding: '60px', textAlign: 'center', color: '#ef9a9a' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚠️</div>
              <p>{error}</p>
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ padding: '60px', textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>📭</div>
              <p>No leads found.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    {['#', 'Name', 'Mobile Number', 'Source', 'Service', 'Date & Time'].map((h) => (
                      <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((lead, idx) => {
                    const srcStyle = getSourceStyle(lead.source);
                    const date = new Date(lead.createdAt);
                    const dateStr = date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
                    const timeStr = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
                    return (
                      <tr
                        key={lead._id}
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', transition: 'background 0.15s' }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.35)', fontSize: '13px' }}>{idx + 1}</td>
                        <td style={{ padding: '14px 16px', color: '#fff', fontWeight: 600, fontSize: '14px' }}>{lead.name}</td>
                        <td style={{ padding: '14px 16px', color: '#90caf9', fontSize: '14px', fontFamily: 'monospace' }}>+91 {lead.phone}</td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{ ...srcStyle, padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, display: 'inline-block' }}>
                            {lead.source}
                          </span>
                        </td>
                        <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>{lead.serviceName || '—'}</td>
                        <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.5)', fontSize: '12px', whiteSpace: 'nowrap' }}>
                          <div>{dateStr}</div>
                          <div style={{ marginTop: '2px', color: 'rgba(255,255,255,0.35)' }}>{timeStr}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
