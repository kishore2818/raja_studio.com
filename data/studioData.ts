export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'All' | 'Weddings' | 'Flex Design' | 'Passport & Portraits' | 'Framing & Gifts' | 'Photo Lab';
  year: string;
  client: string;
  coverImage: string;
  aspectRatio: 'cinematic' | 'vertical' | 'square';
  summary: string;
  serviceType: string;
  turnaroundTime: string;
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
  priceNote?: string;
  iconType: 'camera' | 'printer' | 'portrait' | 'gift' | 'frame' | 'video';
  image: string;
}

export const STUDIO_INFO = {
  name: "RAJA DIGITAL STUDIO",
  shortName: "RAJA STUDIO",
  tagline: "ALL-IN-ONE DIGITAL PHOTO STUDIO & PRINT LAB",
  subtext: "Srivaikuntam's Trusted Studio for Grand Wedding Shoots, Instant 5-Min Passport Photos, Large Format Flex Banner Design & Printing, Handcrafted Photo Framing, and Italian Wedding Albums.",
  foundedYear: "2010",
  address: "79, Taluk Office Opp, Arasalvar Kovil St, Tiruvaigundam, Srivaikuntam, Thoothukudi-628601, Tamil Nadu",
  googleMapsUrl: "https://www.google.com/maps/place/Raja+Digital+Studio+%26+Video/@8.6289454,77.9120044,17z",
  phone: "+91 9443486821",
  rawPhone: "9443486821",
  whatsapp: "919443486821",
  whatsappLink: "https://wa.me/919443486821?text=Hi%20Durai,%20I%20would%20like%20to%20inquire%20about%20your%20studio%20services%20(Wedding%20Shoots%20/%20Flex%20Printing%20/%20Passport%20Photo%20/%20Framing).",
  callLink: "tel:9443486821",
  email: "rajadigitalstudio@gmail.com",
  referenceSite: "https://www.rajastudiosrivi.in/",
  openingHours: "Mon – Sun: 8:00 AM – 9:30 PM",
  stats: [
    { value: "5 Mins", label: "Instant Passport Delivery" },
    { value: "3,500+", label: "Weddings Captured" },
    { value: "10,000+", label: "Flex Banners Printed" },
    { value: "Same Day", label: "Rush Printing Available" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "passport-id-photos",
    title: "Instant Passport Size Photos",
    tag: "5-MINUTE EXPRESS SERVICE",
    description: "Urgent passport photos ready in just 5 minutes with professional studio lighting, skin touch-up, and exact background specifications for Passports, Visas, Aadhaar, Bank & Govt Exams.",
    deliverables: [
      "Ready in 5 to 10 Minutes",
      "Standard 8 / 16 / 32 Photo Print Sets",
      "White, Blue & Grey Background Compliance",
      "Digital Softcopy via WhatsApp or Email",
      "Stamp Size & Govt Exam Specs"
    ],
    badge: "5 Min Delivery",
    priceNote: "Starting from ₹60",
    iconType: "portrait",
    image: "/images/passport-studio.jpg"
  },
  {
    id: "wedding-photography-video",
    title: "Wedding & Muhurtham Coverage",
    tag: "FULL CEREMONY COVERAGE",
    description: "Complete traditional & candid coverage for Muhurtham, Betrothal/Nichayathartham, Sangeet, and Reception with multi-camera setups, 4K video, and drone aerials.",
    deliverables: [
      "Candid & Stage Traditional Photography",
      "4K Full HD Ceremony Video Recording",
      "Cinematic Teaser & Social Reels (within 48 hrs)",
      "Live Venue LED Wall & YouTube Streaming",
      "Drone Aerial Venue Sweeps"
    ],
    badge: "Most Popular",
    priceNote: "Customizable Packages",
    iconType: "camera",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "flex-design-printing",
    title: "Flex Banner Design & Printing",
    tag: "HIGH DEFINITION DIGITAL PRINT",
    description: "Custom graphic design and instant large-format flex printing for wedding welcome arches, birthday celebrations, temple festivals, condolence/tribute banners, and business hoardings.",
    deliverables: [
      "Custom Graphic Design with Photo Cutouts",
      "Heavy-Duty Star Flex & Normal Flex",
      "Same-Day Urgent Print Delivery",
      "Eyelet Punching & Finishing Included",
      "Sizes from 3x2 ft to 40x20 ft and Beyond"
    ],
    badge: "Same-Day Print",
    priceNote: "Per Sq.Ft Best Rates",
    iconType: "printer",
    image: "/images/flex-printing.jpg"
  },
  {
    id: "luxury-photobooks",
    title: "Digital Photo Lab & Wedding Albums",
    tag: "HANDCRAFTED ITALIAN FINISH",
    description: "In-house lab color correction and luxury flush-mount albums printed on waterproof, non-tearable metallic silk paper with embossed leather & acrylic covers.",
    deliverables: [
      "Non-Tearable Waterproof Silk Paper",
      "Italian Leather & Crystal Acrylic Covers",
      "Embossed Bride & Groom Names with Case Box",
      "Mini Pocket Albums for Parents & Relatives",
      "Lifetime Color Guarantee"
    ],
    badge: "In-House Lab",
    priceNote: "Lifetime Durability",
    iconType: "video",
    image: "/images/wedding-album.jpg"
  },
  {
    id: "photo-framing-restoration",
    title: "Photo Framing & Old Photo Restoration",
    tag: "WOODEN & SYNTHETIC FRAMES",
    description: "Extensive collection of modern and antique photo frames, glossy/matte lamination, and expert digital restoration & recoloring of damaged ancestral photographs.",
    deliverables: [
      "Old Damaged Photo Colorization & Repair",
      "Golden Carved, Teak Wood & Synthetic Frames",
      "Matte, Glossy & Sparkle Lamination",
      "All Sizes (6x8, 8x12, 12x18, 20x30 inch)",
      "Ready to Hang Wall Mounts"
    ],
    badge: "Restoration Masters",
    priceNote: "Preserve Heritage",
    iconType: "frame",
    image: "/images/photo-framing.jpg"
  },
  {
    id: "personalized-photo-gifts",
    title: "Customized Photo Gifts & Mugs",
    tag: "PERFECT FOR BIRTHDAYS & EVENTS",
    description: "Create memorable personalized gifts for loved ones: magic mugs, acrylic photo cutouts, customized keychains, LED crystal lamps, and printed t-shirts.",
    deliverables: [
      "Color Changing Magic Mugs & Coffee Mugs",
      "Laser Cut Acrylic Photo Stands",
      "Customized Photo Pillows & Cushions",
      "Personalized Keychains & Mobile Pops",
      "Bulk Return Gifts for Functions"
    ],
    badge: "Custom Gifts",
    priceNote: "Instant Gift Printing",
    iconType: "gift",
    image: "/images/photo-gifts.jpg"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "wedding-srivaikuntam",
    title: "Grand Temple Muhurtham & Reception",
    subtitle: "Complete Multi-Camera Wedding & Drone",
    category: "Weddings",
    year: "2024",
    client: "Saravanan & Priya",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop",
    aspectRatio: "cinematic",
    featured: true,
    highlightTag: "Grand Muhurtham",
    serviceType: "Wedding Cinematography & Photography",
    turnaroundTime: "48-hr Teaser, 2-wk Full Deliverables",
    summary: "Complete 2-day traditional wedding coverage at Srivaikuntam temple hall. Included 3 candid still cameras, 2 4K cinema video cameras, live crane for stage, and drone aerials of the procession.",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "wedding-welcome-flex",
    title: "Royal Wedding Welcome Flex Arch",
    subtitle: "20x10 ft High-Gloss Star Flex Design & Print",
    category: "Flex Design",
    year: "2024",
    client: "Murugan Family Kalyanam",
    coverImage: "/images/flex-printing.jpg",
    aspectRatio: "cinematic",
    featured: true,
    highlightTag: "Same Day Print",
    serviceType: "Flex Design & Digital Printing",
    turnaroundTime: "Same Day (4 Hours)",
    summary: "Designed with traditional Tamil temple motifs, gold borders, HD bride & groom cutouts, and printed on heavy-grade 340gsm Star flex with brass eyelets for the wedding hall entrance.",
    gallery: [
      "/images/flex-printing.jpg"
    ]
  },
  {
    id: "passport-photo-sessions",
    title: "Official Passport & Visa Studio Portraits",
    subtitle: "5-Minute Instant Shoot with Studio Strobes",
    category: "Passport & Portraits",
    year: "2025",
    client: "Walk-in Patrons & Govt Exam Candidates",
    coverImage: "/images/passport-studio.jpg",
    aspectRatio: "square",
    featured: true,
    highlightTag: "Ready in 5 Mins",
    serviceType: "Instant Studio Portraiture",
    turnaroundTime: "5 Minutes",
    summary: "High-key studio lighting with softboxes for even skin tone, subtle digital blemish clean-up, and instant dye-sublimation print on glossy photo paper complying with Indian Passport & Overseas Visa standards.",
    gallery: [
      "/images/passport-studio.jpg"
    ]
  },
  {
    id: "handcrafted-leather-album",
    title: "Signature Acrylic Glass Wedding Album",
    subtitle: "Waterproof Non-Tearable Silk Photobook",
    category: "Photo Lab",
    year: "2024",
    client: "Karthik & Deepa",
    coverImage: "/images/wedding-album.jpg",
    aspectRatio: "cinematic",
    featured: false,
    highlightTag: "Lifetime Warranty",
    serviceType: "In-House Digital Print Lab",
    turnaroundTime: "12 Days",
    summary: "40-page master album featuring lay-flat binding, metallic gloss highlights, and an acrylic front cover packaged in a custom engraved leather presentation briefcase.",
    gallery: [
      "/images/wedding-album.jpg"
    ]
  },
  {
    id: "ancestral-photo-restoration",
    title: "1960s Ancestral Portrait Restoration & Frame",
    subtitle: "B&W Scratch Removal & Digital Colorization",
    category: "Framing & Gifts",
    year: "2024",
    client: "Ramasamy Chettiar Family",
    coverImage: "/images/photo-framing.jpg",
    aspectRatio: "square",
    featured: false,
    highlightTag: "Restoration",
    serviceType: "Photo Restoration & Wooden Framing",
    turnaroundTime: "2 Days",
    summary: "Restored a heavily torn, water-damaged 60-year-old black & white family photo, performed natural skin colorization, and framed in an antique gold carved synthetic frame with sparkle lamination.",
    gallery: [
      "/images/photo-framing.jpg"
    ]
  },
  {
    id: "birthday-magic-mug-gifts",
    title: "Personalized Magic Mug & Acrylic Photo Stand",
    subtitle: "First Birthday Custom Function Gifts",
    category: "Framing & Gifts",
    year: "2025",
    client: "Baby Aaradhya's 1st Birthday",
    coverImage: "/images/photo-gifts.jpg",
    aspectRatio: "square",
    featured: false,
    highlightTag: "Custom Gifts",
    serviceType: "Photo Gifts & Merchandise",
    turnaroundTime: "1 Day",
    summary: "Batch of 50 personalized ceramic magic mugs revealing the baby's photo when hot tea/coffee is poured, along with an 8-inch laser-cut acrylic table stand.",
    gallery: [
      "/images/photo-gifts.jpg"
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: "1",
    author: "M. Saravanan",
    location: "Srivaikuntam",
    event: "Wedding Photography & Reception Flex Banner",
    rating: 5,
    quote: "Raja Digital Studio took care of our entire wedding! From shooting our Muhurtham and reception to designing the grand welcome flex banner outside the marriage hall. The flex print clarity was brilliant, and the photo album is praised by everyone who visits our home."
  },
  {
    id: "2",
    author: "P. Vigneshwaran",
    location: "Opposite Taluk Office, Srivaikuntam",
    event: "Passport Photos & Govt Exam ID Print",
    rating: 5,
    quote: "I needed urgent passport photos for my government job verification. Within 5 minutes, they took the photo, touched it up nicely, and handed over high quality cut prints with digital copies on WhatsApp. Super fast and courteous service!"
  },
  {
    id: "3",
    author: "K. Meenakshi",
    location: "Thoothukudi",
    event: "Old Photo Restoration & Carved Framing",
    rating: 5,
    quote: "We brought a 50-year-old damaged photo of my grandparents that had faded completely. Raja Studio digitally repaired every scratch, added realistic color, and framed it in a royal golden frame. Truly unforgettable craftsmanship."
  }
];
