import React from 'react';
import { useInView } from '../hooks/useInView';

export default function FinalCTA({ onOpenRegister }) {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="register" className="final-cta-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className={`final-cta-card reveal-elem ${isInView ? 'revealed' : ''}`}>
          {/* Subtle cyber background line work */}
          <div className="cta-grid-pattern" aria-hidden="true"></div>
          
          <div className="cta-content-wrapper">
            {/* Terminal Alert Pill */}
            <div className="cta-badge">
              <span className="cta-badge-dot"></span>
              <span className="cta-badge-text">STATUS: SLOTS FILLING FAST</span>
            </div>

            {/* Main Headline */}
            <h2 className="cta-headline">
              Ready to <span className="text-neon-glow">HackHeist?</span>
            </h2>

            {/* Subtext */}
            <p className="cta-subtext">
              The blueprints are drawn. The mentors are ready. Assemble your syndicate of 2-4 operatives,
              choose your domain track, and claim your share of the bounty.
            </p>

            {/* Intel Badges */}
            <div className="cta-intel-chips">
              <span className="intel-chip">
                <span className="chip-key">DATE:</span> March 27–28, 2026
              </span>
              <span className="intel-chip">
                <span className="chip-key">TIMING:</span> 9:00 AM Onwards
              </span>
              <span className="intel-chip">
                <span className="chip-key">VENUE:</span> MIET Meerut Campus
              </span>
              <span className="intel-chip">
                <span className="chip-key">ORGANIZER:</span> GDG on Campus MIET
              </span>
            </div>

            {/* Interactive Registration Button */}
            <div className="cta-button-group">
              <button
                type="button"
                className="btn btn-primary btn-xl cta-main-button"
                onClick={onOpenRegister}
              >
                <span className="btn-glow-pulse"></span>
                <span className="btn-label">INITIATE REGISTRATION</span>
                <span className="btn-bracket" aria-hidden="true">→</span>
              </button>
            </div>

            <p className="cta-guarantee-note">
              🛡️ Zero registration fee • Free catering & overnight stay included • Certificates for all
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
