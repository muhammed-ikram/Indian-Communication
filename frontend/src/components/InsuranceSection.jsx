import React from 'react';

const insurancePoints = [
  {
    id: 'life',
    badgeEn: 'Life & Term',
    badgeTe: 'లైఫ్ ఇన్సూరెన్స్',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    titleEn: 'Financial Security for Your Family',
    titleTe: 'మీ కుటుంబానికి శాశ్వత ఆర్థిక భద్రత',
    descEn: 'Life and term insurance guarantees your family’s standard of living, children’s higher education, and liabilities remain shielded even in unforeseen events.',
    descTe: 'అనుకోని సంఘటనలు ఎదురైనా మీ కుటుంబ జీవన ప్రమాణాలు, పిల్లల చదువులకు తిరుగులేని ఆర్థిక భరోసా.',
    highlightEn: 'Up to ₹1 Cr Coverage',
    highlightTe: '₹1 కోటి వరకు కవరేజ్'
  },
  {
    id: 'health',
    badgeEn: 'Health & Medical',
    badgeTe: 'ఆరోగ్య బీమా',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    titleEn: 'Healthcare Without Worry',
    titleTe: 'వైద్య ఖర్చులకు నగదు రహిత భరోసా',
    descEn: 'Covers sudden hospitalization bills, ICU fees, day-care procedures and critical illnesses at 10,000+ top cashless network hospitals across India.',
    descTe: 'దేశవ్యాప్తంగా 10,000+ ప్రముఖ ఆసుపత్రులలో నగదు రహిత (Cashless) చికిత్స మరియు అత్యవసర వైద్య ఖర్చుల పూర్తి కవరేజ్.',
    highlightEn: '10,000+ Cashless Hospitals',
    highlightTe: '10,000+ నెట్‌వర్క్ హాస్పిటల్స్'
  },
  {
    id: 'motor',
    badgeEn: 'Motor & Vehicle',
    badgeTe: 'వాహన రక్షణ',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    titleEn: 'Vehicle & Asset Protection',
    titleTe: 'వాహనాలు & ఆస్తుల సంరక్షణ',
    descEn: 'Comprehensive two-wheeler, four-wheeler and commercial vehicle cover against accidents, theft, fire, and mandatory third-party liability.',
    descTe: 'బైకులు, కార్లు మరియు వాణిజ్య వాహనాలకు ప్రమాదాలు, దొంగతనాలు మరియు నష్టాల నుండి తక్షణ రక్షణ మరియు చట్టబద్ధమైన పాలసీ.',
    highlightEn: 'Instant Paperless Renewal',
    highlightTe: 'తక్షణ ఆన్‌లైన్ రెన్యూవల్'
  },
  {
    id: 'tax',
    badgeEn: 'Tax Savings',
    badgeTe: 'పన్ను ఆదా',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    titleEn: 'Tax Benefits Under Section 80C',
    titleTe: 'సెక్షన్ 80C క్రింద పన్ను ఆదా',
    descEn: 'Save up to ₹46,800 in tax every fiscal year under Section 80C and Section 10(10D) while building safe, compounded returns for retirement.',
    descTe: 'సెక్షన్ 80C క్రింద పన్ను తగ్గింపు మరియు 10(10D) ప్రకారం 100% పన్ను రహిత మెచ్యూరిటీ ప్రయోజనాలు.',
    highlightEn: 'Save up to ₹46,800 Tax',
    highlightTe: 'గరిష్ట పన్ను ఆదా'
  },
];

export default function InsuranceSection({ lang = 'en', onOpenEnquire }) {
  const isTelugu = lang === 'te';
  const isDual = lang === 'both';

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="insurance" className="insurance-section" aria-label="Insurance Protection Overview">
      <div className="container">
        <div className="insurance-inner">
          {/* Left Column: Heading, Subtitle, Trust Checklist & CTA */}
          <div className="insurance-text-col">
            <div className="insurance-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>{isTelugu ? 'భరోసా మరియు సంరక్షణ' : 'Why Insurance Matters'}</span>
            </div>

            <h2 className="insurance-heading">
              Protect What Matters Most
              {isDual && (
                <span className="insurance-sub-telugu">మీకు అత్యంత విలువైన వాటికి భద్రత</span>
              )}
            </h2>

            <p className="insurance-lead">
              {isTelugu
                ? 'ఇన్సూరెన్స్ అనేది కేవలం ఒక కాగితం కాదు — అది మీ కుటుంబ స్థిరత్వానికి ఇచ్చే ఒక తిరుగులేని వాగ్దానం. ఆరోగ్యం, వాహనం లేదా కుటుంబ భవిష్యత్తు ఏదైనా, సరైన పాలసీ మీకు పూర్తి ధైర్యాన్ని ఇస్తుంది.'
                : 'Insurance is not just a policy — it is a promise of stability and security. Whether it is your health, vehicle, or family’s long-term future, the right cover gives you the confidence to move forward without financial worry.'}
            </p>

            {/* Trust Checklist */}
            <div className="insurance-trust-list">
              <div className="insurance-trust-item">
                <div className="insurance-trust-icon-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>{isTelugu ? 'అన్ని ప్రముఖ కంపెనీల పాలసీలు (LIC, Star Health, HDFC ERGO)' : 'Partnered with Top Insurers (LIC, Star Health, HDFC ERGO)'}</span>
              </div>

              <div className="insurance-trust-item">
                <div className="insurance-trust-icon-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>{isTelugu ? '10 నిమిషాల్లో తక్షణ డిజిటల్ పాలసీ జారీ & రెన్యూవల్' : 'Instant Policy Issuance & Paperless Renewals in Minutes'}</span>
              </div>

              <div className="insurance-trust-item">
                <div className="insurance-trust-icon-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>{isTelugu ? 'క్లెయిమ్ సమయంలో ఉచిత స్థానిక కౌన్సిలింగ్ & సహాయం' : '100% Dedicated Local Claim Settlement Guidance'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="insurance-cta-group">
              <a
                href="#services"
                onClick={handleScrollToServices}
                className="btn-insurance-cta"
                title="Explore Insurance Plans"
              >
                <span>{isTelugu ? 'ఇన్సూరెన్స్ ప్లాన్స్ చూడండి' : 'Explore Insurance Plans'}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              {onOpenEnquire && (
                <button
                  type="button"
                  onClick={onOpenEnquire}
                  className="btn-insurance-secondary"
                  title="Get Free Insurance Quote"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>{isTelugu ? 'ఉచిత కోట్ పొందండి' : 'Get Free Quote'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: 2x2 Grid of 4 Protection Pillars */}
          <div className="insurance-points-grid">
            {insurancePoints.map((pt) => {
              const badge = isTelugu ? pt.badgeTe : pt.badgeEn;
              const title = isTelugu ? pt.titleTe : pt.titleEn;
              const desc = isTelugu ? pt.descTe : pt.descEn;
              const highlight = isTelugu ? pt.highlightTe : pt.highlightEn;

              return (
                <div key={pt.id} className="insurance-point-card">
                  <div className="insurance-card-top">
                    <div className="insurance-point-icon">
                      {pt.icon}
                    </div>
                    <span className="insurance-card-badge">{badge}</span>
                  </div>

                  <div className="insurance-card-content">
                    <h3 className="insurance-point-title">{title}</h3>
                    <p className="insurance-point-desc">{desc}</p>
                  </div>

                  <div className="insurance-card-bottom">
                    <span className="insurance-highlight-chip">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
