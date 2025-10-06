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
    <div className={`fixed left-0 top-0 h-full w-64 z-50 border-r-4 border-vintage-sepia/50 shadow-2xl transition-all duration-700 ease-in-out transform hover:shadow-3xl vintage-glow flex flex-col ${
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
      <div className="relative px-6 py-6 border-b-2 border-vintage-sepia/30 transition-all duration-300 hover:border-vintage-cream vintage-border flex-shrink-0">
        {/* Chennai Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src="/src/logo of chennai.jpeg" 
            alt="Chennai Logo" 
            className="w-16 h-16 rounded-full border-4 border-vintage-sepia/50 transition-all duration-300 hover:border-vintage-cream hover:scale-110 object-cover vintage-border hover-lift"
            style={{
              filter: 'sepia(40%) contrast(1.3) brightness(1.1)',
              boxShadow: '0 0 25px rgba(139, 111, 71, 0.4), inset 0 0 15px rgba(0, 0, 0, 0.3)'
            }}
            onError={(e) => {
              e.currentTarget.src = '/placeholder-map.jpg';
            }}
          />
        </div>
        <h1 className="font-vintage text-2xl font-bold text-vintage-sepia letterpress-text text-center transition-all duration-300 hover:text-vintage-cream">
          Madras
        </h1>
        <p className="font-vintage text-lg text-vintage-cream text-center italic transition-all duration-300 hover:text-vintage-sepia">
          Through Time
        </p>
        <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-vintage-sepia to-transparent transition-all duration-300 hover:via-vintage-cream hover:h-2"></div>
      </div>

      {/* Navigation */}
      <nav className="relative px-6 py-4 flex-1 overflow-y-auto">
        <ul className="space-y-4">
          {navigationItems.map((item, index) => (
            <li key={item.id} className={`transition-all duration-500 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`} style={{ transitionDelay: `${(index + 1) * 150}ms` }}>
              <button
                onClick={() => scrollToSection(item.target)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 border-2 transform hover:scale-105 vintage-border ${
                  activeSection === item.id
                    ? 'border-vintage-cream bg-vintage-sepia/30 text-vintage-cream shadow-md scale-105 vintage-glow'
                    : 'border-vintage-sepia/30 text-vintage-sepia hover:border-vintage-cream hover:bg-vintage-brown/20 hover:text-vintage-cream'
                }`}
              >
                <span className="font-vintage text-lg letterpress-text transition-all duration-300">
                  {item.label}
                </span>
              </button>
              
              {/* Compact separator */}
              {index < navigationItems.length - 1 && (
                <div className="mt-4 flex items-center justify-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-vintage-sepia/50"></div>
                  <div className="mx-2 w-2 h-2 bg-vintage-sepia/50 rotate-45"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-vintage-sepia/50"></div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Compact footer */}
      <div className="px-6 py-4 border-t border-vintage-sepia/30">
        <p className="text-center text-sm text-vintage-cream font-serif">
          Heritage Lives On
        </p>
      </div>
    </div>
  );
}