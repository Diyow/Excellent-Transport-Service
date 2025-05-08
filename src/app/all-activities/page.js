'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AllActivities() {
  const [activeFilter, setActiveFilter] = useState('all');

  // All activities data
  const activities = [
    {
      name: "Quadbike Adventure",
      image: "https://images.unsplash.com/photo-1564842831100-a4b91b8d7d4f?auto=format&fit=crop&q=80",
      description: "Experience the thrill of riding quadbikes through Bali's scenic landscapes, from rice fields to jungle trails.",
      category: "adventure",
      isHighlighted: true
    },
    {
      name: "Rafting",
      image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&q=80",
      description: "Navigate through exciting rapids while enjoying the lush jungle scenery of Bali's rivers.",
      category: "water",
      isHighlighted: false
    },
    {
      name: "Snorkeling",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80",
      description: "Discover Bali's vibrant underwater world with colorful coral reefs and tropical fish.",
      category: "water",
      isHighlighted: false
    },
    {
      name: "Dolphin Watching",
      image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&q=80",
      description: "Witness playful dolphins in their natural habitat during a magical sunrise boat trip off Bali's northern coast.",
      category: "nature",
      isHighlighted: true
    },
    {
      name: "Sunrise Jeep Adventure",
      image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80",
      description: "Explore Bali's rugged terrain and breathtaking viewpoints in a 4x4 jeep during the golden hours of sunrise.",
      category: "adventure",
      isHighlighted: true
    },
    {
      name: "Sunrise Trekking",
      image: "https://images.unsplash.com/photo-1604537466158-719b1972feb8?auto=format&fit=crop&q=80",
      description: "Embark on an early morning trek to witness the spectacular sunrise from Bali's volcanic mountains.",
      category: "adventure",
      isHighlighted: true
    },
    {
      name: "Tubing",
      image: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80",
      description: "Float down Bali's scenic rivers on inflatable tubes for a relaxing water adventure.",
      category: "water",
      isHighlighted: false
    },
    {
      name: "Parasailing",
      image: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?auto=format&fit=crop&q=80",
      description: "Soar high above Bali's coastline for breathtaking aerial views of the island and ocean.",
      category: "water",
      isHighlighted: false
    },
    {
      name: "Banana Boat Ride",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80",
      description: "Enjoy an exciting banana boat ride along Bali's beautiful beaches for a fun-filled water adventure.",
      category: "water",
      isHighlighted: true
    },
    {
      name: "Rolling Donut",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80",
      description: "Experience the thrill of spinning around on an inflatable donut tube pulled by a speedboat.",
      category: "water",
      isHighlighted: false
    },
    {
      name: "Cycling Tour",
      image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80",
      description: "Pedal through Bali's picturesque villages, rice fields, and countryside on a guided cycling tour.",
      category: "adventure",
      isHighlighted: false
    },
    {
      name: "Buggy Adventure",
      image: "https://images.unsplash.com/photo-1564842831100-a4b91b8d7d4f?auto=format&fit=crop&q=80",
      description: "Drive off-road buggies through Bali's challenging terrains for an adrenaline-pumping experience.",
      category: "adventure",
      isHighlighted: false
    },
    {
      name: "Bali Swing",
      image: "https://images.unsplash.com/photo-1557159557-7a93fb1af9d3?auto=format&fit=crop&q=80",
      description: "Swing high above the jungle canopy for incredible views and Instagram-worthy photos.",
      category: "adventure",
      isHighlighted: false
    },
    {
      name: "Bali Zoo Experience",
      image: "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?auto=format&fit=crop&q=80",
      description: "Get up close with exotic animals and participate in interactive wildlife experiences.",
      category: "nature",
      isHighlighted: false
    },
    {
      name: "Bali Safari Adventure",
      image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&q=80",
      description: "Embark on a safari journey to see hundreds of animals from Indonesia and beyond.",
      category: "nature",
      isHighlighted: false
    },
    {
      name: "Night Safari",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80",
      description: "Experience the magic of wildlife after dark with a guided night safari adventure.",
      category: "nature",
      isHighlighted: false
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Activities' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'water', name: 'Water Activities' },
    { id: 'nature', name: 'Nature & Wildlife' },
    { id: 'highlighted', name: 'Popular Activities' }
  ];

  // Filter activities based on active filter
  const filteredActivities = activeFilter === 'all' 
    ? activities 
    : activeFilter === 'highlighted'
      ? activities.filter(activity => activity.isHighlighted)
      : activities.filter(activity => activity.category === activeFilter);

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
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl mt-12 font-bold text-teal-800 mb-4">Exclusive Bali Experiences</h1>
        <p className="text-lg text-teal-600 max-w-3xl mx-auto">
          Discover the most exciting and memorable activities Bali has to offer. From thrilling adventures to serene nature experiences, there's something for everyone.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-6 py-2 rounded-full transition-colors duration-200 ${
              activeFilter === category.id
                ? 'bg-teal-600 text-white'
                : 'bg-white text-teal-600 hover:bg-teal-50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Activities Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredActivities.map((activity) => (
          <motion.div
            key={activity.name}
            variants={itemVariants}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
          >
            <div className="relative h-64">
              <Image
                src={activity.image}
                alt={activity.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {activity.isHighlighted && (
                <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">{activity.name}</h3>
              <p className="text-teal-600">{activity.description}</p>
            </div>
            <div className="p-6 pt-0">
              <button className="text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200 flex items-center">
                Book Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}