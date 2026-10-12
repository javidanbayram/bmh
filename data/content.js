/* ========================================
   Content Data — BM Hospitality
   Structured content for dynamic rendering
   ======================================== */

const BMContent = {

  // ---- Company ----
  company: {
    name: 'BM Hospitality',
    tagline: 'Creating places worth remembering.',
    description: 'BM Hospitality creates and operates distinctive destinations where architecture, service, culture and experience come together.',
    founded: 2020,
    email: 'info@bmh.az',
    phone: '+994 XX XXX XX XX',
    address: 'Ganja, Azerbaijan',
  },

  // ---- Properties ----
  properties: [
    {
      id: 'national-hotel-ganja',
      name: 'National Hotel Ganja',
      location: 'Ganja, Azerbaijan',
      category: 'Hotels',
      status: 'Operating',
      description: 'A landmark of modern hospitality in the heart of Azerbaijan\'s second city. Where contemporary design meets timeless service.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      featured: true,
    },
    {
      id: 'bm-resort-concept',
      name: 'BM Mountain Resort',
      location: 'Caucasus Region',
      category: 'Resorts',
      status: 'In Development',
      description: 'An immersive mountain escape designed around nature, wellness and authentic Caucasian hospitality.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
      featured: false,
    },
    {
      id: 'bm-boutique',
      name: 'BM Boutique Collection',
      location: 'Azerbaijan',
      category: 'Boutique Properties',
      status: 'Planned',
      description: 'A collection of intimate, design-forward properties rooted in local culture and craftsmanship.',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
      featured: false,
    },
    {
      id: 'bm-dining',
      name: 'BM Culinary Concepts',
      location: 'Multiple Locations',
      category: 'Restaurants',
      status: 'In Development',
      description: 'Distinctive dining experiences that celebrate local ingredients, creative cuisine and thoughtful atmosphere.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      featured: false,
    },
    {
      id: 'bm-wellness',
      name: 'BM Wellness & Spa',
      location: 'Azerbaijan',
      category: 'Experiences',
      status: 'Planned',
      description: 'Holistic wellness destinations combining traditional practices with contemporary comfort.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6b?w=800&q=80',
      featured: false,
    },
  ],

  // ---- Categories ----
  categories: [
    {
      name: 'Hotels',
      description: 'Thoughtfully designed destinations combining comfort, architecture and service.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80',
    },
    {
      name: 'Resorts',
      description: 'Immersive escapes shaped around nature, wellness and experience.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
    },
    {
      name: 'Dining',
      description: 'Distinctive culinary concepts built around culture and creativity.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
    },
    {
      name: 'Experiences',
      description: 'Curated experiences that connect guests with destinations.',
      image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80',
    },
    {
      name: 'Developments',
      description: 'Creating the next generation of hospitality destinations.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    },
    {
      name: 'Tourism',
      description: 'Connecting people with exceptional places and experiences.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80',
    },
  ],

  // ---- News ----
  news: [
    {
      id: 1,
      title: 'BM Hospitality Announces Expansion Vision for 2026',
      category: 'Company News',
      date: '2026-08-01',
      excerpt: 'The hospitality group outlines an ambitious development roadmap focused on new destinations across the Caucasus region.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    },
    {
      id: 2,
      title: 'Designing for Experience: Our Architecture Philosophy',
      category: 'Insights',
      date: '2026-07-15',
      excerpt: 'How BM Hospitality approaches design as a tool for creating meaningful guest experiences.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80',
    },
    {
      id: 3,
      title: 'Sustainability at the Heart of Hospitality',
      category: 'Sustainability',
      date: '2026-07-01',
      excerpt: 'Our commitment to responsible development, local communities and environmental stewardship.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    },
    {
      id: 4,
      title: 'National Hotel Ganja: A New Standard',
      category: 'Properties',
      date: '2026-06-20',
      excerpt: 'Discover how National Hotel Ganja is redefining modern hospitality in Azerbaijan.',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80',
    },
  ],

  // ---- Destinations ----
  destinations: [
    {
      name: 'Ganja',
      country: 'Azerbaijan',
      coordinates: { x: 68, y: 42 },
      properties: ['National Hotel Ganja'],
      status: 'Active',
    },
  ],

  // ---- Partners ----
  partners: [
    'Azerbaijan Tourism Board',
    'Caucasus Architects',
    'Silk Road Hotels',
    'Caspian Investments',
    'Heritage Foundation',
    'Green Build Alliance',
  ],

  // ---- Images ----
  images: {
    hero: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=85',
    featured: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=85',
    experience: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
    architecture: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    sustainability: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    careers: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
  },
};
