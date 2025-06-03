'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getDestinationBySlug } from '../../data/destinationsData';

export default function DestinationDetail() {
  const params = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      const foundDestination = getDestinationBySlug(params.slug);
      setDestination(foundDestination);
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