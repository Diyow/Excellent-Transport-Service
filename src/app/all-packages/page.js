'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AllPackages() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky filter bar on mobile
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // All tour packages data
  const tourPackages = [
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

  // Filter packages based on active filter
  const filteredPackages = activeFilter === 'all' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.category === activeFilter);

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-center text-teal-800 mb-3 sm:mb-4"
        >
          Our Bali Tour Packages
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-center text-teal-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0"
        >
          Explore our full range of tour packages designed to showcase the best of Bali's culture, nature, and attractions.
        </motion.p>

        {/* Filter buttons - sticky on mobile */}
        <div 
          className={`${isScrolled ? 'sticky top-0 z-10 py-3 bg-teal-50/90 backdrop-blur-sm shadow-md' : ''} 
          flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 transition-all duration-300 -mx-4 px-4 sm:mx-0 sm:px-0`}
        >
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'all' ? 'bg-teal-600 text-white' : 'bg-white text-teal-700 hover:bg-teal-50'}`}
            aria-label="Show all packages"
          >
            All Packages
          </button>
          <button
            onClick={() => setActiveFilter('full-day')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'full-day' ? 'bg-teal-600 text-white' : 'bg-white text-teal-700 hover:bg-teal-50'}`}
            aria-label="Show full day tours only"
          >
            Full Day Tours
          </button>
          <button
            onClick={() => setActiveFilter('nusa-penida')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'nusa-penida' ? 'bg-teal-600 text-white' : 'bg-white text-teal-700 hover:bg-teal-50'}`}
            aria-label="Show Nusa Penida tours only"
          >
            Nusa Penida Tours
          </button>
        </div>

        {/* Results count */}
        <div className="mb-6 text-center sm:text-left">
          <p className="text-sm text-teal-700">
            Showing <span className="font-semibold">{filteredPackages.length}</span> packages
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(idx * 0.05, 0.5), duration: 0.5 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden group h-full flex flex-col ${pkg.status === 'on hold' ? 'opacity-70' : ''}`}
            >
              <Link href={`/all-packages/${pkg.slug}`} className="block h-52 sm:h-64 w-full relative">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  {pkg.status === 'on hold' && (
                    <span className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                      On Hold
                    </span>
                  )}
                </div>
              </Link>
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <p className="text-teal-600 mb-4 text-sm sm:text-base">{pkg.description}</p>
                
                {/* Attractions preview */}
                {pkg.attractions && pkg.attractions.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-teal-800 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {pkg.attractions.slice(0, 3).map((attraction, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          <span>{attraction}</span>
                        </li>
                      ))}
                      {pkg.attractions.length > 3 && (
                        <li className="text-teal-600 text-xs italic">+{pkg.attractions.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mt-auto pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-teal-700">From {pkg.price}</span>
                    <span className="text-xs text-gray-500 self-end mb-1">per package</span>
                  </div>
                  <Link 
                    href={`/all-packages/${pkg.slug}`} 
                    className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors duration-200 w-full sm:w-auto text-center"
                    aria-label={`View details for ${pkg.name}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* No results message */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-teal-700">No packages found for the selected filter.</p>
            <button 
              onClick={() => setActiveFilter('all')} 
              className="mt-4 text-teal-600 underline hover:text-teal-800"
            >
              View all packages
            </button>
          </div>
        )}
      </div>
    </div>
  );
}