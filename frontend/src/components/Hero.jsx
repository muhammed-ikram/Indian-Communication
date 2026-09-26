// import React from 'react';
// import heroBg from '../assets/hero.png';

// export default function Hero({ lang, t, onOpenLogin }) {
//   const isTelugu = lang === 'te';
//   const isDual = lang === 'both';

//   return (
//     <section id="hero" className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
//       {/* Dark gradient overlay to make text readable while showing background image */}
//       <div className="hero-overlay"></div>

//       <div className="container hero-container">
//         <div className="hero-content">
//           {/* Trust Badge */}
//           <div className="hero-badge animate-fade-in">
//             <span className="badge-pulse"></span>
//             <span className="badge-icon">🏛️</span>
//             <span>{t.hero.badge}</span>
//           </div>

//           {/* Main Title */}
//           <h1 className="hero-title animate-fade-in">
//             {isDual ? (
//               <>
//                 <span className="primary-title">Indian Communication</span>
//                 <span className="secondary-title">ఇండియన్ కమ్యూనికేషన్</span>
//               </>
//             ) : isTelugu ? (
//               'ఇండియన్ కమ్యూనికేషన్'
//             ) : (
//               'Indian Communication'
//             )}
//           </h1>

//           {/* Tagline */}
//           <h2 className="hero-tagline animate-fade-in">
//             {isDual ? (
//               <>
//                 <span>Your Trusted Financial Partner</span>
//                 <span className="bilingual-sub-white">మీ విశ్వసనీయ ఆర్థిక భాగస్వామి</span>
//               </>
//             ) : isTelugu ? (
//               'మీ విశ్వసనీయ ఆర్థిక భాగస్వామి'
//             ) : (
//               'Your Trusted Financial Partner'
//             )}
//           </h2>

//           {/* Description */}
//           <p className="hero-desc animate-fade-in">
//             {t.hero.description}
//           </p>

//           {/* Trust Pills */}
//           <div className="hero-trust-chips animate-fade-in">
//             <div className="trust-chip">
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                 <polyline points="20 6 9 17 4 12"></polyline>
//               </svg>
//               <span>{t.hero.trustPill1}</span>
//             </div>
//             <div className="trust-chip">
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                 <polyline points="20 6 9 17 4 12"></polyline>
//               </svg>
//               <span>{t.hero.trustPill2}</span>
//             </div>
//             <div className="trust-chip">
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                 <polyline points="20 6 9 17 4 12"></polyline>
//               </svg>
//               <span>{t.hero.trustPill3}</span>
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="hero-actions animate-fade-in">
//             <button
//               type="button"
//               className="btn-hero-primary"
//               onClick={onOpenLogin}
//               id="hero-get-started-btn"
//             >
//               <span>{t.hero.getStarted}</span>
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="5" y1="12" x2="19" y2="12"></line>
//                 <polyline points="12 5 19 12 12 19"></polyline>
//               </svg>
//             </button>

//             <a
//               href="#services"
//               className="btn-hero-outline"
//               id="hero-services-btn"
//             >
//               <span>{t.hero.ourServices}</span>
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="12" y1="5" x2="12" y2="19"></line>
//                 <polyline points="19 12 12 19 5 12"></polyline>
//               </svg>
//             </a>

//             <a
//               href="tel:+9198850 89488"
//               className="hero-call-action"
//               title="Call Us"
//             >
//               <span className="call-icon-bubble">📞</span>
//               <div className="call-info">
//                 <span className="call-label">{t.hero.callUs}</span>
//                 <span className="call-number">+91 98850 89488/ +91 98485 18326</span>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import heroBg from '../assets/hero.png';
import { FaWhatsapp } from "react-icons/fa";

export default function Hero({ lang, t, onOpenLogin }) {
  const isTelugu = lang === 'te';
  const isDual = lang === 'both';

  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark gradient overlay to make text readable while showing background image */}
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">

          {/* Trust Badge */}
          <div className="hero-badge animate-fade-in">
            <span className="badge-pulse"></span>
            <span className="badge-icon">🏛️</span>
            <span>{t.hero.badge}</span>
          </div>



          {/* Main Title */}
          <h1 className="hero-title animate-fade-in">
            {isDual ? (
              <>
                <span className="primary-title">
                  Indian Communication
                </span>

                <span className="secondary-title">
                  ఇండియన్ కమ్యూనికేషన్
                </span>
              </>
            ) : isTelugu ? (
              'ఇండియన్ కమ్యూనికేషన్'
            ) : (
              'Indian Communication'
            )}
          </h1>

          {/* Tagline */}
          <h2 className="hero-tagline animate-fade-in">
            {isDual ? (
              <>
                <span>Your Trusted Financial Partner</span>

                <span className="bilingual-sub-white">
                  మీ విశ్వసనీయ ఆర్థిక భాగస్వామి
                </span>
              </>
            ) : isTelugu ? (
              'మీ విశ్వసనీయ ఆర్థిక భాగస్వామి'
            ) : (
              'Your Trusted Financial Partner'
            )}
          </h2>

          {/* Description */}
          <p className="hero-desc animate-fade-in">
            {t.hero.description}
          </p>

          {/* Trust Pills */}
          <div className="hero-trust-chips animate-fade-in">

            <div className="trust-chip">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>

              <span>{t.hero.trustPill1}</span>
            </div>

            <div className="trust-chip">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>

              <span>{t.hero.trustPill2}</span>
            </div>

            <div className="trust-chip">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>

              <span>{t.hero.trustPill3}</span>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="hero-actions animate-fade-in">

            <button
              type="button"
              className="btn-hero-primary"
              onClick={onOpenLogin}
              id="hero-get-started-btn"
            >
              <span>{t.hero.getStarted}</span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <a
              href="#services"
              className="btn-hero-outline"
              id="hero-services-btn"
            >
              <span>{t.hero.ourServices}</span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>


            {/* CSP Details */}
            <div className="hero-csp-details animate-fade-in">
              <div className="csp-name">
                CSP: Mulla Muneer Basha
              </div>

              <div className="csp-address">
                Opp. PTC, 4th Road (Corner), Anantapur, AP
              </div>
            </div>


            <a
              href="tel:+919885089488"
              className="hero-call-action"
              title="Call Us"
            >
              {/* <span className="call-icon-bubble">📞</span> */}
              <span className="call-icon-bubble">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.34h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.1 6.1l1.03-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>

              </span>

              <div className="call-info">
                <span className="call-label">
                  {t.hero.callUs}
                </span>

                <span className="call-number">
                  +91 98850 89488 / +91 98485 18326
                </span>
              </div>
            </a>


            <a
              href="https://wa.me/919885089488?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              className="hero-call-action"
              title="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="call-icon-bubble">
                <FaWhatsapp size={22} />
              </span>

              <div className="call-info">
                <span className="call-label">
                  WhatsApp
                </span>

                <span className="call-number">
                  +91 98850 89488
                </span>
              </div>
            </a>


          </div>

        </div>
      </div>
    </section>
  );
}