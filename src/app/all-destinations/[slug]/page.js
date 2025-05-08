'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function DestinationDetail() {
  const params = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  // All destinations data (same as in the all-destinations page)
  const allDestinations = [
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
      longDescription: "Canggu is Bali's hippest beach destination, popular among digital nomads, surfers, and the young crowd. Once a sleepy fishing village, it has transformed into a trendy area filled with cool cafes, beach clubs, and surf spots. Despite its rapid development, Canggu still maintains some of its rural charm with rice fields between the modern establishments.",
      category: "beach",
      attractions: [
        {
          name: "Fins",
          description: "Popular beach club offering great food, drinks, and ocean views.",
          image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80"
        },
        {
          name: "Atlas (biggest club in Asia)",
          description: "Massive entertainment venue featuring world-class DJs and spectacular shows.",
          image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
        },
        {
          name: "Nuanu / Luna Beach artificial beach",
          description: "Unique artificial beach club offering a luxurious swimming and lounging experience.",
          image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      name: "Kuta",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80",
      description: "Famous for its long sandy beach, surf-friendly waves, and vibrant nightlife.",
      longDescription: "Kuta is one of Bali's most famous beach destinations, known for its long stretch of golden sand and consistent waves that are perfect for beginner surfers. The area is also renowned for its vibrant nightlife, with numerous bars, clubs, and restaurants lining the streets. While it can get crowded, Kuta offers an energetic atmosphere and some of the most spectacular sunsets on the island.",
      category: "beach",
      attractions: [
        {
          name: "Kuta Beach",
          description: "Long stretch of golden sand perfect for sunbathing and beginner surfing.",
          image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80"
        },
        {
          name: "Beachwalk Shopping Center",
          description: "Modern shopping mall with international brands and entertainment options.",
          image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&q=80"
        },
        {
          name: "Kuta Sunset Point",
          description: "The most beautiful sunset viewpoint in Bali with vibrant evening atmosphere.",
          image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      name: "Uluwatu",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80",
      description: "Famous for its stunning cliff-top temple and world-class surf breaks.",
      longDescription: "Uluwatu is located on Bali's southwestern tip, known for its dramatic limestone cliffs and the iconic Uluwatu Temple perched 70 meters above the Indian Ocean. The area is a paradise for surfers with several world-class breaks. Beyond surfing, visitors can enjoy the famous Kecak fire dance performances at sunset, explore hidden beaches, and experience some of Bali's most luxurious cliff-top bars and resorts.",
      category: "highlight",
      attractions: [
        {
          name: "Uluwatu Temple",
          description: "Ancient sea temple perched on a steep cliff with breathtaking ocean views.",
          image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80"
        },
        {
          name: "Kecak Dance",
          description: "Traditional Balinese fire dance performance held at sunset with ocean backdrop.",
          image: "https://images.unsplash.com/photo-1583309219338-a582f1f9ca6d?auto=format&fit=crop&q=80"
        },
        {
          name: "Pandawa Beach",
          description: "Hidden white sand beach accessed through carved limestone cliffs.",
          image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80"
        },
        {
          name: "Sunday Beach Club",
          description: "Exclusive beach club offering infinity pools, fine dining, and ocean access.",
          image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80"
        },
        {
          name: "Bingin Beach",
          description: "Secluded surf spot with rustic accommodations built into the limestone cliffs.",
          image: "https://images.unsplash.com/photo-1554481923-a6918bd997bc?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      name: "Nusa Dua",
      image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80",
      description: "Upscale enclave known for pristine beaches and luxury resorts.",
      longDescription: "Nusa Dua is Bali's most exclusive and polished resort area, featuring a collection of world-class hotels along a pristine coastline. The area is meticulously maintained with manicured gardens, white sand beaches, and clear blue waters. Nusa Dua offers a more refined and quiet atmosphere compared to other parts of Bali, making it perfect for families and travelers seeking luxury and relaxation.",
      category: "beach",
      attractions: [
        {
          name: "Nusa Dua Beach",
          description: "Pristine white sand beach with crystal clear waters and water sports activities.",
          image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80"
        },
        {
          name: "Water Blow",
          description: "Natural rock formation creating spectacular water explosions when waves hit.",
          image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80"
        },
        {
          name: "Bali Collection",
          description: "Open-air shopping, dining, and entertainment complex in the heart of Nusa Dua.",
          image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      name: "Candidasa",
      image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?auto=format&fit=crop&q=80",
      description: "Quiet coastal town with black sand beaches and traditional Balinese culture.",
      longDescription: "Candidasa is a tranquil coastal town in East Bali that offers a more authentic and less crowded Balinese experience. The area features black sand beaches, traditional fishing villages, and ancient temples. Candidasa serves as an excellent base for exploring East Bali's cultural and natural attractions, including the historic Tenganan village, one of the oldest traditional villages on the island.",
      category: "culture",
      attractions: [
        {
          name: "Goa Lawah Temple",
          description: "Ancient temple built around a cave inhabited by thousands of bats.",
          image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80"
        },
        {
          name: "Black Sand Beach",
          description: "Volcanic black sand beaches with stunning views of the ocean and nearby islands.",
          image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?auto=format&fit=crop&q=80"
        },
        {
          name: "Tenganan Village",
          description: "One of Bali's oldest and most traditional villages known for unique double ikat textiles.",
          image: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      name: "Lahangan",
      image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&q=80",
      description: "Home to some of Bali's most iconic temples and breathtaking views.",
      longDescription: "Lahangan is located in East Bali and is home to some of the island's most photographed landmarks. The area is dominated by the majestic Mount Agung, Bali's highest volcano, creating a dramatic backdrop for the famous Lempuyang Temple. Visitors come to experience the spiritual atmosphere, capture iconic photos at the 'Gates of Heaven,' and enjoy panoramic views of the surrounding landscapes and coastline.",
      category: "highlight",
      attractions: [
        {
          name: "Lempuyang Temple",
          description: "Ancient temple complex featuring the famous 'Gates of Heaven' with Mount Agung views.",
          image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&q=80"
        },
        {
          name: "Lahangan Sweet",
          description: "Scenic viewpoint offering panoramic views of Mount Agung and the eastern coastline.",
          image: "https://images.unsplash.com/photo-1588499756884-d72584d84df5?auto=format&fit=crop&q=80"
        },
        {
          name: "Tirta Gangga Water Palace",
          description: "Royal water garden featuring ornate fountains, pools, and stone carvings.",
          image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      name: "Amed",
      image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&q=80",
      description: "Peaceful fishing village known for excellent snorkeling and diving spots.",
      longDescription: "Amed is a string of traditional fishing villages along Bali's northeastern coast, known for its black sand beaches and spectacular underwater world. The area offers some of Bali's best snorkeling and diving, with vibrant coral reefs and the famous USS Liberty shipwreck nearby. Amed provides a peaceful retreat from the busier parts of Bali, with stunning sunrise views over Mount Agung and traditional jukung fishing boats dotting the shoreline.",
      category: "beach",
      attractions: [
        {
          name: "Jemeluk Bay",
          description: "Beautiful bay with excellent snorkeling directly from the shore and underwater sculptures.",
          image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&q=80"
        },
        {
          name: "Japanese Shipwreck",
          description: "Accessible snorkeling site featuring a sunken Japanese patrol boat from WWII.",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80"
        },
        {
          name: "Sunrise Viewpoint",
          description: "The most beautiful sunrise spot in Bali with Mount Agung as a backdrop.",
          image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      name: "Kintamani",
      image: "https://images.unsplash.com/photo-1531201890865-fb64780d16e9?auto=format&fit=crop&q=80",
      description: "Volcanic region with stunning mountain views and natural hot springs.",
      longDescription: "Kintamani is a highland area in northeastern Bali dominated by the active Mount Batur volcano and its beautiful caldera lake. The region offers some of the most spectacular landscapes on the island, with panoramic views of the volcano, lake, and surrounding mountains. Visitors can trek to the summit for sunrise, relax in natural hot springs, explore traditional villages, and enjoy the cool mountain climate that provides a refreshing contrast to Bali's coastal areas.",
      category: "highlight",
      attractions: [
        {
          name: "Pinggan Village",
          description: "Traditional village offering spectacular views of Mount Batur and sea of clouds.",
          image: "https://images.unsplash.com/photo-1531201890865-fb64780d16e9?auto=format&fit=crop&q=80"
        },
        {
          name: "Mount Batur",
          description: "Active volcano offering popular sunrise trekking experiences with panoramic views.",
          image: "https://images.unsplash.com/photo-1500828131278-8de6878641b8?auto=format&fit=crop&q=80"
        },
        {
          name: "Toya Bungkah Hot Springs",
          description: "Natural hot springs with therapeutic mineral water at the base of Mount Batur.",
          image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80"
        },
        {
          name: "Lake Batur",
          description: "Largest crater lake in Bali offering boating, fishing, and stunning scenery.",
          image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80"
        },
        {
          name: "Kintamani Sunrise Point",
          description: "The most beautiful sunrise viewpoint in the mountains with volcano backdrop.",
          image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      name: "Sanur",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80",
      description: "Relaxed beach town with a mix of traditional and modern attractions.",
      longDescription: "Sanur is one of Bali's oldest and most established beach resorts, offering a perfect blend of traditional charm and modern amenities. The area features a beautiful white sand beach protected by a reef, creating calm waters ideal for swimming and water sports. A paved beachfront path stretches for kilometers, perfect for walking or cycling. Sanur maintains a laid-back atmosphere with a good selection of restaurants, shops, and cultural attractions.",
      category: "beach",
      attractions: [
        {
          name: "Sanur Beach",
          description: "Long stretch of white sand beach with calm waters perfect for swimming and water sports.",
          image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80"
        },
        {
          name: "Sanur Boardwalk",
          description: "5km paved beachfront path perfect for walking, jogging, or cycling with ocean views.",
          image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80"
        },
        {
          name: "Icon Mall",
          description: "Modern shopping center with unique architecture featuring international and local brands.",
          image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      name: "Jimbaran",
      image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&q=80",
      description: "Famous for its seafood restaurants on the beach and luxury resorts.",
      longDescription: "Jimbaran is a coastal area in southern Bali known for its beautiful bay, white sand beaches, and famous seafood dining experiences. The area has transformed from a traditional fishing village to an upscale destination with luxury resorts and villas. Jimbaran offers a more relaxed atmosphere compared to nearby areas like Kuta, while still providing easy access to many of Bali's southern attractions.",
      category: "beach",
      attractions: [
        {
          name: "Jimbaran Bay",
          description: "Crescent-shaped white sand beach with calm waters and spectacular sunsets.",
          image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&q=80"
        },
        {
          name: "Seafood Dining",
          description: "Beachfront dining experience featuring fresh seafood cooked over coconut husks.",
          image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&q=80"
        },
        {
          name: "Samasta Lifestyle Village",
          description: "Open-air shopping and dining complex with regular cultural performances.",
          image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      name: "Bedugul",
      image: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&q=80",
      description: "Highland region with cool climate, lakes, and botanical gardens.",
      longDescription: "Bedugul is a mountain lake resort area in central Bali, located at an altitude of about 1,500 meters above sea level. The region is characterized by its cool climate, three crater lakes, and lush vegetation. Bedugul is home to the iconic Ulun Danu Beratan Temple, which appears to float on the lake when water levels are high. The area offers a refreshing escape from Bali's heat and is known for its strawberry farms, botanical gardens, and adventure activities.",
      category: "nature",
      attractions: [
        {
          name: "Ulun Danu Beratan Temple",
          description: "Iconic water temple on Lake Beratan that appears to float when water levels are high.",
          image: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&q=80"
        },
        {
          name: "Wanagiri Hidden Hill",
          description: "Scenic viewpoint with creative photo platforms overlooking twin lakes and mountains.",
          image: "https://images.unsplash.com/photo-1581688689691-81c3a0a2a9ed?auto=format&fit=crop&q=80"
        },
        {
          name: "Sekumpul Waterfall",
          description: "Spectacular seven-tiered waterfall considered one of Bali's most beautiful.",
          image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80"
        },
        {
          name: "Banyumala Twin Waterfall",
          description: "Twin cascades flowing into a natural swimming pool surrounded by lush jungle.",
          image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80"
        },
        {
          name: "Handara Gate",
          description: "Iconic traditional Balinese gate that has become a popular photography spot.",
          image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80"
        },
        {
          name: "Gitgit Waterfall",
          description: "Easily accessible 40-meter waterfall surrounded by tropical forest.",
          image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80"
        },
        {
          name: "Leke-leke Waterfall",
          description: "Hidden waterfall reached through a scenic bamboo forest and canyon trail.",
          image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      name: "Tabanan",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80",
      description: "Known for its iconic sea temple and beautiful rice terraces.",
      longDescription: "Tabanan is a regency in southern Bali that showcases the island's natural beauty and cultural heritage. The area is home to the iconic Tanah Lot Temple, one of Bali's most important sea temples dramatically perched on an offshore rock. Tabanan is also known for its expansive rice terraces, including the UNESCO-listed Jatiluwih Rice Terraces. Less developed than southern tourist areas, Tabanan offers visitors a glimpse of traditional Balinese rural life and stunning landscapes.",
      category: "culture",
      attractions: [
        {
          name: "Tanah Lot Temple",
          description: "Iconic sea temple perched on a rock formation, especially beautiful at sunset.",
          image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80"
        },
        {
          name: "Jatiluwih Rice Terraces",
          description: "UNESCO-listed site featuring spectacular terraced rice fields using traditional irrigation.",
          image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80"
        },
        {
          name: "Taman Ayun Temple",
          description: "Royal temple surrounded by moats and featuring multi-tiered meru shrines.",
          image: "https://images.unsplash.com/photo-1580181566340-7c69a21f17ac?auto=format&fit=crop&q=80"
        }
      ]
    }
  ];

  useEffect(() => {
    if (params.slug) {
      // Convert slug to destination name format
      const destinationName = params.slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Find the destination in our data
      const found = allDestinations.find(
        d => d.name.toLowerCase() === destinationName.toLowerCase()
      );
      
      if (found) {
        setDestination(found);
      }
      
      setLoading(false);
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-teal-100 p-4">
        <h1 className="text-4xl font-bold text-teal-800 mb-4">Destination Not Found</h1>
        <p className="text-lg text-teal-600 mb-8">Sorry, we couldn't find the destination you're looking for.</p>
        <Link href="/all-destinations">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors duration-200">
            Back to All Destinations
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100">
      <div className="relative h-[50vh] md:h-[70vh]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {destination.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl"
            >
              {destination.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Overview</h2>
          <p className="text-lg text-teal-600 leading-relaxed">
            {destination.longDescription || destination.description}
          </p>
        </motion.div>

        {/* Attractions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Top Attractions</h2>
          
          {destination.attractions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {destination.attractions.map((attraction, index) => (
                <motion.div
                  key={attraction.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-teal-800 mb-2">{attraction.name}</h3>
                    <p className="text-teal-600">{attraction.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center">
              <p className="text-teal-600 text-lg">Attractions coming soon!</p>
            </div>
          )}
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Location</h2>
          <div className="relative h-96 rounded-xl overflow-hidden bg-teal-50">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-teal-600">Interactive map coming soon</p>
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Link href="/all-destinations">
            <button className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Destinations
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}