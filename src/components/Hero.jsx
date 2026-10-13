import React, { useState, useEffect } from 'react';

export default function Hero({ onOpenRegister }) {
  // Live countdown to event target (March 27, 2026 09:00:00)
  const [timeLeft, setTimeLeft] = useState({
    days: '14',
    hours: '08',
    minutes: '42',
    seconds: '19'
  });

  useEffect(() => {
    // Set a realistic countdown timer
    const targetDate = new Date('2026-03-27T09:00:00+05:30').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0')
        });
      } else {
        // Event day!
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Section">
      {/* Background cyber grid & scanline ambiance */}
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="hero-radial-vignette" aria-hidden="true"></div>

      <div className="container hero-container">
        {/* Terminal Header Metadata Tag */}
        <div className="hero-terminal-pill fade-in-up delay-1">
          <span className="terminal-prefix">$</span>
          <span className="terminal-code">INIT_OPERATION://HACKHEIST_2026</span>
          <span className="terminal-pipe">|</span>
          <span className="terminal-status">CLEARANCE: GRANTED</span>
        </div>

        {/* Organizer Attribution */}
        <div className="hero-organizer fade-in-up delay-2">
          <span className="organizer-prefix">PRESENTED BY</span>
          <div className="organizer-badge">
            <span className="organizer-dot"></span>
            <strong>GDG on Campus MIET</strong>
            <span className="organizer-sub">Google Developer Groups</span>
          </div>
        </div>

        {/* Main Display Title with Cyber Entrance Animation */}
        <div className="hero-title-wrapper fade-in-up delay-3">
          <h1 className="hero-title" data-text="HACKHEIST">
            <span className="title-letter">H</span>
            <span className="title-letter">A</span>
            <span className="title-letter">C</span>
            <span className="title-letter">K</span>
            <span className="title-letter title-accent">H</span>
            <span className="title-letter title-accent">E</span>
            <span className="title-letter title-accent">I</span>
            <span className="title-letter title-accent">S</span>
            <span className="title-letter title-accent">T</span>
          </h1>
          <div className="hero-year-tag">2026_EDITION</div>
        </div>

        {/* Tagline */}
        <p className="hero-tagline fade-in-up delay-4">
          Break the code. Steal the spotlight. Build the future.
        </p>

        <p className="hero-subtext fade-in-up delay-4">
          The ultimate 24-hour collegiate infiltration sprint. Gather your syndicate, architect groundbreaking tech, and claim the bounty.
        </p>

        {/* Quick Intel Ribbon (Date, Time, Venue) */}
        <div className="hero-intel-grid fade-in-up delay-5">
          <div className="intel-card">
            <span className="intel-label">// EVENT_DATE</span>
            <div className="intel-val">
              <span className="intel-icon">📅</span>
              <span>March 27 – 28, 2026</span>
            </div>
          </div>

          <div className="intel-card">
            <span className="intel-label">// TIMING</span>
            <div className="intel-val">
              <span className="intel-icon">⏱️</span>
              <span>9:00 AM Onwards</span>
            </div>
          </div>

          <div className="intel-card">
            <span className="intel-label">// VENUE</span>
            <div className="intel-val">
              <span className="intel-icon">📍</span>
              <span>MIET Meerut Campus</span>
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="hero-actions fade-in-up delay-6">
          <button
            type="button"
            className="btn btn-primary btn-lg hero-cta-btn"
            onClick={onOpenRegister}
          >
            <span className="btn-glow-layer"></span>
            <span className="btn-text">INFILTRATE // REGISTER NOW</span>
            <span className="btn-arrow">→</span>
          </button>

          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="btn btn-secondary btn-lg"
          >
            <span>HEIST BRIEF</span>
            <span className="btn-bracket">[▼]</span>
          </a>
        </div>

        {/* Live Mission Countdown Tracker */}
        <div className="hero-countdown-box fade-in-up delay-7">
          <div className="countdown-header">
            <span className="countdown-dot"></span>
            <span className="countdown-title">VAULT BREACH COUNTDOWN</span>
            <span className="countdown-tz">IST (UTC+5:30)</span>
          </div>
          <div className="countdown-grid">
            <div className="countdown-unit">
              <span className="countdown-num">{timeLeft.days}</span>
              <span className="countdown-label">DAYS</span>
            </div>
            <span className="countdown-sep">:</span>
            <div className="countdown-unit">
              <span className="countdown-num">{timeLeft.hours}</span>
              <span className="countdown-label">HOURS</span>
            </div>
            <span className="countdown-sep">:</span>
            <div className="countdown-unit">
              <span className="countdown-num">{timeLeft.minutes}</span>
              <span className="countdown-label">MINUTES</span>
            </div>
            <span className="countdown-sep">:</span>
            <div className="countdown-unit">
              <span className="countdown-num">{timeLeft.seconds}</span>
              <span className="countdown-label">SECONDS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
