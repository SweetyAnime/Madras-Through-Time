# Madras Through Time

A single-page website that serves as a visual tribute to Chennai's (Madras') heritage, featuring vintage aesthetics and parallax animations.

## Features

- **Vintage Sidebar**: Fixed navigation with worn, archival styling
- **Parallax Animation**: Multi-layer scrolling effects with historical maps and images
- **Heritage Theme**: Warm, aged aesthetic with muted tones and classic typography
- **Responsive Design**: Fully functional on desktop and mobile devices
- **Chennai Landmarks**: Four historical sections covering Central Station, Ripon Building, Marina Beach, and Fort St. George

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Custom CSS** - Vintage effects and parallax animations

## Design Specifications

### Color Palette
- Vintage Cream (#F4F1E8)
- Sepia (#D4B896) 
- Brown (#8B6F47)
- Dark Brown (#5D4E37)
- Ink Blue (#2C3E50)
- Faded Crimson (#8B2635)

### Typography
- **Serif Font**: Georgia for titles and headings (newspaper masthead style)
- **Sans-serif Font**: Inter for body text and navigation

### Visual Elements
- Parchment and leather textures
- Ornate separators and delicate borders
- Letterpress text effects
- Soft shadows and vintage borders

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with vintage styling
│   ├── page.tsx            # Main homepage with all sections
│   └── globals.css         # Global styles and vintage effects
└── components/
    ├── VintageSidebar.tsx  # Fixed navigation sidebar
    └── ParallaxSection.tsx # Scrolling landmark sections
```

## Content Sections

1. **Chennai Central** - The Gateway to South India
2. **Ripon Building** - Seat of Civic Administration  
3. **Marina Beach** - The Crown Jewel of Madras
4. **Fort St. George** - The Foundation of Madras

Each section features "Then and Now" comparisons with historical context and modern perspectives.

## Future Enhancements

- Add historical images and maps (placeholder images currently used)
- Implement image optimization for better performance
- Add interactive timeline elements
- Include audio narration for accessibility
- Add more landmarks and historical sites

## Notes

- Images are currently using placeholders - replace with actual historical photographs
- Parallax effects are optimized for performance using CSS transforms
- The design maintains accessibility while preserving vintage aesthetics