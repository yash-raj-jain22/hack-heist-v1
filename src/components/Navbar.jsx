import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a href="#hero" className="navbar-brand" onClick={(e) => handleNavClick(e, 'hero')}>
          <div className="brand-badge-box">
            <span className="brand-symbol">⬢</span>
            <span className="brand-org">GDG MIET</span>
          </div>
          <div className="brand-title-wrap">
            <span className="brand-name">HACKHEIST</span>
            <span className="brand-tag">2026</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="nav-link">
                <span className="nav-num">01.</span> About
              </a>
            </li>
            <li>
              <a href="#highlights" onClick={(e) => handleNavClick(e, 'highlights')} className="nav-link">
                <span className="nav-num">02.</span> Highlights
              </a>
            </li>
            <li>
              <a href="#details" onClick={(e) => handleNavClick(e, 'details')} className="nav-link">
                <span className="nav-num">03.</span> Schedule & Venue
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="nav-link">
                <span className="nav-num">04.</span> Rules & FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="navbar-actions">
          <div className="status-indicator-badge desktop-only" title="Vault status: Open for registrations">
            <span className="status-dot"></span>
            <span className="status-text">VAULT OPEN</span>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-sm register-trigger-btn"
            onClick={onOpenRegister}
          >
            <span className="btn-glitch-text">REGISTER</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'active' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <span className="mobile-nav-terminal-title">// SYSTEM_NAV v2.6</span>
            <button
              type="button"
              className="mobile-nav-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="mobile-nav-link">
                  <span className="nav-num">// 01</span>
                  <span>About Event</span>
                </a>
              </li>
              <li>
                <a href="#highlights" onClick={(e) => handleNavClick(e, 'highlights')} className="mobile-nav-link">
                  <span className="nav-num">// 02</span>
                  <span>Event Highlights</span>
                </a>
              </li>
              <li>
                <a href="#details" onClick={(e) => handleNavClick(e, 'details')} className="mobile-nav-link">
                  <span className="nav-num">// 03</span>
                  <span>Event Details & Venue</span>
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="mobile-nav-link">
                  <span className="nav-num">// 04</span>
                  <span>Rules & Questions</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="mobile-nav-footer">
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
            >
              REGISTER FOR HACKHEIST →
            </button>
            <div className="mobile-nav-meta">
              <span>Organized by GDG on Campus MIET</span>
              <span className="meta-coords">28.9845° N, 77.7064° E</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
