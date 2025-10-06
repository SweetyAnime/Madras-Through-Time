'use client';

import { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  id: string;
  title: string;
  subtitle: string;
  historicalText: string;
  modernText: string;
  backgroundMapUrl?: string;
  historicalImageUrl?: string;
  thenImageUrl?: string;
  nowImageUrl?: string;
  isHeartSlide?: boolean;
  isHeritageSlide?: boolean;
}

export default function ParallaxSection({
  id,
  title,
  subtitle,
  historicalText,
  modernText,
  backgroundMapUrl = '/placeholder-map.jpg',
  historicalImageUrl = '/placeholder-historical.jpg',
  thenImageUrl,
  nowImageUrl,
  isHeartSlide = false,
  isHeritageSlide = false,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const mapLayerRef = useRef<HTMLDivElement>(null);
  const imageLayerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !mapLayerRef.current || !imageLayerRef.current || !contentRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        
        const mapOffset = scrollProgress * 50;
        const imageOffset = scrollProgress * 100;
        const contentOpacity = Math.min(1, Math.max(0, 1 - (rect.top - window.innerHeight * 0.2) / (window.innerHeight * 0.6)));
        
        mapLayerRef.current.style.transform = `translateY(${mapOffset}px)`;
        imageLayerRef.current.style.transform = `translateY(${imageOffset}px)`;
        contentRef.current.style.opacity = contentOpacity.toString();
        contentRef.current.style.transform = `translateY(${(1 - contentOpacity) * 20}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden w-full vintage-paper"
    >
      <div
        ref={mapLayerRef}
        className="absolute inset-0 parallax-layer transition-transform duration-75 ease-out"
        style={{
          backgroundImage: `url(${backgroundMapUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          filter: 'sepia(80%) saturate(60%) contrast(1.3) brightness(0.8)',
        }}
      />

      <div
        ref={imageLayerRef}
        className="absolute inset-0 parallax-layer transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url(${historicalImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          filter: 'sepia(90%) saturate(70%) contrast(1.4) brightness(0.7)',
        }}
      />

      {/* Enhanced vintage overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-vintage-darkbrown/85 via-vintage-brown/70 to-black/80 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      <div ref={contentRef} className="relative z-10 w-full pl-72 pr-8 transition-all duration-700 ease-out">
        <div className="vintage-border bg-gradient-to-br from-vintage-darkbrown/95 via-vintage-brown/90 to-vintage-darkbrown/95 p-10 rounded-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105 hover:from-vintage-brown/95 w-full max-w-none vintage-glow hover-lift">
          
          <div className="text-center mb-10 transition-all duration-500 relative animate-fade-in">
            <h2 className="font-vintage text-5xl font-bold text-vintage-sepia letterpress-text mb-4 transition-all duration-300 hover:text-vintage-cream hover:scale-105 animate-slide-in-left">
              {title}
            </h2>
            <p className="font-vintage text-2xl text-vintage-cream italic transition-all duration-300 hover:text-vintage-sepia animate-slide-in-right hover-vintage">
              {subtitle}
            </p>
            <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-vintage-sepia to-transparent transition-all duration-500 hover:via-vintage-cream hover:h-2 animate-float" />
          </div>

          {isHeartSlide ? (
            <div className="flex items-center justify-center min-h-96 relative animate-bounce-in">
              <div className="absolute -top-16 -left-16 text-5xl animate-bounce delay-100 hover:scale-125 transition-transform duration-300 vintage-glow">🌺</div>
              <div className="absolute -top-20 left-32 text-4xl animate-pulse delay-300 hover:scale-125 transition-transform duration-300 vintage-glow">🦋</div>
              <div className="absolute -top-12 right-24 text-5xl animate-bounce delay-500 hover:scale-125 transition-transform duration-300 vintage-glow">🌸</div>
              <div className="absolute -top-16 -right-12 text-4xl animate-pulse delay-700 hover:scale-125 transition-transform duration-300 vintage-glow">🌷</div>
              
              <div className="absolute top-8 -left-20 text-5xl animate-pulse delay-200 hover:scale-125 transition-transform duration-300 vintage-glow">🌻</div>
              <div className="absolute top-16 right-32 text-4xl animate-bounce delay-600 hover:scale-125 transition-transform duration-300 vintage-glow">🦋</div>
              <div className="absolute left-12 -top-8 text-4xl animate-bounce delay-900 hover:scale-125 transition-transform duration-300 vintage-glow">🎭</div>
              <div className="absolute -left-8 top-20 text-5xl animate-pulse delay-100 hover:scale-125 transition-transform duration-300 vintage-glow">🎪</div>
              <div className="absolute right-8 top-4 text-4xl animate-bounce delay-300 hover:scale-125 transition-transform duration-300 vintage-glow">🎨</div>
              <div className="absolute -right-16 bottom-16 text-5xl animate-pulse delay-500 hover:scale-125 transition-transform duration-300 vintage-glow">🎵</div>
              
              <div className="absolute bottom-8 -left-16 text-4xl animate-bounce delay-400 hover:scale-125 transition-transform duration-300 vintage-glow">🌺</div>
              <div className="absolute bottom-12 left-24 text-5xl animate-pulse delay-800 hover:scale-125 transition-transform duration-300 vintage-glow">🌸</div>
              <div className="absolute bottom-6 right-20 text-4xl animate-bounce delay-200 hover:scale-125 transition-transform duration-300 vintage-glow">🌷</div>
              <div className="absolute -bottom-12 -right-8 text-5xl animate-pulse delay-600 hover:scale-125 transition-transform duration-300 vintage-glow">🌻</div>
              <div className="absolute -bottom-16 left-8 text-4xl animate-bounce delay-1000 hover:scale-125 transition-transform duration-300 vintage-glow">🦋</div>
              <div className="absolute -bottom-20 right-40 text-5xl animate-pulse delay-400 hover:scale-125 transition-transform duration-300 vintage-glow">🌺</div>
              <div className="absolute bottom-16 -left-24 text-4xl animate-bounce delay-700 hover:scale-125 transition-transform duration-300 vintage-glow">🌸</div>
              <div className="absolute -bottom-8 left-40 text-5xl animate-pulse delay-300 hover:scale-125 transition-transform duration-300 vintage-glow">🌷</div>
              <div className="absolute bottom-20 right-8 text-4xl animate-bounce delay-900 hover:scale-125 transition-transform duration-300 vintage-glow">🌻</div>
              <div className="absolute -bottom-24 -left-8 text-5xl animate-pulse delay-1100 hover:scale-125 transition-transform duration-300 vintage-glow">🎭</div>
              <div className="absolute bottom-24 right-32 text-4xl animate-bounce delay-500 hover:scale-125 transition-transform duration-300 vintage-glow">🎪</div>
              <div className="absolute -bottom-28 left-28 text-5xl animate-pulse delay-200 hover:scale-125 transition-transform duration-300 vintage-glow">🎨</div>
              
              <div className="text-center z-10 bg-gradient-to-br from-vintage-darkbrown/95 via-vintage-brown/90 to-vintage-darkbrown/95 px-16 py-12 rounded-3xl border-4 border-vintage-sepia/50 shadow-2xl vintage-border vintage-glow hover-lift">
                <h2 className="font-vintage text-6xl font-bold mb-6 letterpress-text transition-all duration-500 hover:scale-110">
                  <span className="text-vintage-sepia">THE </span>
                  <span className="text-red-400 inline-block transition-all duration-300 hover:scale-105 hover:text-red-300" 
                        style={{
                          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(248, 113, 113, 0.4)',
                          animation: 'heartbeat 2s infinite',
                          fontWeight: '900',
                          WebkitFontSmoothing: 'antialiased',
                          MozOsxFontSmoothing: 'grayscale'
                        }}>
                    HEART
                  </span>
                  <span className="text-vintage-sepia"> OF</span>
                </h2>
                <h3 className="font-vintage text-6xl font-bold mb-8 text-cyan-400 letterpress-text transition-all duration-500 hover:scale-105 hover:text-cyan-300"
                    style={{
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(34, 211, 238, 0.3)',
                      fontWeight: '900',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale'
                    }}>
                  TAMILNADU
                </h3>
                <p className="font-vintage text-2xl text-vintage-cream italic mt-6 letterpress-text transition-all duration-300 hover:text-vintage-sepia">
                  Where Ancient Traditions Meet Eternal Beauty
                </p>
              </div>
            </div>
          ) : isHeritageSlide ? (
            <div className="text-center space-y-10 animate-fade-in">
              <div className="flex justify-center mb-10">
                <div className="w-full max-w-3xl">
                  <img 
                    src={historicalImageUrl} 
                    alt="Heritage Timeline from Madras to Chennai"
                    className="w-full h-[500px] object-cover rounded-xl shadow-2xl border-4 border-vintage-sepia/50 transition-all duration-300 hover:scale-105 hover:border-vintage-cream vintage-border hover-lift"
                    style={{
                      filter: 'sepia(40%) contrast(1.2) brightness(1.1)',
                      boxShadow: '0 0 40px rgba(139, 111, 71, 0.4), inset 0 0 30px rgba(0, 0, 0, 0.3)'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder-historical.jpg';
                    }}
                  />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-vintage-darkbrown/90 via-vintage-brown/80 to-vintage-darkbrown/90 p-12 rounded-2xl border-2 border-vintage-sepia/30 shadow-xl vintage-border vintage-glow">
                <p className="font-vintage text-xl text-vintage-cream leading-relaxed mb-8 transition-all duration-300 hover:text-vintage-sepia animate-slide-in-left hover-vintage">
                  {historicalText}
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-vintage-sepia to-transparent mx-auto my-8 transition-all duration-300 hover:w-40 hover:via-vintage-cream animate-float"></div>
                <p className="font-vintage text-xl text-vintage-cream leading-relaxed transition-all duration-300 hover:text-vintage-sepia animate-slide-in-right hover-vintage">
                  {modernText}
                </p>
              </div>
            </div>
          ) : (
          <div className="grid lg:grid-cols-2 gap-16 w-full animate-fade-in">
            <div className="bg-gradient-to-br from-vintage-darkbrown/85 via-vintage-brown/75 to-vintage-darkbrown/85 p-10 rounded-xl border-2 border-vintage-sepia/50 transition-all duration-500 hover:border-vintage-cream hover:shadow-lg hover:scale-105 hover:from-vintage-brown/85 vintage-border vintage-glow hover-lift animate-slide-in-left">
              <h3 className="font-vintage text-3xl font-bold text-vintage-sepia mb-6 text-center transition-all duration-300 hover:text-vintage-cream hover:scale-105 letterpress-text">
                Then
              </h3>
              <div className="space-y-6">
                <div className="w-full h-80 bg-vintage-darkbrown/60 rounded-lg border-2 border-vintage-sepia/30 flex items-center justify-center transition-all duration-300 hover:border-vintage-cream hover:bg-vintage-brown/60 overflow-hidden vintage-border">
                  {thenImageUrl ? (
                    <img 
                      src={thenImageUrl} 
                      alt={`${title} - Historical`}
                      className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                      style={{
                        filter: 'sepia(60%) contrast(1.3) brightness(0.9)',
                      }}
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder-historical.jpg';
                      }}
                    />
                  ) : (
                    <span className="text-vintage-sepia italic transition-all duration-300 hover:text-vintage-cream text-lg">Historical Image Placeholder</span>
                  )}
                </div>
                <p className="font-vintage text-vintage-cream leading-relaxed transition-all duration-300 hover:text-vintage-sepia text-lg hover-vintage">
                  {historicalText}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-vintage-brown/85 via-vintage-sepia/75 to-vintage-brown/85 p-10 rounded-xl border-2 border-vintage-sepia/50 transition-all duration-500 hover:border-vintage-cream hover:shadow-lg hover:scale-105 hover:from-vintage-sepia/85 vintage-border vintage-glow hover-lift animate-slide-in-right">
              <h3 className="font-vintage text-3xl font-bold text-vintage-cream mb-6 text-center transition-all duration-300 hover:text-vintage-sepia hover:scale-105 letterpress-text">
                Now
              </h3>
              <div className="space-y-6">
                <div className="w-full h-80 bg-vintage-brown/60 rounded-lg border-2 border-vintage-sepia/30 flex items-center justify-center transition-all duration-300 hover:border-vintage-cream hover:bg-vintage-sepia/60 overflow-hidden vintage-border">
                  {nowImageUrl ? (
                    <img 
                      src={nowImageUrl} 
                      alt={`${title} - Modern`}
                      className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                      style={{
                        filter: 'sepia(30%) contrast(1.2) brightness(1.1)',
                      }}
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder-historical.jpg';
                      }}
                    />
                  ) : (
                    <span className="text-vintage-cream italic transition-all duration-300 hover:text-vintage-sepia text-lg">Modern Image Placeholder</span>
                  )}
                </div>
                <p className="font-vintage text-vintage-cream leading-relaxed transition-all duration-300 hover:text-vintage-sepia text-lg hover-vintage">
                  {modernText}
                </p>
              </div>
            </div>
          </div>
          )}

          <div className="mt-12 pt-8 border-t-2 border-vintage-sepia/30 transition-all duration-300 hover:border-vintage-cream">
            <div className="flex items-center justify-center space-x-8 transition-all duration-500 hover:scale-110 animate-bounce-in">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-vintage-sepia transition-all duration-300 hover:bg-gradient-to-r hover:to-vintage-cream hover:w-20 vintage-glow"></div>
              <div className="w-4 h-4 bg-vintage-sepia rotate-45 transition-all duration-300 hover:bg-vintage-cream hover:rotate-90 hover:scale-125 vintage-glow"></div>
              <div className="font-vintage text-vintage-sepia hover:text-vintage-cream transition-all duration-300 text-xl hover-vintage">❋</div>
              <div className="w-4 h-4 bg-vintage-sepia rotate-45 transition-all duration-300 hover:bg-vintage-cream hover:rotate-90 hover:scale-125 vintage-glow"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-transparent to-vintage-sepia transition-all duration-300 hover:bg-gradient-to-l hover:to-vintage-cream hover:w-20 vintage-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
