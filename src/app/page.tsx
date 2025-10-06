import VintageSidebar from '@/components/VintageSidebar';
import ParallaxSection from '@/components/ParallaxSection';

const landmarkData = [
  {
    id: 'marina-beach',
    title: 'Marina Beach',
    subtitle: 'The Pearl of the Indian Ocean',
    historicalText: 'Marina Beach, stretching over 13 kilometers, has been the soul of Chennai since the colonial era. Originally called "Madras Marina," this pristine coastline served as a promenade for British officials and local residents. The beach witnessed historic moments, from independence rallies to cultural celebrations, making it an integral part of Chennai\'s social fabric.',
    modernText: 'Today, Marina Beach stands as one of the world\'s longest natural urban beaches, attracting millions of visitors annually. The beach has been beautifully developed with modern amenities while preserving its natural charm. From sunrise joggers to evening families, Marina continues to be the beating heart of Chennai\'s social life.',
    backgroundMapUrl: '/src/now current administrative headquators.jpg',
    historicalImageUrl: '/src/marina beach then.webp',
    thenImageUrl: '/src/marina beach then.webp',
    nowImageUrl: '/src/marina beach now.webp',
  },
  {
    id: 'kabaleshwar-temple',
    title: 'Kabaleshwar Temple',
    subtitle: 'Sacred Heritage of Chennai',
    historicalText: 'The ancient Kabaleshwar Temple represents centuries of spiritual tradition and architectural excellence. Built in the traditional Dravidian style, this temple has been a center of devotion and cultural preservation for generations, showcasing intricate stone carvings and timeless design principles.',
    modernText: 'Today, the Kabaleshwar Temple continues to serve as an active place of worship while preserving its historical significance. The temple has been carefully maintained and restored, ensuring that its architectural beauty and spiritual essence remain intact for future generations.',
    backgroundMapUrl: '/src/Now  Current administrative headquarters.jpg',
    historicalImageUrl: '/src/kabaleeshwarar temple then.webp',
    thenImageUrl: '/src/kabaleeshwarar temple then.webp',
    nowImageUrl: '/src/kabaleeshwarar temple now.webp',
  },
  {
    id: 'ripon-building',
    title: 'Ripon Building',
    subtitle: 'Seat of Civic Administration',
    historicalText: 'Constructed in 1913, the Ripon Building was named after Lord Ripon, the Viceroy of India. This Neo-Classical structure with Corinthian columns served as the headquarters of the Madras Corporation. The building\'s white façade and imposing clock tower made it a landmark of British administrative architecture in South India.',
    modernText: 'The Ripon Building continues to house the Greater Chennai Corporation, serving as the administrative heart of the city. Recently restored, it maintains its colonial grandeur while incorporating modern facilities. The building stands as a testament to Chennai\'s administrative continuity from the colonial era to the present day.',
    backgroundMapUrl: '/src/Now  Current administrative headquarters.jpg',
    historicalImageUrl: '/src/then ribbon building structure.webp',
    thenImageUrl: '/src/then ribbon building structure.webp',
    nowImageUrl: '/src/now ribbon building struture.webp',
  },
  {
    id: 'central-station',
    title: 'Chennai Central',
    subtitle: 'The Gateway to South India',
    historicalText: 'Built in 1873, Madras Central was one of the grandest railway stations in British India. Originally called Central Station, it served as the terminus for the Madras Railway Company. The station featured Indo-Saracenic architecture with red brick facades and was a symbol of British engineering prowess in colonial India.',
    modernText: 'Today, Chennai Central stands as one of India\'s busiest railway stations, serving over 550,000 passengers daily. While maintaining its historical charm, the station has been modernized with electronic displays, escalators, and improved passenger amenities. It remains the primary railway hub connecting Chennai to major cities across India.',
    backgroundMapUrl: '/src/now current administrative headquators.jpg',
    historicalImageUrl: '/src/Then Historic train station architecture.jpg',
    thenImageUrl: '/src/Then Historic train station architecture.jpg',
    nowImageUrl: '/src/Now  Current administrative headquarters.jpg',
  },
  {
    id: 'chennai-heritage',
    title: 'Heritage Timeline from Madras to Chennai',
    subtitle: 'Legacy of Timeless Beauty',
    historicalText: 'Chennai\'s heritage encompasses centuries of architectural splendor, cultural richness, and historical significance. From ancient temples to colonial buildings, the city has preserved its magnificent past while embracing progress. Each heritage structure tells a story of the diverse civilizations that have shaped this great metropolis.',
    modernText: 'Today, Chennai stands as a guardian of South Indian heritage, where ancient traditions seamlessly blend with contemporary life. The city\'s commitment to preserving its historical landmarks ensures that future generations can witness the grandeur and cultural depth that define Chennai\'s unique identity.',
    backgroundMapUrl: '/src/now current administrative headquators.jpg',
    historicalImageUrl: '/src/heritage.jpeg',
    thenImageUrl: '/src/heritage.jpeg',
    nowImageUrl: '/src/heritage.jpeg',
    isHeritageSlide: true,
  },
  {
    id: 'heart-of-tamilnadu',
    title: 'The Heart of Tamil Nadu',
    subtitle: 'Where Culture Blooms Eternal',
    historicalText: 'Chennai has always been the cultural capital of Tamil Nadu, where traditions bloom like eternal flowers. The city\'s rich heritage in music, dance, literature, and arts has made it the beating heart of Tamil culture, attracting artists and scholars from across the world.',
    modernText: 'Today, Chennai continues to be the cultural epicenter of South India, nurturing classical arts while embracing contemporary expressions. The city\'s festivals, performances, and cultural institutions keep the Tamil heritage alive and vibrant for future generations.',
    backgroundMapUrl: '/src/now current administrative headquators.jpg',
    historicalImageUrl: '/src/journey through time.jpg',
    isHeartSlide: true,
  },
];

