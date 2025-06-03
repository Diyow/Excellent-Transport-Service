'use client'

// Export the destinations data to be used across components
export const destinations = [
  {
    name: "Ubud",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80",
    description: "Cultural heart of Bali, known for its traditional arts and natural beauty.",
    longDescription: "Ubud is the cultural heart of Bali, nestled amidst lush rainforests and terraced rice paddies. It's a haven for artists, yogis, and spiritual seekers. The town is filled with art galleries, craft shops, and traditional markets. Surrounding Ubud, you'll find ancient temples, sacred monkey forests, and some of Bali's most iconic rice terraces.",
    category: "highlight",
    attractions: [
      {
        name: "Yoga class",
        description: "Join world-class yoga sessions in serene studios surrounded by nature.",
        image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80"
      },
      {
        name: "Tegalalang Rice Terrace",
        description: "Stunning terraced rice fields showcasing traditional Balinese irrigation system.",
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80"
      },
      {
        name: "Ubud Palace",
        description: "Historical royal palace with beautiful Balinese architecture and cultural performances.",
        image: "https://images.unsplash.com/photo-1580181566340-7c69a21f17ac?auto=format&fit=crop&q=80"
      },
      {
        name: "Ubud Market",
        description: "Vibrant traditional market selling local crafts, textiles, and souvenirs.",
        image: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80"
      },
      {
        name: "Monkey Forest",
        description: "Sacred sanctuary home to over 700 Balinese long-tailed macaques and ancient temples.",
        image: "https://images.unsplash.com/photo-1584545284372-f22510eb7c26?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Seminyak",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
    description: "Upscale beach resort area with luxury accommodations, high-end shopping, and fine dining.",
    longDescription: "Seminyak is Bali's most stylish and upscale beach resort area, known for its world-class dining, high-end shopping, and luxury villas. The beach offers beautiful sunsets and a more relaxed atmosphere compared to nearby Kuta. It's the perfect destination for those seeking a sophisticated beach experience with plenty of trendy cafes, designer boutiques, and beach clubs.",
    category: "beach",
    attractions: [
      {
        name: "Restaurant",
        description: "Enjoy world-class dining at Seminyak's renowned restaurants and beach clubs.",
        image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80"
      },
      {
        name: "Sunset Beach (Double Six, Petitenget)",
        description: "Experience breathtaking sunsets at these popular beach spots with vibrant atmosphere.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Canggu",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80",
    description: "Trendy coastal village with a strong surf culture and vibrant nightlife.",
    longDescription: "Canggu has rapidly transformed from a sleepy coastal village to one of Bali's trendiest destinations. Known for its excellent surf breaks, hipster cafes, and vibrant nightlife, it attracts digital nomads, surfers, and young travelers. The area offers a perfect blend of beach life, rice field views, and contemporary culture with a more laid-back vibe than neighboring Seminyak.",
    category: "beach",
    attractions: [
      {
        name: "Fins",
        description: "Popular beach club offering great food, drinks, and ocean views in a stylish setting.",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80"
      },
      {
        name: "Atlas",
        description: "The biggest club in Asia, featuring world-class DJs and an incredible atmosphere.",
        image: "https://images.unsplash.com/photo-1583244532610-9deb111fcc2e?auto=format&fit=crop&q=80"
      },
      {
        name: "Nuanu / Luna Beach",
        description: "Artificial beach club offering a unique swimming and relaxation experience.",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Kuta",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80",
    description: "Famous for its long sandy beach, surf-friendly waves, and vibrant nightlife.",
    longDescription: "Kuta is one of Bali's most famous beach destinations, known for its long stretch of golden sand and consistent waves perfect for beginner surfers. As Bali's original tourist hub, it offers a wide range of accommodations, restaurants, and entertainment options. While busier than other areas, Kuta remains popular for its accessibility, affordability, and spectacular sunsets.",
    category: "beach",
    attractions: [
      {
        name: "The most Beautiful sunset in Bali",
        description: "Experience the legendary Kuta sunset, widely regarded as one of the most spectacular in Bali.",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Uluwatu",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80",
    description: "Famous for its stunning cliff-top temple and world-class surf breaks.",
    longDescription: "Perched on Bali's southwestern tip, Uluwatu is renowned for its dramatic clifftop temple, world-class surf breaks, and luxury resorts. The area offers breathtaking ocean views from limestone cliffs that drop straight into the Indian Ocean. Beyond the iconic temple and surfing, Uluwatu has developed into a sophisticated destination with high-end beach clubs, fine dining, and boutique accommodations.",
    category: "highlight",
    attractions: [
      {
        name: "Uluwatu Temple",
        description: "Ancient sea temple perched dramatically on a steep cliff with stunning ocean views.",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80"
      },
      {
        name: "Kecak Dance",
        description: "Traditional Balinese dance performance held at sunset with the ocean as backdrop.",
        image: "https://images.unsplash.com/photo-1583335026414-89cf5ed30d85?auto=format&fit=crop&q=80"
      },
      {
        name: "Pandawa Beach",
        description: "Hidden white sand beach accessed through impressive limestone cliffs.",
        image: "https://images.unsplash.com/photo-1588401273872-959d2076283a?auto=format&fit=crop&q=80"
      },
      {
        name: "Sunday Beach Club",
        description: "Exclusive beach club offering panoramic views, infinity pool, and fine dining.",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80"
      },
      {
        name: "Bingin Beach",
        description: "Secluded beach with crystal clear waters and excellent surfing conditions.",
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Nusa Dua",
    image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80",
    description: "Upscale enclave known for pristine beaches and luxury resorts.",
    longDescription: "Nusa Dua is Bali's most exclusive and polished resort enclave, home to numerous five-star hotels and pristine beaches. The area features manicured gardens, upscale shopping complexes, and a calm lagoon protected by an offshore reef. Perfect for families and those seeking a more controlled environment, Nusa Dua offers water sports, golf courses, and spa facilities in a secure, gated tourism complex.",
    category: "beach",
    attractions: [
      {
        name: "Pristine Beaches",
        description: "Enjoy the immaculately maintained white sand beaches with crystal clear waters.",
        image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80"
      },
      {
        name: "Water Sports Center",
        description: "Try various water activities from jet skiing to parasailing in safe, controlled environments.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Candidasa",
    image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?auto=format&fit=crop&q=80",
    description: "Quiet coastal town with black sand beaches and traditional Balinese culture.",
    longDescription: "Candidasa offers a tranquil escape on Bali's eastern coast, away from the island's more developed areas. This seaside town is characterized by its laid-back atmosphere, black sand beaches, and proximity to traditional Balinese villages. It serves as an excellent base for exploring eastern Bali's cultural and natural attractions, including ancient temples, water palaces, and traditional villages where time-honored crafts are still practiced.",
    category: "culture",
    attractions: [
      {
        name: "Goalawah Temple",
        description: "Ancient temple known for its bat cave and spiritual significance to local Balinese.",
        image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?auto=format&fit=crop&q=80"
      },
      {
        name: "Black Sand Beach",
        description: "Distinctive volcanic black sand beaches offering unique coastal landscapes.",
        image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&q=80"
      },
      {
        name: "Tenganan Village",
        description: "One of Bali's oldest and most preserved traditional villages known for unique crafts.",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Lahangan",
    image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&q=80",
    description: "Home to some of Bali's most iconic temples and breathtaking views.",
    longDescription: "Lahangan is located in eastern Bali and is becoming increasingly popular for its spectacular viewpoints and cultural attractions. The area is home to the famous Lempuyang Temple with its iconic 'Gates of Heaven' that frame Mount Agung perfectly. The surrounding region offers lush landscapes, traditional villages, and some of the most Instagram-worthy photo opportunities in Bali.",
    category: "highlight",
    attractions: [
      {
        name: "Lempuyang Temple",
        description: "Ancient temple complex featuring the famous 'Gates of Heaven' with Mount Agung views.",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80"
      },
      {
        name: "Lahangan Sweet",
        description: "Scenic viewpoint offering panoramic views of Mount Agung and the eastern coastline.",
        image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&q=80"
      },
      {
        name: "Tirta Gangga Temple",
        description: "Beautiful water palace with ornate fountains, gardens, and stone sculptures.",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Amed",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&q=80",
    description: "Peaceful fishing village known for excellent snorkeling and diving spots.",
    longDescription: "Amed is a string of traditional fishing villages along Bali's northeastern coast, known for its black sand beaches, excellent snorkeling, and world-class diving sites. The area offers a glimpse into traditional Balinese coastal life, with colorful jukung fishing boats lining the shore. With Mount Agung as a backdrop and the calm waters of the Bali Sea in front, Amed is famous for its spectacular sunrises and relaxed atmosphere.",
    category: "beach",
    attractions: [
      {
        name: "The most beautiful sunrise in beaches",
        description: "Experience breathtaking sunrises over the ocean with Mount Agung in the background.",
        image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&q=80"
      },
      {
        name: "Snorkeling and Diving Sites",
        description: "Explore vibrant coral reefs and the famous USS Liberty shipwreck just offshore.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Kintamani",
    image: "https://images.unsplash.com/photo-1531201890865-fb64780d16e9?auto=format&fit=crop&q=80",
    description: "Volcanic region with stunning mountain views and natural hot springs.",
    longDescription: "Kintamani is a highland area in northeastern Bali dominated by the magnificent Mount Batur and its caldera lake. The region offers some of Bali's most spectacular natural scenery, with panoramic views of the active volcano and the large crescent-shaped lake that fills part of the caldera. Visitors can enjoy cool mountain air, natural hot springs, coffee plantations, and traditional villages that showcase a different side of Balinese culture away from the coastal areas.",
    category: "highlight",
    attractions: [
      {
        name: "Pinggan Village",
        description: "Traditional village offering spectacular views of Mount Batur and morning mist.",
        image: "https://images.unsplash.com/photo-1531201890865-fb64780d16e9?auto=format&fit=crop&q=80"
      },
      {
        name: "Mount Batur",
        description: "Active volcano offering popular sunrise trekking experiences and stunning views.",
        image: "https://images.unsplash.com/photo-1604665515758-f5a359c4fb96?auto=format&fit=crop&q=80"
      },
      {
        name: "Hot Spring",
        description: "Natural hot springs with therapeutic mineral water heated by volcanic activity.",
        image: "https://images.unsplash.com/photo-1571323185094-a2d4caaa6688?auto=format&fit=crop&q=80"
      },
      {
        name: "Batur Lake",
        description: "Scenic crater lake formed in the caldera of Mount Batur with fishing and water activities.",
        image: "https://images.unsplash.com/photo-1604665515758-f5a359c4fb96?auto=format&fit=crop&q=80"
      },
      {
        name: "The Most beautiful sunrise in the mountains",
        description: "Witness spectacular sunrise views from the summit of Mount Batur over the entire region.",
        image: "https://images.unsplash.com/photo-1531201890865-fb64780d16e9?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Sanur",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80",
    description: "Relaxed beach town with a mix of traditional and modern attractions.",
    longDescription: "Sanur is one of Bali's original beach resorts, offering a perfect blend of traditional charm and modern amenities. Unlike the west coast beaches, Sanur faces east, providing beautiful sunrise views over the gentle waters protected by a reef. The beach is lined with a paved promenade perfect for walking or cycling, while the town itself maintains a relaxed, family-friendly atmosphere with a good selection of restaurants, shops, and cultural attractions.",
    category: "beach",
    attractions: [
      {
        name: "Beach",
        description: "Long stretch of calm, shallow water perfect for families and morning strolls.",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80"
      },
      {
        name: "Icon Mall",
        description: "Modern shopping center with distinctive architecture and various retail options.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Jimbaran",
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&q=80",
    description: "Famous for its seafood restaurants on the beach and luxury resorts.",
    longDescription: "Jimbaran is a fishing village and coastal resort area just south of Bali's international airport. The area is renowned for its fresh seafood restaurants that line the beach, where diners can enjoy freshly caught fish with their feet in the sand as the sun sets. Beyond its culinary fame, Jimbaran Bay features a beautiful curved white sand beach, luxury resorts, and a more laid-back atmosphere compared to nearby Kuta and Seminyak.",
    category: "beach",
    attractions: [
      {
        name: "Beach dinner",
        description: "Enjoy fresh seafood at beachfront restaurants with tables set directly on the sand.",
        image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&q=80"
      },
      {
        name: "Jimbaran Bay",
        description: "Curved white sand beach with calm waters perfect for swimming and sunbathing.",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Bedugul",
    image: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&q=80",
    description: "Highland region with cool climate, lakes, and botanical gardens.",
    longDescription: "Bedugul is a mountain lake resort area in Bali's central highlands, known for its cool climate and three crater lakes. The region is home to the iconic Ulun Danu Beratan Temple that appears to float on the lake, extensive botanical gardens, and strawberry farms. With its misty mountains, lush forests, and agricultural landscapes, Bedugul offers a refreshing contrast to Bali's tropical beaches and a glimpse into the island's diverse ecosystems.",
    category: "nature",
    attractions: [
      {
        name: "Ulundanu Beratan",
        description: "Iconic water temple that appears to float on Lake Beratan, one of Bali's most photographed sites.",
        image: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&q=80"
      },
      {
        name: "Wanagiri Hidden Hill",
        description: "Scenic viewpoint with creative photo platforms overlooking twin lakes and mountains.",
        image: "https://images.unsplash.com/photo-1604665515758-f5a359c4fb96?auto=format&fit=crop&q=80"
      },
      {
        name: "Sekumpul Waterfall",
        description: "Magnificent cluster of seven waterfalls surrounded by lush tropical vegetation.",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80"
      },
      {
        name: "Banyummala Waterfall",
        description: "Hidden gem waterfall with crystal clear natural pool perfect for swimming.",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80"
      },
      {
        name: "Handara Gate",
        description: "Traditional Balinese gate that has become a popular photo spot for visitors.",
        image: "https://images.unsplash.com/photo-1604665515758-f5a359c4fb96?auto=format&fit=crop&q=80"
      },
      {
        name: "Gitgit Waterfall",
        description: "Easily accessible multi-tiered waterfall surrounded by tropical forest.",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80"
      },
      {
        name: "Leke-leke Waterfall",
        description: "Secluded waterfall requiring a scenic trek through bamboo forests and rice fields.",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Tabanan",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80",
    description: "Known for its iconic sea temple and beautiful rice terraces.",
    longDescription: "Tabanan regency in southwest Bali is home to some of the island's most iconic cultural and natural attractions. The region is known for the famous Tanah Lot sea temple perched on a rocky outcrop, the UNESCO-listed Jatiluwih rice terraces, and the royal temple of Taman Ayun. Less developed than southern Bali, Tabanan offers visitors a chance to experience traditional rural life, verdant landscapes, and significant cultural sites without the crowds found in more touristy areas.",
    category: "culture",
    attractions: [
      {
        name: "Tanah Lot Temple",
        description: "Iconic sea temple perched on a rock formation, especially beautiful at sunset.",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80"
      },
      {
        name: "Jatiluwih Rice Terrace",
        description: "UNESCO World Heritage site featuring spectacular terraced rice fields using traditional irrigation.",
        image: "https://images.unsplash.com/photo-1604665515758-f5a359c4fb96?auto=format&fit=crop&q=80"
      },
      {
        name: "Taman Ayun",
        description: "Royal water temple with beautiful gardens, moats, and traditional Balinese architecture.",
        image: "https://images.unsplash.com/photo-1580181566340-7c69a21f17ac?auto=format&fit=crop&q=80"
      }
    ]
  }
];

// Helper function to get a destination by slug (formatted name)
export function getDestinationBySlug(slug) {
  const destinationName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return destinations.find(d => d.name.toLowerCase() === destinationName.toLowerCase()) || null;
}

// Helper function to get destinations by category
export function getDestinationsByCategory(category) {
  return category === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === category);
}

// Helper function to get highlighted destinations
export function getHighlightedDestinations(limit = 3) {
  return destinations
    .filter(dest => dest.category === 'highlight')
    .slice(0, limit);
}