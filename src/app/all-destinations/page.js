'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AllDestinations() {
  const [activeFilter, setActiveFilter] = useState('all');

  // All destinations data
  const destinations = [
    {
      name: "Ubud",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80",
      description: "Cultural heart of Bali, known for its traditional arts and natural beauty.",
      category: "highlight",
      attractions: [
        "Yoga class",
        "Tegalalang Rice Terrace",
        "Ubud Palace",
        "Ubud Market",
        "Monkey Forest"
      ]
    },
    {
      name: "Seminyak",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
      description: "Upscale beach resort area with luxury accommodations, high-end shopping, and fine dining.",
      category: "beach",
      attractions: [
        "Restaurant",
        "Sunset Beach (Double Six, Petitenget)"
      ]
    },
    {
      name: "Canggu",
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80",
      description: "Trendy coastal village with a strong surf culture and vibrant nightlife.",
      category: "beach",
      attractions: [
        "Fins",
        "Atlas (biggest club in Asia)",
        "Nuanu / Luna Beach artificial beach"
      ]
    },
    {
      name: "Kuta",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80",
      description: "Famous for its long sandy beach, surf-friendly waves, and vibrant nightlife.",
      category: "beach",
      attractions: [
        "The most Beautiful sunset in Bali"
      ]
    },
    {
      name: "Uluwatu",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80",
      description: "Famous for its stunning cliff-top temple and world-class surf breaks.",
      category: "highlight",
      attractions: [
        "Uluwatu Temple",
        "Kecak Dance",
        "Pandawa Beach",
        "Sunday Beach Club",
        "Bingin Beach"
      ]
    },
    {
      name: "Nusa Dua",
      image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80",
      description: "Upscale enclave known for pristine beaches and luxury resorts.",
      category: "beach",
      attractions: []
    },
    {
      name: "Candidasa",
      image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?auto=format&fit=crop&q=80",
      description: "Quiet coastal town with black sand beaches and traditional Balinese culture.",
      category: "culture",
      attractions: [
        "Goalawah Temple",
        "Black Sand Beach",
        "Tenganan Village"
      ]
    },
    {
      name: "Lahangan",
      image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&q=80",
      description: "Home to some of Bali's most iconic temples and breathtaking views.",
      category: "highlight",
      attractions: [
        "Lempuyang Temple",
        "Lahangan Sweet",
        "Tirta Gangga Temple"
      ]
    },
    {
      name: "Amed",
      image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&q=80",
      description: "Peaceful fishing village known for excellent snorkeling and diving spots.",
      category: "beach",
      attractions: [
        "The most beautiful sunrise in beaches"
      ]
    },
    {
      name: "Kintamani",
      image: "https://images.unsplash.com/photo-1531201890865-fb64780d16e9?auto=format&fit=crop&q=80",
      description: "Volcanic region with stunning mountain views and natural hot springs.",
      category: "highlight",
      attractions: [
        "Pinggan Village",
        "Mount Batur",
        "Hot Spring",
        "Batur Lake",
        "The Most beautiful sunrise in the mountains"
      ]
    },
    {
      name: "Sanur",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80",
      description: "Relaxed beach town with a mix of traditional and modern attractions.",
      category: "beach",
      attractions: [
        "Beach",
        "Icon Mall (modern mall with fancy architecture)"
      ]
    },
    {
      name: "Jimbaran",
      image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&q=80",
      description: "Famous for its seafood restaurants on the beach and luxury resorts.",
      category: "beach",
      attractions: [
        "Beach dinner"
      ]
    },
    {
      name: "Bedugul",
      image: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&q=80",
      description: "Highland region with cool climate, lakes, and botanical gardens.",
      category: "nature",
      attractions: [
        "Ulundanu Beratan",
        "Wanagiri Hidden Hill",
        "Sekumpul Waterfall",
        "Banyummala Waterfall",
        "Handara Gate",
        "Gitgit Waterfall",
        "Leke-leke Waterfall"
      ]
    },
    {
      name: "Tabanan",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80",
      description: "Known for its iconic sea temple and beautiful rice terraces.",
      category: "culture",
      attractions: [
        "Tanah Lot Temple",
        "Jatiluwih Rice Terrace",
        "Taman Ayun"
      ]
    }
  ];

  // Filter destinations based on active filter
  const filteredDestinations = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100">
      <Header />
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl mt-12 font-bold text-teal-800 mb-4">Explore Bali Destinations</h1>
          <p className="text-lg text-teal-600 max-w-3xl mx-auto">
            Discover the beauty and diversity of Bali's most enchanting locations, from pristine beaches to cultural landmarks and natural wonders.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'highlight', 'beach', 'culture', 'nature'].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeFilter === filter
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-teal-600 hover:bg-teal-50'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Destinations Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDestinations.map((destination) => (
            <motion.div
              key={destination.name}
              variants={itemVariants}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                destination.category === 'highlight' ? 'ring-2 ring-teal-500' : ''
              }`}
            >
              <Link href={`/all-destinations/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="relative h-64 cursor-pointer">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
                    {destination.category === 'highlight' && (
                      <span className="inline-block bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
                        Highlight
                      </span>
                    )}
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <p className="text-teal-600 mb-4">{destination.description}</p>
                {destination.attractions.length > 0 ? (
                  <div>
                    <h4 className="font-semibold text-teal-800 mb-2">Top Attractions:</h4>
                    <ul className="space-y-1">
                      {destination.attractions.slice(0, 3).map((attraction) => (
                        <li key={attraction} className="flex items-start">
                          <svg className="w-5 h-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-teal-600">{attraction}</span>
                        </li>
                      ))}
                      {destination.attractions.length > 3 && (
                        <li className="text-teal-500 font-medium mt-1">
                          +{destination.attractions.length - 3} more attractions
                        </li>
                      )}
                    </ul>
                  </div>
                ) : (
                  <p className="text-teal-500 italic">Coming soon...</p>
                )}
                <Link href={`/all-destinations/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="mt-6 flex justify-end">
                    <button className="text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200 flex items-center">
                      Explore More
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link href="/">
            <button className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}