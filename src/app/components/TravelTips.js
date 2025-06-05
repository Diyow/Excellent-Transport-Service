'use client'
import { motion } from "framer-motion";
import Image from "next/image";

export default function TravelTips() {
  const tips = [
    {
      title: "Best Time to Visit",
      content: "The best time to visit Bali is during the dry season (April to October). The weather is perfect for beach activities and exploring the island.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Local Customs",
      content: "Respect local customs by dressing modestly when visiting temples. Always ask permission before taking photos of locals.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Packing Guide",
      content: "Pack light, breathable clothing, swimwear, sunscreen, and insect repellent. Don't forget your camera and power adapter.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  const blogPosts = [
    {
      title: "Exploring Ubud's Hidden Gems",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80",
      excerpt: "Discover the lesser-known attractions in Ubud that most tourists miss.",
      date: "March 15, 2024"
    },
    {
      title: "Bali's Best Beaches",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80",
      excerpt: "A guide to the most beautiful beaches in Bali, from popular spots to hidden coves.",
      date: "March 10, 2024"
    },
    {
      title: "Bali Food Guide",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80",
      excerpt: "Must-try local dishes and the best places to eat in Bali.",
      date: "March 5, 2024"
    }
  ];

  return (
    <section id="travel-tips" className="py-20 bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-800 mb-4"
          >
            Travel Tips
            {/* Travel Tips & Blog */}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Essential information and insights to help you plan your perfect Bali trip.
          </motion.p>
        </div>

        {/* Travel Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-400 mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{tip.title}</h3>
              <p className="text-slate-500">{tip.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Blog Posts */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-slate-600 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{post.title}</h3>
                <p className="text-slate-500 mb-4">{post.excerpt}</p>
                <button className="text-blue-500 font-medium hover:text-blue-800 transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* Newsletter Signup */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-teal-600 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-white/90 mb-6">Subscribe to our newsletter for the latest travel tips and updates.</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button className="bg-white text-teal-600 px-6 py-2 rounded-lg font-medium hover:bg-teal-50 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
} 