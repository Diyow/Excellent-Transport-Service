'use client'
import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the best time to visit Bali?",
      answer: "The best time to visit Bali is during the dry season (April to October). The weather is perfect for beach activities and exploring the island. However, Bali is a year-round destination, and even during the wet season, you can still enjoy many activities."
    },
    {
      question: "Do I need a visa to visit Bali?",
      answer: "Most countries can enter Indonesia visa-free for up to 30 days. However, it's best to check with your local Indonesian embassy or consulate for the most up-to-date visa requirements for your country."
    },
    {
      question: "What should I pack for my Bali trip?",
      answer: "Pack light, breathable clothing, swimwear, sunscreen, insect repellent, and comfortable walking shoes. Don't forget your camera, power adapter, and any necessary medications. If you plan to visit temples, bring modest clothing that covers your shoulders and knees."
    },
    {
      question: "Is Bali safe for tourists?",
      answer: "Bali is generally safe for tourists. However, like any popular tourist destination, it's important to take basic precautions such as keeping your belongings secure, being aware of your surroundings, and following local customs and regulations."
    },
    {
      question: "What currency is used in Bali?",
      answer: "The official currency in Bali is the Indonesian Rupiah (IDR). While some places accept credit cards, it's recommended to carry cash for smaller purchases and local markets. ATMs are widely available in tourist areas."
    },
    {
      question: "How do I get around in Bali?",
      answer: "You can get around Bali by taxi, ride-hailing apps, private driver, or renting a scooter. For longer distances, private drivers are recommended. Always negotiate prices before getting into a taxi and ensure you have proper insurance if renting a vehicle."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-teal-800 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-teal-600 max-w-2xl mx-auto"
          >
            Find answers to common questions about traveling to Bali.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-teal-800">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-teal-600 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-teal-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-teal-800 mb-4">Still have questions?</h3>
          <p className="text-teal-600 mb-6">We're here to help! Contact us for more information.</p>
          <a
            href="#contact"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors duration-200"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
} 