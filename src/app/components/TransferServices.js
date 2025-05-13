'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TransferServices() {
  // Airport transfer pricing data
  const transferPricing = [
    { destination: "Nusa Dua", oneWay: 25, return: 45 },
    { destination: "Jimbaran", oneWay: 25, return: 45 },
    { destination: "Kuta", oneWay: 20, return: 35 },
    { destination: "Seminyak", oneWay: 25, return: 45 },
    { destination: "Sanur", oneWay: 25, return: 45 },
    { destination: "Canggu", oneWay: 30, return: 55 },
    { destination: "Tanah Lot", oneWay: 35, return: 65 },
    { destination: "Ubud", oneWay: 30, return: 55 },
    { destination: "Denpasar", oneWay: 25, return: 40 },
    { destination: "Candi Dasa", oneWay: 45, return: 80 },
    { destination: "Uluwatu", oneWay: 30, return: 55 },
  ];

  return (
    <section id="transfer-services" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-teal-800 mb-4">Airport & Hotel Transfer Services</h2>
          <p className="text-lg text-teal-600 max-w-3xl mx-auto">
            Enjoy hassle-free transportation between Bali's Ngurah Rai International Airport and your accommodation with our reliable transfer services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Airport Transfer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg p-6 md:p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-teal-800">Airport Transfer</h3>
            </div>
            <p className="text-teal-600 mb-6">
              Our airport pickup service ensures a smooth start to your Bali vacation. We'll monitor your flight and wait for you even if it's delayed, helping with your luggage and providing a comfortable ride to your accommodation.
            </p>
            <ul className="space-y-3 text-teal-700 mb-6">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Free waiting time (60 minutes after landing)
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Flight monitoring
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Meet & greet at arrival hall
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Complimentary bottled water
              </li>
            </ul>
          </motion.div>

          {/* Hotel Transfer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg p-6 md:p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-teal-800">Hotel Transfer</h3>
            </div>
            <p className="text-teal-600 mb-6">
              Need to move between hotels during your stay? Our hotel transfer service provides convenient transportation between accommodations, allowing you to enjoy Bali without worrying about your luggage or finding transportation.
            </p>
            <ul className="space-y-3 text-teal-700 mb-6">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Door-to-door service
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Assistance with luggage
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Flexible pickup times
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Professional, English-speaking drivers
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="p-6 bg-teal-700 text-white">
            <h3 className="text-2xl font-bold">Transfer Pricing</h3>
            <p className="text-teal-100">Transparent pricing for all destinations in Bali</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-teal-50">
                  <th className="px-6 py-4 text-teal-800 font-bold">DESTINATIONS</th>
                  <th className="px-6 py-4 text-teal-800 font-bold">ONE WAY</th>
                  <th className="px-6 py-4 text-teal-800 font-bold">RETURN</th>
                </tr>
              </thead>
              <tbody>
                {transferPricing.map((item, index) => (
                  <tr key={item.destination} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 text-teal-800 font-medium">{item.destination}</td>
                    <td className="px-6 py-4 text-teal-700">USD {item.oneWay}</td>
                    <td className="px-6 py-4 text-teal-700">USD {item.return}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-teal-50 text-teal-700">
            <p className="text-sm">
              * Prices are in USD and include all taxes and fees. Return transfers include both airport pickup and drop-off.
            </p>
            <p className="text-sm mt-2">
              * For groups larger than 4 people or special requirements, please contact us for a custom quote.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/contact" 
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors duration-200"
          >
            Book Your Transfer
          </Link>
        </div>
      </div>
    </section>
  );
}