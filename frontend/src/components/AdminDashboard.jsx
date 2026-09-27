import React, { useState, useEffect } from 'react';
import { fetchAdminLeads, deleteAdminLead, addAdminLead } from '../services/api';

const SOURCE_COLORS = {
  'Service Popup': { bg: 'rgba(56, 189, 130, 0.15)', color: '#38bd82', border: 'rgba(56,189,130,0.35)' },
  'Enquire Now':   { bg: 'rgba(96, 165, 250, 0.15)', color: '#60a5fa', border: 'rgba(96,165,250,0.35)' },
  'Contact Us':    { bg: 'rgba(251, 113, 133, 0.15)', color: '#fb7185', border: 'rgba(251,113,133,0.35)' },
  'General':       { bg: 'rgba(167, 139, 250, 0.15)', color: '#a78bfa', border: 'rgba(167,139,250,0.35)' },
};

function getSourceStyle(source) {
  return SOURCE_COLORS[source] || { bg: 'rgba(148,163,184,0.15)', color: '#94a3b8', border: 'rgba(148,163,184,0.3)' };
}

const SOURCE_OPTIONS = ['Service Popup', 'Enquire Now', 'Contact Us', 'General'];

// ─── Add Lead Modal ───────────────────────────────────────────────────────────
function AddLeadModal({ token, onClose, onSuccess }) {
  const [formData, setFormData] = useState({ name: '', phone: '', source: 'General', serviceName: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!formData.name.trim()) { setError('Name is required.'); return; }
    if (!/^\d{10}$/.test(formData.phone.trim())) { setError('Enter a valid 10-digit phone number.'); return; }

    setLoading(true);
    try {
      const res = await addAdminLead(token, {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        source: formData.source,
        serviceName: formData.serviceName.trim(),
      });
      if (res.success) {
        onSuccess(res.data);
      } else {
        setError(res.error || 'Failed to add lead.');
      }
    } catch {
      setError('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="adm-modal-overlay" onClick={onClose}>
      <div className="adm-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="adm-modal-header">
          <div className="adm-modal-title-row">
            <span className="adm-modal-icon">➕</span>
            <h3 className="adm-modal-title">Add New Lead</h3>
          </div>
          <button className="adm-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {error && <div className="adm-modal-error">⚠️ {error}</div>}

        <form onSubmit={handleSubmit} className="adm-modal-form">
          <div className="adm-modal-field">
            <label className="adm-modal-label">Full Name <span className="adm-req">*</span></label>
            <input
              type="text"
              className="adm-modal-input"
              value={formData.name}
              onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setError(''); }}
              placeholder="Enter customer name"
              autoFocus
              required
            />
          </div>

          <div className="adm-modal-field">
            <label className="adm-modal-label">Mobile Number <span className="adm-req">*</span></label>
            <div className="adm-phone-row">
              <span className="adm-phone-prefix">+91</span>
              <input
                type="tel"
                maxLength="10"
                className="adm-modal-input adm-phone-field"
                value={formData.phone}
                onChange={(e) => { setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') }); setError(''); }}
                placeholder="10-digit number"
                required
              />
            </div>
          </div>

          <div className="adm-modal-field">
            <label className="adm-modal-label">Source</label>
            <select
              className="adm-modal-input"
              value={formData.source}
              onChange={(e) => setFormData({ ...formData, source: e.target.value })}
            >
              {SOURCE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="adm-modal-field">
            <label className="adm-modal-label">Service Name <span className="adm-optional">(optional)</span></label>
            <input
              type="text"
              className="adm-modal-input"
              value={formData.serviceName}
              onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
              placeholder="e.g. Aadhaar, PAN, Passport…"
            />
          </div>

          <div className="adm-modal-actions">
            <button type="button" className="adm-cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="adm-add-btn" disabled={loading}>
              {loading ? 'Adding…' : '+ Add Lead'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Delete Confirm ───────────────────────────────────────────────────────────
function DeleteConfirmModal({ lead, onConfirm, onCancel }) {
  return (
    <div className="adm-modal-overlay" onClick={onCancel}>
      <div className="adm-confirm-box" onClick={(e) => e.stopPropagation()}>
        <div className="adm-confirm-icon">🗑️</div>
        <h4 className="adm-confirm-title">Delete Lead?</h4>
        <p className="adm-confirm-msg">
          Are you sure you want to delete <strong>{lead.name}</strong> (+91 {lead.phone})?
          This action cannot be undone.
        </p>
        <div className="adm-confirm-actions">
          <button className="adm-cancel-btn" onClick={onCancel}>Cancel</button>
          <button className="adm-delete-confirm-btn" onClick={onConfirm}>Yes, Delete</button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function AdminDashboard({ token, adminEmail, onLogout }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [sourceFilter, setSourceFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const loadLeads = async () => {
    setLoading(true);
    setError('');
    const res = await fetchAdminLeads(token);
    if (res.success) {
      setLeads(res.leads);
    } else {
      setError(res.error || 'Failed to load data.');
    }
    setLoading(false);
  };

  useEffect(() => { loadLeads(); }, [token]);

  const sources = ['All', ...Array.from(new Set(leads.map((l) => l.source)))];

  const filtered = leads.filter((l) => {
    const matchSource = sourceFilter === 'All' || l.source === sourceFilter;
    const q = search.toLowerCase().trim();
    const matchSearch = !q || l.name.toLowerCase().includes(q) || l.phone.includes(q) || (l.serviceName || '').toLowerCase().includes(q);
    return matchSource && matchSearch;
  });

  const handleDelete = async () => {
    if (!deleteTarget) return;
    const res = await deleteAdminLead(token, deleteTarget._id);
    if (res.success) {
      setLeads((prev) => prev.filter((l) => l._id !== deleteTarget._id));
    }
    setDeleteTarget(null);
  };

  const handleAddSuccess = (newLead) => {
    setLeads((prev) => [newLead, ...prev]);
    setShowAddModal(false);
  };

  const stats = [
    { label: 'Total Leads', value: leads.length, icon: '👥', cls: 'adm-stat-blue' },
    { label: 'Service Popup', value: leads.filter(l => l.source === 'Service Popup').length, icon: '🔔', cls: 'adm-stat-green' },
    { label: 'Enquire Now', value: leads.filter(l => l.source === 'Enquire Now').length, icon: '⚡', cls: 'adm-stat-yellow' },
    { label: 'Contact Us', value: leads.filter(l => l.source === 'Contact Us').length, icon: '📞', cls: 'adm-stat-pink' },
  ];

  return (
    <div className="adm-root">
      {/* Modals */}
      {showAddModal && (
        <AddLeadModal token={token} onClose={() => setShowAddModal(false)} onSuccess={handleAddSuccess} />
      )}
      {deleteTarget && (
        <DeleteConfirmModal lead={deleteTarget} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
      )}

      {/* Top Navigation */}
      <header className="adm-header">
        <div className="adm-header-brand">
          <div className="adm-header-logo">🏦</div>
          <div>
            <div className="adm-header-name">Indian Communication</div>
            <div className="adm-header-sub">Admin Dashboard</div>
          </div>
        </div>
        <div className="adm-header-right">
          <span className="adm-admin-email">{adminEmail}</span>
          <button className="adm-logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </header>

      <main className="adm-main">

        {/* Stats */}
        <div className="adm-stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="adm-stat-card">
              <div className="adm-stat-icon">{s.icon}</div>
              <div>
                <div className={`adm-stat-value ${s.cls}`}>{s.value}</div>
                <div className="adm-stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter + Actions Bar */}
        <div className="adm-toolbar">
          <div className="adm-search-wrap">
            <span className="adm-search-icon">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, phone or service…"
              className="adm-search-input"
            />
            {search && (
              <button className="adm-search-clear" onClick={() => setSearch('')}>✕</button>
            )}
          </div>

          <div className="adm-toolbar-right">
            <div className="adm-filter-chips">
              {sources.map((src) => (
                <button
                  key={src}
                  className={`adm-chip ${sourceFilter === src ? 'adm-chip-active' : ''}`}
                  onClick={() => setSourceFilter(src)}
                >
                  {src}
                </button>
              ))}
            </div>
            <button className="adm-add-lead-btn" onClick={() => setShowAddModal(true)}>
              <span>+</span> Add Lead
            </button>
          </div>
        </div>

        {/* Leads Table */}
        <div className="adm-table-card">
          <div className="adm-table-header">
            <h3 className="adm-table-title">All Leads</h3>
            <span className="adm-table-count">{filtered.length} record{filtered.length !== 1 ? 's' : ''}</span>
          </div>

          {loading ? (
            <div className="adm-state-center">
              <div className="adm-state-icon">⏳</div>
              <p>Loading leads…</p>
            </div>
          ) : error ? (
            <div className="adm-state-center adm-state-error">
              <div className="adm-state-icon">⚠️</div>
              <p>{error}</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="adm-state-center">
              <div className="adm-state-icon">📭</div>
              <p>No leads found.</p>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="adm-table-wrap">
                <table className="adm-table">
                  <thead>
                    <tr className="adm-thead-row">
                      {['#', 'Name', 'Mobile Number', 'Source', 'Service', 'Date & Time', ''].map((h) => (
                        <th key={h} className="adm-th">{h}</th>
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
                        <tr key={lead._id} className="adm-tr">
                          <td className="adm-td adm-td-num">{idx + 1}</td>
                          <td className="adm-td adm-td-name">{lead.name}</td>
                          <td className="adm-td adm-td-phone">+91 {lead.phone}</td>
                          <td className="adm-td">
                            <span
                              className="adm-badge"
                              style={{ background: srcStyle.bg, color: srcStyle.color, border: `1px solid ${srcStyle.border}` }}
                            >
                              {lead.source}
                            </span>
                          </td>
                          <td className="adm-td adm-td-service">{lead.serviceName || '—'}</td>
                          <td className="adm-td adm-td-date">
                            <div>{dateStr}</div>
                            <div className="adm-td-time">{timeStr}</div>
                          </td>
                          <td className="adm-td adm-td-action">
                            <button
                              className="adm-delete-btn"
                              onClick={() => setDeleteTarget(lead)}
                              title="Delete lead"
                              aria-label={`Delete ${lead.name}`}
                            >
                              ✕
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="adm-mobile-list">
                {filtered.map((lead, idx) => {
                  const srcStyle = getSourceStyle(lead.source);
                  const date = new Date(lead.createdAt);
                  const dateStr = date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
                  const timeStr = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
                  return (
                    <div key={lead._id} className="adm-mobile-card">
                      <div className="adm-mobile-card-top">
                        <div className="adm-mobile-card-left">
                          <div className="adm-mobile-num">#{idx + 1}</div>
                          <div>
                            <div className="adm-mobile-name">{lead.name}</div>
                            <div className="adm-mobile-phone">+91 {lead.phone}</div>
                          </div>
                        </div>
                        <button
                          className="adm-delete-btn"
                          onClick={() => setDeleteTarget(lead)}
                          title="Delete lead"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="adm-mobile-card-meta">
                        <span
                          className="adm-badge"
                          style={{ background: srcStyle.bg, color: srcStyle.color, border: `1px solid ${srcStyle.border}` }}
                        >
                          {lead.source}
                        </span>
                        {lead.serviceName && <span className="adm-mobile-service">{lead.serviceName}</span>}
                        <span className="adm-mobile-date">{dateStr} · {timeStr}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
