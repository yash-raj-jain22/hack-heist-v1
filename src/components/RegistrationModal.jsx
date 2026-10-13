import React, { useState, useEffect } from 'react';

export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    teamName: '',
    teamSize: '3',
    role: 'Full-Stack Hacker',
    track: 'AI & Intelligent Systems'
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Operative name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.college.trim()) newErrors.college = 'College/University name is required';
    if (!formData.teamName.trim()) newErrors.teamName = 'Syndicate (team) name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate unique cyber ticket ID
    const randomHex = Math.random().toString(16).substring(2, 6).toUpperCase();
    const id = `HH26-VAULT-${randomHex}`;
    setTicketId(id);
    setSubmitted(true);
  };

  const handleCopyTicket = () => {
    navigator.clipboard.writeText(ticketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      college: '',
      teamName: '',
      teamSize: '3',
      role: 'Full-Stack Hacker',
      track: 'AI & Intelligent Systems'
    });
    setErrors({});
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Terminal Header */}
        <div className="modal-header">
          <div className="modal-header-tag">
            <span className="dot dot-green"></span>
            <span className="modal-code">HACKHEIST_2026 // REGISTRATION_VAULT</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close registration dialog"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="reg-form" noValidate>
              <div className="form-intro">
                <h3 id="modal-title" className="form-title">OPERATIVE ENROLLMENT</h3>
                <p className="form-desc">
                  Register your squad for HackHeist 2026 at MIET Meerut. All slots are zero-cost.
                </p>
              </div>

              <div className="form-grid">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    OPERATIVE / LEAD NAME <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. Alex Mercer"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                    required
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    OFFICIAL / STUDENT EMAIL <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. alex@miet.ac.in"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    required
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                {/* College */}
                <div className="form-group">
                  <label htmlFor="college" className="form-label">
                    COLLEGE / INSTITUTION <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    placeholder="e.g. MIET Meerut"
                    value={formData.college}
                    onChange={handleChange}
                    className={`form-input ${errors.college ? 'input-error' : ''}`}
                    required
                  />
                  {errors.college && <span className="error-text">{errors.college}</span>}
                </div>

                {/* Syndicate Name */}
                <div className="form-group">
                  <label htmlFor="teamName" className="form-label">
                    SYNDICATE (TEAM) NAME <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    placeholder="e.g. Cipher Syndicate"
                    value={formData.teamName}
                    onChange={handleChange}
                    className={`form-input ${errors.teamName ? 'input-error' : ''}`}
                    required
                  />
                  {errors.teamName && <span className="error-text">{errors.teamName}</span>}
                </div>

                {/* Team Size */}
                <div className="form-group">
                  <label htmlFor="teamSize" className="form-label">
                    SYNDICATE SIZE
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="2">2 Operatives (Duo)</option>
                    <option value="3">3 Operatives (Trio)</option>
                    <option value="4">4 Operatives (Full Squad)</option>
                  </select>
                </div>

                {/* Role */}
                <div className="form-group">
                  <label htmlFor="role" className="form-label">
                    LEAD ROLE
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="Full-Stack Hacker">Full-Stack Hacker</option>
                    <option value="AI / ML Engineer">AI / ML Engineer</option>
                    <option value="Cybersecurity / Cryptographer">Cybersecurity / Cryptographer</option>
                    <option value="UI/UX & Product Architect">UI/UX & Product Architect</option>
                  </select>
                </div>

                {/* Track Interest */}
                <div className="form-group form-col-full">
                  <label htmlFor="track" className="form-label">
                    TARGET DOMAIN TRACK
                  </label>
                  <select
                    id="track"
                    name="track"
                    value={formData.track}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="AI & Intelligent Systems">AI & Intelligent Systems (GenAI, Agents, Models)</option>
                    <option value="Cyber Resilience & Web3">Cyber Resilience & Web3 (Security, Defense, Chains)</option>
                    <option value="Open Innovation & Real-World Fixes">Open Innovation & Real-World Fixes</option>
                    <option value="Cloud, DevOps & Scaled Systems">Cloud, DevOps & Scaled Systems</option>
                  </select>
                </div>
              </div>

              <div className="form-footer">
                <button type="submit" className="btn btn-primary btn-block">
                  CONFIRM VAULT ENTRY // SUBMIT
                </button>
                <p className="form-privacy-note">
                  🔒 Your data is stored locally for this demonstration. No external telemetry sent.
                </p>
              </div>
            </form>
          ) : (
            <div className="ticket-success-view">
              <div className="ticket-success-header">
                <div className="ticket-check-circle">✓</div>
                <h3 className="ticket-title">INFILTRATION CONFIRMED</h3>
                <p className="ticket-subtitle">
                  Operative profile loaded into the HackHeist 2026 registry.
                </p>
              </div>

              {/* Digital Cyber Badge / Ticket */}
              <div className="cyber-ticket-card">
                <div className="ticket-top-band">
                  <span>GDG ON CAMPUS MIET</span>
                  <span className="badge-pass-tag">OFFICIAL ACCESS PASS</span>
                </div>

                <div className="ticket-details">
                  <div className="ticket-row">
                    <span className="t-label">OPERATIVE:</span>
                    <strong className="t-val">{formData.fullName}</strong>
                  </div>
                  <div className="ticket-row">
                    <span className="t-label">SYNDICATE:</span>
                    <strong className="t-val">{formData.teamName} ({formData.teamSize} Operatives)</strong>
                  </div>
                  <div className="ticket-row">
                    <span className="t-label">TRACK:</span>
                    <span className="t-val accent-green">{formData.track}</span>
                  </div>
                  <div className="ticket-row">
                    <span className="t-label">VENUE:</span>
                    <span className="t-val">MIET Meerut (Auditorium & Labs)</span>
                  </div>
                  <div className="ticket-row">
                    <span className="t-label">DATE & TIME:</span>
                    <span className="t-val">March 27, 2026 • 9:00 AM Onwards</span>
                  </div>
                </div>

                <div className="ticket-bottom-bar">
                  <div className="ticket-code-group">
                    <span className="ticket-code-label">CLEARANCE ID:</span>
                    <code className="ticket-code-value">{ticketId}</code>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={handleCopyTicket}
                  >
                    {copied ? 'COPIED!' : 'COPY ID'}
                  </button>
                </div>
              </div>

              <div className="ticket-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onClose}
                >
                  RETURN TO TERMINAL
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleReset}
                >
                  REGISTER ANOTHER SYNDICATE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
