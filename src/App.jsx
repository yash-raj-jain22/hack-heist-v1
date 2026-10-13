import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Details from './components/Details';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div className="app-root">
      {/* Subtle cursor-following glow on desktop, disabled on touch devices */}
      <CursorGlow />

      {/* Main Navigation Bar */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Content Landmark */}
      <main id="main-content">
        <Hero onOpenRegister={handleOpenRegister} />
        <About />
        <Highlights />
        <Details />
        <FAQ />
        <FinalCTA onOpenRegister={handleOpenRegister} />
      </main>

      {/* Footer */}
      <Footer onOpenRegister={handleOpenRegister} />

      {/* Interactive Operative Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
      />
    </div>
  );
}
