import React from 'react';

export default function Footer({ onOpenRegister }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Top Footer Banner */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <span className="brand-symbol">⬢</span>
              <span className="brand-title">HACKHEIST 2026</span>
            </div>
            <p className="footer-brand-desc">
              Organized by <strong>GDG on Campus MIET</strong> (Google Developer Groups).
              An unyielding 24-hour collegiate infiltration sprint fostering innovation,
              cyber resilience, and breakthrough engineering.
            </p>
            <div className="footer-meta-pill">
              <span className="dot dot-green"></span>
              <span>MIET Meerut, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">// NAVIGATION</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>01. Overview Terminal</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>02. About HackHeist</a></li>
              <li><a href="#highlights" onClick={(e) => handleNavClick(e, 'highlights')}>03. Event Highlights</a></li>
              <li><a href="#details" onClick={(e) => handleNavClick(e, 'details')}>04. Schedule & Venue</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, 'faq')}>05. Rules & FAQ</a></li>
            </ul>
          </div>

          {/* Directives & Community */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">// DIRECTIVES</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-action-link" onClick={onOpenRegister}>
                  › Operative Registration
                </button>
              </li>
              <li><a href="#details" onClick={(e) => handleNavClick(e, 'details')}>› Venue Guidelines</a></li>
              <li><a href="#highlights" onClick={(e) => handleNavClick(e, 'highlights')}>› Mentorship Network</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, 'faq')}>› Code of Conduct</a></li>
            </ul>
          </div>

          {/* Community & Connect */}
          <div className="footer-community-col">
            <h4 className="footer-col-heading">// CONNECT_GDG</h4>
            <p className="footer-sub-text">
              Stay synchronized with announcements, workshops, and squad matching channels.
            </p>
            <div className="social-links-grid">
              <a
                href="https://gdg.community.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GDG Community Platform"
              >
                <span>GDG</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <span>GIT</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <span>IN</span>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Discord"
              >
                <span>DISC</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            <span>© 2026 HACKHEIST • GDG on Campus MIET. All rights reserved.</span>
            <span className="footer-disclaimer">Original cyber-heist event interface.</span>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Return to top of page"
          >
            <span>BACK_TO_TOP</span>
            <span className="arrow-up" aria-hidden="true">▲</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
