'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ExclusiveBaliExperiences() {
  // Highlighted activities for the main page
  const highlightedActivities = [
    {
      name: "Quadbike Adventure",
      image: "https://images.unsplash.com/photo-1564842831100-a4b91b8d7d4f?auto=format&fit=crop&q=80",
      description: "Experience the thrill of riding quadbikes through Bali's scenic landscapes, from rice fields to jungle trails.",
      isHighlighted: true
    },
    {
      name: "Dolphin Watching",
      image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&q=80",
      description: "Witness playful dolphins in their natural habitat during a magical sunrise boat trip off Bali's northern coast.",
      isHighlighted: true
    },
    {
      name: "Sunrise Jeep Adventure",
      image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80",
      description: "Explore Bali's rugged terrain and breathtaking viewpoints in a 4x4 jeep during the golden hours of sunrise.",
      isHighlighted: true
    },
    {
      name: "Sunrise Trekking",
      image: "https://images.unsplash.com/photo-1604537466158-719b1972feb8?auto=format&fit=crop&q=80",
      description: "Embark on an early morning trek to witness the spectacular sunrise from Bali's volcanic mountains.",
      isHighlighted: true
    },
    {
      name: "Banana Boat Ride",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80",
      description: "Enjoy an exciting banana boat ride along Bali's beautiful beaches for a fun-filled water adventure.",
      isHighlighted: true
    }
  ];

  return (
    <section id="exclusive-experiences" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-teal-800 mb-4"
          >
            Exclusive Bali Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-teal-600 max-w-2xl mx-auto"
          >
            Discover unforgettable activities that will make your Bali trip truly special.
          </motion.p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightedActivities.map((activity, index) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-64">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-teal-800 mb-2">{activity.name}</h3>
                <p className="text-teal-600">{activity.description}</p>
              </div>
              <div className="p-6 pt-0">
                <button className="text-teal-600 font-medium hover:text-teal-800 transition-colors duration-200 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/all-activities" 
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors duration-200"
          >
            See All Activities
          </Link>
        </motion.div>
      </div>
    </section>
  );
}