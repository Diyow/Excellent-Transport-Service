'use client'

// Export the tour packages data to be used across components
export const tourPackages = [
  {
    name: "Ubud Tour",
    slug: "ubud-tour",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80",
    description: "Explore the cultural heart of Bali with visits to iconic temples, markets, and natural attractions.",
    category: "full-day",
    price: "$50",
    duration: "Full Day",
    attractions: [
      "Monkey forest",
      "Ubud Market",
      "Ubud Palace",
      "Tirta Empul Holy Water",
      "Lunch at the Restaurant in Ubud",
      "Tegalalang Rice Terrace"
    ]
  },
  {
    name: "Kintamani Tour",
    slug: "kintamani-tour",
    image: "https://images.unsplash.com/photo-1531201890865-fb64780d16e9?auto=format&fit=crop&q=80",
    description: "Experience the breathtaking views of Mount Batur and Lake Batur in Kintamani (currently on hold).",
    category: "full-day",
    price: "$55",
    duration: "Full Day",
    attractions: [
      "Enjoy coffee in the coffeeshop/cafe",
      "Batur Lake",
      "Tirta Empul",
      "Lunch at Restaurant in kintamani area"
    ],
    status: "on hold"
  },
  {
    name: "Bedugul Tour",
    slug: "bedugul-tour",
    image: "https://images.unsplash.com/photo-1604665515758-f5a359c4fb96?auto=format&fit=crop&q=80",
    description: "Visit the iconic temples and scenic spots in the highlands of Bali.",
    category: "full-day",
    price: "$60",
    duration: "Full Day",
    attractions: [
      "Tanah Lot/Taman Ayun (optional, choose 1)",
      "Wanagiri Hidden Hill",
      "Ulundanu Beratan",
      "Jatiluwih (optional)",
      "Handara gate"
    ]
  },
  {
    name: "Lempuyang Tour",
    slug: "lempuyang-tour",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80",
    description: "Visit the famous Gates of Heaven and other eastern Bali attractions.",
    category: "full-day",
    price: "$65",
    duration: "Full Day",
    attractions: [
      "Lempuyang temple (heaven gate)",
      "Lahangan Sweet",
      "Tirta Gangga"
    ]
  },
  {
    name: "Candidasa Tour",
    slug: "candidasa-tour",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80",
    description: "Explore the eastern coast of Bali with its unique attractions and traditional villages.",
    category: "full-day",
    price: "$60",
    duration: "Full Day",
    attractions: [
      "Taman Ujung",
      "Goa Lawah",
      "Blacksand Beach",
      "Tenganan Village"
    ]
  },
  {
    name: "Uluwatu Tour",
    slug: "uluwatu-tour",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
    description: "Experience the stunning clifftop temple and cultural performances in southern Bali.",
    category: "full-day",
    price: "$55",
    duration: "Full Day",
    attractions: [
      "Uluwatu Temple",
      "Kecak Dance",
      "Bingin Beach",
      "Dinner at Jimbaran"
    ]
  },
  {
    name: "West Nusa Penida",
    slug: "west-nusa-penida",
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&q=80",
    description: "Explore the western part of Nusa Penida island with its stunning coastal views.",
    category: "nusa-penida",
    price: "$75",
    duration: "Full Day",
    attractions: [
      "Kelingking Beach",
      "Angel's Billabong",
      "Broken Beach",
      "Crystal Bay"
    ]
  },
  {
    name: "East Nusa Penida",
    slug: "east-nusa-penida",
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&q=80",
    description: "Discover the eastern attractions of Nusa Penida with its unique landscapes.",
    category: "nusa-penida",
    price: "$75",
    duration: "Full Day",
    attractions: [
      "Diamond Beach",
      "Atuh Beach",
      "Tree House",
      "Teletubbies Hill"
    ]
  },
  {
    name: "Snorkeling in West Nusa Penida",
    slug: "snorkeling-west-nusa-penida",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80",
    description: "Experience the underwater beauty of Nusa Penida with guided snorkeling tours.",
    category: "nusa-penida",
    price: "$85",
    duration: "Full Day",
    attractions: [
      "Manta Point",
      "Gamat Bay",
      "Wall Bay",
      "Crystal Bay"
    ]
  },
  {
    name: "Combination West & East Nusa Penida",
    slug: "combination-nusa-penida",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80",
    description: "The ultimate Nusa Penida experience combining highlights from both east and west regions.",
    category: "nusa-penida",
    price: "$95",
    duration: "Full Day",
    attractions: [
      "Kelingking Beach",
      "Angel's Billabong",
      "Diamond Beach",
      "Atuh Beach"
    ]
  },
  {
    name: "City Tour",
    slug: "city-tour",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80",
    description: "Explore the trendy and popular areas of southern Bali.",
    category: "full-day",
    price: "$45",
    duration: "Full Day",
    attractions: [
      "Seminyak",
      "Canggu"
    ]
  }
];

// Helper function to get a package by slug
export function getPackageBySlug(slug) {
  return tourPackages.find(pkg => pkg.slug === slug) || null;
}

// Helper function to get packages by category
export function getPackagesByCategory(category) {
  return category === 'all' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.category === category);
}

// Helper function to get related packages (same category, excluding the current one)
export function getRelatedPackages(slug, limit = 3) {
  const currentPackage = getPackageBySlug(slug);
  if (!currentPackage) return [];
  
  return tourPackages
    .filter(pkg => pkg.slug !== slug && pkg.category === currentPackage.category)
    .slice(0, limit);
}