export default function HomePage() {
  return (
    <main className="relative vintage-noise">
      {/* Vintage Sidebar */}
      <VintageSidebar />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center pl-64 pr-8 transition-all duration-1000 relative overflow-hidden w-full vintage-paper"
        style={{
          backgroundImage: 'url("/src/Now  Current administrative headquarters.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Enhanced vintage overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-vintage-darkbrown/80 via-vintage-brown/60 to-vintage-darkbrown/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        
        <div className="text-center w-full max-w-none px-8 transition-all duration-700 ease-out animate-fade-in relative z-10 vintage-glow">
          {/* Chennai Logo */}
          <div className="mb-8 transition-all duration-500 hover:scale-110 animate-bounce-in">
            <img 
              src="/src/logo of chennai.jpeg" 
              alt="Chennai Logo" 
              className="w-32 h-32 mx-auto rounded-full shadow-2xl border-4 border-vintage-brown/50 transition-all duration-300 hover:border-vintage-sepia hover:shadow-3xl vintage-border hover-lift"
              style={{
                filter: 'sepia(30%) contrast(1.2) brightness(1.1)',
                boxShadow: '0 0 30px rgba(139, 111, 71, 0.4), inset 0 0 20px rgba(0, 0, 0, 0.3)'
              }}
            />
          </div>
          
          <h1 className="font-vintage text-7xl font-bold text-vintage-sepia letterpress-text mb-6 transition-all duration-500 hover:text-vintage-cream hover:scale-105 animate-typewriter">
            Madras Through Time
          </h1>
          <p className="font-vintage text-3xl text-vintage-cream italic mb-8 transition-all duration-300 hover:text-vintage-sepia animate-slide-in-left hover-vintage">
            A Journey Through Chennai's Rich Heritage
          </p>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-vintage-sepia to-transparent mx-auto mb-8 transition-all duration-500 hover:w-64 hover:via-vintage-cream animate-float"></div>
          <p className="font-vintage text-xl text-vintage-cream leading-relaxed w-full max-w-3xl mx-auto transition-all duration-300 hover:text-vintage-sepia animate-slide-in-right">
            Discover the timeless landmarks that have shaped Chennai from the colonial era to the modern day. 
            Each monument tells a story of transformation, preserving the past while embracing the future.
          </p>
          
          {/* Enhanced decorative elements */}
          <div className="mt-16 flex items-center justify-center space-x-12 transition-all duration-700 hover:scale-110 animate-bounce-in">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent to-vintage-sepia transition-all duration-300 hover:w-32 hover:to-vintage-cream animate-float"></div>
            <div className="w-6 h-6 bg-vintage-sepia rotate-45 transition-all duration-300 hover:bg-vintage-cream hover:rotate-90 hover:scale-125 vintage-glow"></div>
            <div className="font-vintage text-2xl text-vintage-sepia transition-all duration-300 hover:text-vintage-cream hover:scale-105 letterpress-text hover-vintage">Est. 1644</div>
            <div className="w-6 h-6 bg-vintage-sepia rotate-45 transition-all duration-300 hover:bg-vintage-cream hover:rotate-90 hover:scale-125 vintage-glow"></div>
            <div className="w-24 h-1 bg-gradient-to-l from-transparent to-vintage-sepia transition-all duration-300 hover:w-32 hover:to-vintage-cream animate-float"></div>
          </div>
        </div>
      </section>

      {/* Parallax Sections */}
      {landmarkData.map((landmark) => (
        <ParallaxSection
          key={landmark.id}
          id={landmark.id}
          title={landmark.title}
          subtitle={landmark.subtitle}
          historicalText={landmark.historicalText}
          modernText={landmark.modernText}
          backgroundMapUrl={landmark.backgroundMapUrl}
          historicalImageUrl={landmark.historicalImageUrl}
          thenImageUrl={landmark.thenImageUrl}
          nowImageUrl={landmark.nowImageUrl}
          isHeartSlide={landmark.isHeartSlide}
          isHeritageSlide={landmark.isHeritageSlide}
        />
      ))}
      
      {/* Enhanced Vintage Footer */}
      <footer className="pl-64 pr-8 bg-gradient-to-br from-vintage-darkbrown via-black/80 to-vintage-darkbrown text-vintage-cream py-16 transition-all duration-500 hover:from-vintage-brown w-full vintage-paper relative overflow-hidden">
        {/* Footer background effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(139, 111, 71, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(212, 184, 150, 0.05) 0%, transparent 50%)',
          backgroundSize: '300px 300px, 400px 400px'
        }}></div>
        
        <div className="w-full max-w-none mx-auto px-8 text-center relative z-10">
          <h3 className="font-vintage text-4xl font-bold mb-6 transition-all duration-300 hover:text-vintage-sepia hover:scale-105 letterpress-text animate-fade-in">
            Madras Through Time
          </h3>
          <p className="font-vintage text-vintage-sepia mb-8 transition-all duration-300 hover:text-vintage-cream text-xl leading-relaxed animate-slide-in-left">
            Preserving the heritage and celebrating the evolution of Chennai
          </p>
          
          {/* Enhanced decorative divider */}
          <div className="flex items-center justify-center space-x-8 mb-8 transition-all duration-500 hover:scale-110 animate-bounce-in">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-vintage-sepia transition-all duration-300 hover:w-24 hover:to-vintage-cream vintage-glow"></div>
            <div className="w-4 h-4 bg-vintage-sepia rotate-45 transition-all duration-300 hover:bg-vintage-cream hover:rotate-90 hover:scale-125 vintage-glow"></div>
            <div className="font-vintage text-xl text-vintage-sepia hover-vintage">❋</div>
            <div className="w-4 h-4 bg-vintage-sepia rotate-45 transition-all duration-300 hover:bg-vintage-cream hover:rotate-90 hover:scale-125 vintage-glow"></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-vintage-sepia transition-all duration-300 hover:w-24 hover:to-vintage-cream vintage-glow"></div>
          </div>
          
          <p className="font-vintage text-lg text-vintage-brown italic transition-all duration-300 hover:text-vintage-sepia hover:scale-105 mb-6 animate-slide-in-right hover-vintage">
            "A city is not gauged by its length and width, but by the width of its vision and the height of its dreams"
          </p>
          
          {/* Additional vintage elements */}
          <div className="flex items-center justify-center space-x-12 mt-8 opacity-70 hover:opacity-100 transition-all duration-500">
            <div className="font-vintage text-vintage-brown hover:text-vintage-sepia transition-all duration-300 hover-vintage">🏛️</div>
            <div className="font-vintage text-vintage-brown hover:text-vintage-sepia transition-all duration-300 hover-vintage">🌺</div>
            <div className="font-vintage text-vintage-brown hover:text-vintage-sepia transition-all duration-300 hover-vintage">📜</div>
            <div className="font-vintage text-vintage-brown hover:text-vintage-sepia transition-all duration-300 hover-vintage">🕯️</div>
            <div className="font-vintage text-vintage-brown hover:text-vintage-sepia transition-all duration-300 hover-vintage">⚓</div>
          </div>
        </div>
      </footer>
    </main>
  );
}