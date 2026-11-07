export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'All' | 'Weddings' | 'Cinematography' | 'Commercial' | 'Portraits' | 'Post-Production';
  year: string;
  client: string;
  coverImage: string;
  aspectRatio: 'cinematic' | 'vertical' | 'square';
  summary: string;
  director: string;
  dop: string;
  colorist: string;
  gearUsed: string[];
  gallery: string[];
  featured?: boolean;
  highlightTag?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  deliverables: string[];
  badge: string;
  image: string;
}

export const STUDIO_INFO = {
  name: "RAJA DIGITAL STUDIO",
  shortName: "RAJA STUDIO",
  tagline: "CINEMATIC VISION • TIMELESS MOMENTS",
  subtext: "Premier Wedding Cinematography, Commercial Films, Candid Portraiture & Digital Color Lab in Srivaikuntam & across South India.",
  foundedYear: "2010",
  address: "79, Taluk Office Opp, Arasalvar Kovil St, Tiruvaigundam, Srivaikuntam, Thoothukudi-628601, Tamil Nadu",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Raja+Digital+Studio+79+Taluk+Office+Opp+Arasalvar+Kovil+St+Srivaikuntam+Thoothukudi+628601",
  phone: "+91 9443486821",
  rawPhone: "9443486821",
  whatsapp: "919443486821",
  whatsappLink: "https://wa.me/919443486821?text=Hi%20Raja%20Digital%20Studio,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20shoot.",
  callLink: "tel:9443486821",
  email: "rajadigitalstudio@gmail.com",
  referenceSite: "https://www.rajastudiosrivi.in/",
  openingHours: "Monday – Sunday: 8:00 AM – 9:30 PM",
  stats: [
    { value: "15+", label: "Years of Heritage" },
    { value: "3,500+", label: "Weddings & Ceremonies" },
    { value: "4K / 8K", label: "Ultra HD Cinema Delivery" },
    { value: "100%", label: "Client Satisfaction Rate" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "royal-tamil-wedding",
    title: "The Srivaikuntam Muhurtham",
    subtitle: "Traditional South Indian Royal Wedding Film",
    category: "Weddings",
    year: "2024",
    client: "Arun & Deepa",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "cinematic",
    featured: true,
    highlightTag: "Grand Muhurtham",
    summary: "A soul-stirring traditional temple ceremony and evening reception captured across 4 cine-cameras with live cinematic drone flights and custom warm film color science.",
    director: "Raja Digital Studio",
    dop: "Lead Cinema Team",
    colorist: "Raja Digital Lab",
    gearUsed: ["Sony FX3 Full Frame Cinema", "Sony FX6", "DJI Mavic 3 Cine", "G-Master Prime Lenses"],
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "temple-heritage-kalyanam",
    title: "Sacred Temple Rites",
    subtitle: "Heritage Temple Wedding & Outdoor Pre-Shoot",
    category: "Weddings",
    year: "2024",
    client: "Karthik & Meenakshi",
    coverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "cinematic",
    featured: true,
    highlightTag: "Candid Storytelling",
    summary: "Framed amidst the historic granite pillars and sacred temple corridors of Thoothukudi, celebrating heritage silk, devotional nadaswaram melodies, and heartfelt candid emotion.",
    director: "Raja Digital Studio",
    dop: "Cinema Unit 1",
    colorist: "Raja Digital Lab",
    gearUsed: ["Sony A7S III", "Zeiss Batis 85mm f/1.8", "Ronin RS3 Pro", "Aputure Amaran 200x"],
    gallery: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "luxury-silk-campaign",
    title: "Kanchipuram Silk Elegance",
    subtitle: "High Fashion Saree & Jewelry Commercial Campaign",
    category: "Commercial",
    year: "2025",
    client: "Sri Lakshmi Silks & Jewels",
    coverImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "cinematic",
    featured: true,
    highlightTag: "Brand Commercial",
    summary: "Ultra-high definition macro textures capturing pure zari gold threads, paired with dramatic chiaroscuro studio lighting and slow-motion fabric flow.",
    director: "Raja Digital Studio",
    dop: "Raja Visual Team",
    colorist: "Studio Color Suite",
    gearUsed: ["RED Digital Cinema 6K", "Sony 90mm Macro G OSS", "Godox Studio Strobes", "DaVinci Resolve Studio"],
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "outdoor-sunset-prewedding",
    title: "Golden Hour Shores",
    subtitle: "Cinematic Coastal Pre-Wedding Teaser",
    category: "Cinematography",
    year: "2024",
    client: "Vignesh & Swetha",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "cinematic",
    featured: false,
    highlightTag: "Drone & Teaser",
    summary: "Captured along the pristine beaches and palmyra groves of the Coromandel coast during golden sunset hour, highlighting intimate chemistry and poetic drone compositions.",
    director: "Raja Digital Studio",
    dop: "Outdoor Cine Team",
    colorist: "Raja Digital Lab",
    gearUsed: ["DJI Inspire 3", "Sony FX3", "Sigma 24-70mm f/2.8 Art", "PolarPro Cine ND Filters"],
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "editorial-candid-portraits",
    title: "Visions of Srivaikuntam",
    subtitle: "Fine Art Cultural Portraits & Studio Stills",
    category: "Portraits",
    year: "2024",
    client: "Studio Exhibition Series",
    coverImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "square",
    featured: false,
    highlightTag: "Editorial Portrait",
    summary: "A signature portrait series captured in our studio using single-source beauty dishes and velvet backdrops, showcasing authentic character and rich skin tones.",
    director: "Raja Digital Studio",
    dop: "Studio Master Team",
    colorist: "Raja Digital Lab",
    gearUsed: ["Sony A7R V (61MP)", "Profoto B10X Plus", "Broncolor Softbox"],
    gallery: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "digital-photo-lab-album",
    title: "Luxe Heirloom Photobook",
    subtitle: "Premium Italian Leather Album & Digital Master Color",
    category: "Post-Production",
    year: "2025",
    client: "Signature Lab Edition",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "cinematic",
    featured: false,
    highlightTag: "Lab & Albums",
    summary: "Handcrafted flush-mount wedding albums with silk-matte photographic paper, metallic gilded edges, and calibrated color-grading profiles.",
    director: "Raja Digital Studio",
    dop: "Print Lab Specialists",
    colorist: "Master Retoucher",
    gearUsed: ["Noritsu Digital Lab Engine", "Fuji Crystal Archive HD Paper", "Custom Leather Binding"],
    gallery: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding-films",
    title: "Royal Wedding Films & Muhurtham",
    tag: "SIGNATURE SPECIALTY",
    description: "Multi-camera 4K/8K cinematography covering Muhurtham, Sangeet, Reception, and Temple ceremonies with live drone aerials and emotional story edits.",
    deliverables: ["4K Cinema Wedding Teaser (3-5 mins)", "Complete Ceremony Traditional Film", "Live Multi-Screen Crane & Drone Feed", "Master Hard Drive & Cloud Link"],
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "candid-photography",
    title: "Candid & Traditional Photography",
    tag: "HEIRLOOM QUALITY",
    description: "Every candid smile, emotional tear, and ritual captured in high-resolution detail. Two distinct teams for candid photojournalism and classic stage family portraits.",
    deliverables: ["Unlimited High-Res Edited Photos", "Online Private Proofing Gallery", "Same-Day Teaser Photos for WhatsApp/Socials", "Zero-Distortion Lighting Setup"],
    badge: "Award Winning",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pre-post-wedding",
    title: "Pre & Post-Wedding Shoots",
    tag: "CINEMATIC LOCATIONS",
    description: "Concept-driven outdoor shoots at picturesque heritage temples, scenic waterfalls, misty hills, and coastal beaches with drone choreography.",
    deliverables: ["Music Video Style Teaser", "Save The Date Motion Posters", "Story Concept Planning & Wardrobe Guidance", "High-Resolution Frame Prints"],
    badge: "Trendy",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "digital-lab-albums",
    title: "Digital Photo Lab & Luxury Albums",
    tag: "IN-HOUSE PRINT LAB",
    description: "In-house advanced color grading, skin retouching, and printing of handcrafted Italian flush-mount photobooks that last generations.",
    deliverables: ["Handcrafted Leather / Acrylic Glass Albums", "Non-Tearable Waterproof Silk Pages", "Personalized Embossed Name Box", "Mini Pocket Albums for Parents"],
    badge: "In-House Lab",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "drone-cinematography",
    title: "4K Cinema Drone & Aerial Capture",
    tag: "AERIAL PERSPECTIVE",
    description: "Licensed drone pilots capturing grand outdoor processions, temple vistas, wedding venues, and breathtaking bird's-eye views in cinema quality.",
    deliverables: ["4K 60fps Smooth Aerial Footage", "Architectural & Venue Sweeps", "Outdoor Crowd & Procession Tracking", "Weather & Safety Compliant Flights"],
    badge: "4K Aerial",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "commercial-events",
    title: "Commercials, Events & Portraits",
    tag: "CORPORATE & BRAND",
    description: "High-impact brand advertisement shoots, jewelry and fashion catalog photography, housewarmings, birthday celebrations, and family portraits.",
    deliverables: ["Catalog Ready E-Commerce Files", "High Dynamic Range Corporate Videos", "Social Media Optimized Reels", "Studio Backdrop & Lighting Included"],
    badge: "Commercial",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop"
  }
];

export const GEAR_HIGHLIGHTS = [
  { name: "Cinema Cameras", spec: "Sony FX3, FX6 & A7S III Full Frame 4K/120fps" },
  { name: "Aerial Drone Fleet", spec: "DJI Mavic 3 Cine & DJI Inspire with CinemaDNG" },
  { name: "Master Glass", spec: "Sony G-Master 24-70mm, 70-200mm, Zeiss & Sigma Art Primes" },
  { name: "Gimbal & Motion", spec: "DJI Ronin RS3 Pro & Motorized Sliders for silky pans" },
  { name: "Studio Lighting", spec: "Aputure, Godox High-Speed Strobes & Soft Diffusion Boxes" },
  { name: "Digital Color Lab", spec: "Calibrated IPS HDR Monitors & DaVinci Resolve Studio" }
];

export const TESTIMONIALS = [
  {
    id: "1",
    author: "Karthikeyan & Anitha",
    location: "Srivaikuntam / Chennai",
    event: "Muhurtham & Reception",
    rating: 5,
    quote: "Raja Digital Studio made our wedding look like an authentic cinematic feature film! The drone shots of the temple and the teaser video brought our entire family to tears of joy. Their team is extremely punctual, respectful, and truly masters of their craft."
  },
  {
    id: "2",
    author: "Sundarapandian M.",
    location: "Thoothukudi",
    event: "Daughter's Wedding & Handcrafted Album",
    rating: 5,
    quote: "We have known Raja Studio for over a decade. The quality of their Italian leather photobook and the clarity of the photos are unmatched in our entire district. You cannot find better dedication and value anywhere else."
  },
  {
    id: "3",
    author: "Dr. Revathi & Vignesh",
    location: "Tirunelveli",
    event: "Pre-Wedding & Outdoor Teaser",
    rating: 5,
    quote: "The pre-wedding shoot along the coastal shores was effortless. They made us feel so comfortable in front of the camera and delivered the Instagram reel teaser within 48 hours. Highly recommended for couples looking for premium visual quality!"
  }
];
