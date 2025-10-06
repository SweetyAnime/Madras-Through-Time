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
    nowImageUrl: '/src/kapaleeshwarar-temple-now.webp',
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
      
      {/* Professional Vintage Footer */}
      <footer className="pl-64 pr-8 bg-gradient-to-b from-vintage-brown to-vintage-darkbrown text-vintage-cream py-20 w-full relative border-t-2 border-vintage-sepia/50">
        <div className="absolute inset-0 bg-vintage-darkbrown/90"></div>
        
        <div className="w-full max-w-6xl mx-auto px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="font-vintage text-4xl font-bold text-vintage-cream mb-4 tracking-wide">
              Madras Through Time
            </h2>
            <p className="font-vintage text-xl text-vintage-sepia leading-relaxed max-w-3xl mx-auto">
              Preserving the heritage and celebrating the evolution of Chennai
            </p>
          </div>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <h3 className="font-vintage text-2xl font-semibold text-vintage-cream mb-4">
                Heritage
              </h3>
              <p className="font-vintage text-vintage-sepia leading-relaxed">
                Exploring the rich cultural tapestry and architectural marvels that define Chennai's timeless legacy.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-vintage text-2xl font-semibold text-vintage-cream mb-4">
                Mission
              </h3>
              <p className="font-vintage text-vintage-sepia leading-relaxed">
                Bridging the past and present through immersive storytelling and visual documentation.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-vintage text-2xl font-semibold text-vintage-cream mb-4">
                Vision
              </h3>
              <p className="font-vintage text-vintage-sepia leading-relaxed">
                Inspiring future generations to appreciate and preserve Chennai's remarkable transformation.
              </p>
            </div>
          </div>
          
          {/* Quote Section */}
          <div className="text-center mb-16 border-t border-b border-vintage-sepia/30 py-8">
            <p className="font-vintage text-xl italic text-vintage-cream leading-relaxed max-w-4xl mx-auto">
              "A city is not gauged by its length and width, but by the width of its vision and the height of its dreams"
            </p>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col space-y-8">
            {/* Competition Information */}
            <div className="text-center border-t border-vintage-sepia/30 pt-8">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/src/innovatia2.png" 
                  alt="Innovatia 4.0 Logo" 
                  className="w-12 h-12 mr-3 rounded-lg border-2 border-vintage-sepia/30 object-cover"
                  style={{
                    filter: 'sepia(30%) contrast(1.1) brightness(1.1)',
                  }}
                />
                <div className="text-left">
                  <h4 className="font-vintage text-lg font-semibold text-vintage-cream">
                    Innovatia 4.0 - Sri Sai Ram Engineering College
                  </h4>
                  <p className="font-vintage text-vintage-sepia text-sm">
                    Competition: Vintage Webverse
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="font-vintage text-vintage-cream font-semibold mb-2">
                  Team: Alpha Warriors
                </p>
                <p className="font-vintage text-vintage-sepia">
                  Janavi • Surthiga • Subash
                </p>
              </div>
            </div>
            
            {/* Copyright Section */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-vintage-sepia/30 pt-6">
              <div className="mb-4 md:mb-0">
                <p className="font-vintage text-lg text-vintage-cream">
                  © 2025 Madras Through Time
                </p>
                <p className="font-vintage text-vintage-sepia">
                  Crafted with passion for Chennai's Heritage
                </p>
              </div>
              
              <div className="text-vintage-sepia">
                <p className="font-vintage text-sm">
                  Preserving History • Celebrating Culture
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}