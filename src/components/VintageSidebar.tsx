'use client';

import { useState, useEffect } from 'react';
// import { playClickSound } from '@/utils/sounds-clean';

interface NavigationItem {
  id: string;
  label: string;
  target: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'marina-beach', label: 'Marina Beach', target: 'marina-beach' },
  { id: 'kabaleshwar-temple', label: 'Kabaleshwar Temple', target: 'kabaleshwar-temple' },
  { id: 'ripon-building', label: 'Ripon Building', target: 'ripon-building' },
  { id: 'central-station', label: 'Central Station', target: 'central-station' },
  { id: 'chennai-heritage', label: 'Chennai Heritage', target: 'chennai-heritage' },
  { id: 'heart-of-tamilnadu', label: 'Heart of Tamil Nadu', target: 'heart-of-tamilnadu' },
];

export default function VintageSidebar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClickSound = () => {
    try {
      // Create a simple click sound using Web Audio API
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Create a short, pleasant click sound
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.type = 'sine';
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
      
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.target));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (target: string) => {
    handleClickSound(); // Play sound on navigation click
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed left-0 top-0 h-full w-64 z-50 border-r-4 border-vintage-sepia/50 shadow-2xl transition-all duration-700 ease-in-out transform hover:shadow-3xl vintage-glow ${
      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
    }`}
    style={{
      background: 'linear-gradient(135deg, #3C2E26 0%, #2A1F1A 25%, #1A1210 50%, #2A1F1A 75%, #3C2E26 100%)',
      backgroundAttachment: 'fixed',
      boxShadow: '8px 0 30px rgba(0, 0, 0, 0.4), inset -2px 0 10px rgba(139, 111, 71, 0.2)'
    }}>
      {/* Enhanced vintage texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-vintage-sepia/10 to-vintage-brown/5 transition-opacity duration-300 vintage-paper"></div>
      
      {/* Header */}
      <div className="relative p-8 border-b-2 border-vintage-sepia/30 transition-all duration-300 hover:border-vintage-cream vintage-border">
        {/* Chennai Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src="/src/logo of chennai.jpeg" 
            alt="Chennai Logo" 
            className="w-20 h-20 rounded-full border-4 border-vintage-sepia/50 transition-all duration-300 hover:border-vintage-cream hover:scale-110 object-cover vintage-border hover-lift"
            style={{
              filter: 'sepia(40%) contrast(1.3) brightness(1.1)',
              boxShadow: '0 0 25px rgba(139, 111, 71, 0.4), inset 0 0 15px rgba(0, 0, 0, 0.3)'
            }}
            onError={(e) => {
              e.currentTarget.src = '/placeholder-map.jpg';
            }}
          />
        </div>
        <h1 className="font-vintage text-3xl font-bold text-vintage-sepia letterpress-text text-center transition-all duration-300 hover:text-vintage-cream hover:scale-105 animate-slide-in-left">
          Madras
        </h1>
        <p className="font-vintage text-xl text-vintage-cream text-center italic transition-all duration-300 hover:text-vintage-sepia animate-slide-in-right hover-vintage">
          Through Time
        </p>
        <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-vintage-sepia to-transparent transition-all duration-300 hover:via-vintage-cream hover:h-2 animate-float"></div>
      </div>

      {/* Navigation */}
      <nav className="relative p-8">
        <ul className="space-y-8">
          {navigationItems.map((item, index) => (
            <li key={item.id} className={`transition-all duration-500 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`} style={{ transitionDelay: `${(index + 1) * 150}ms` }}>
              <button
                onClick={() => scrollToSection(item.target)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-500 ease-in-out border-2 transform hover:scale-105 hover:shadow-lg vintage-border hover-lift ${
                  activeSection === item.id
                    ? 'border-vintage-cream bg-vintage-sepia/30 text-vintage-cream shadow-md scale-105 vintage-glow'
                    : 'border-vintage-sepia/30 text-vintage-sepia hover:border-vintage-cream hover:bg-vintage-brown/20 hover:text-vintage-cream'
                }`}
              >
                <span className="font-vintage text-xl letterpress-text transition-all duration-300 hover:tracking-wide hover-vintage">
                  {item.label}
                </span>
              </button>
              
              {/* Enhanced ornate separator */}
              {index < navigationItems.length - 1 && (
                <div className="mt-8 flex items-center justify-center transition-all duration-500 hover:scale-110 animate-float">
                  <div className="w-20 h-1 bg-gradient-to-r from-transparent to-vintage-sepia transition-all duration-300 hover:to-vintage-cream hover:w-24 vintage-glow"></div>
                  <div className="mx-3 w-3 h-3 bg-vintage-sepia rotate-45 transition-all duration-300 hover:bg-vintage-cream hover:rotate-90 hover:scale-125 vintage-glow"></div>
                  <div className="w-20 h-1 bg-gradient-to-l from-transparent to-vintage-sepia transition-all duration-300 hover:to-vintage-cream hover:w-24 vintage-glow"></div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Enhanced decorative footer */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="border-t-2 border-vintage-sepia/30 pt-6 transition-all duration-300 hover:border-vintage-cream vintage-border">
          <p className="text-center text-lg text-vintage-cream italic font-serif transition-all duration-300 hover:text-vintage-sepia hover:scale-105 letterpress-text hover-vintage">
            Heritage Lives On
          </p>
          <div className="mt-4 flex items-center justify-center space-x-4 opacity-70 hover:opacity-100 transition-all duration-500">
            <div className="text-vintage-sepia hover:text-vintage-cream transition-all duration-300 hover-vintage">🏛️</div>
            <div className="text-vintage-sepia hover:text-vintage-cream transition-all duration-300 hover-vintage">🌺</div>
            <div className="text-vintage-sepia hover:text-vintage-cream transition-all duration-300 hover-vintage">📜</div>
          </div>
        </div>
      </div>
    </div>
  );
}