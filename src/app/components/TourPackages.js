'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TourPackages() {
  const handleWhatsAppClick = (packageName) => {
    const phoneNumber = "6287741459807";
    const message = `Hi, I'm interested in booking the ${packageName} package. Can you help me with more information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Import the tour packages data from the all-packages page
  const allPackages = [
    {
      name: "Ubud Tour",
      slug: "ubud-tour",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80",
      description: "Explore the cultural heart of Bali with visits to iconic temples, markets, and natural attractions.",
      category: "full-day",
      price: "$41",
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
      price: "$41",
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
      price: "$41",
      duration: "Full Day",
      attractions: [
        "Tanah Lot/Taman Ayun (optional, choose 1)",
        "Wanagiri Hidden Hill",
        "Ulundanu Beratan",
        "Jatiluwih (optional)",
        "Handara gate"
      ]
    },
    // ... you can include more packages if needed
  ];

  // Only show the first 3 packages on the home page
  const highlightedPackages = allPackages.slice(0, 3);

  return (
    <section id="packages" className="py-16 sm:py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-teal-800 mb-3 sm:mb-4"
          >
            Bali Tour Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-teal-600 max-w-2xl mx-auto px-4 sm:px-0"
          >
            Choose from our carefully curated selection of Bali experiences, designed to give you the perfect blend of adventure, culture, and relaxation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlightedPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group h-full flex flex-col"
            >
              <Link href={`/all-packages/${pkg.slug}`} className="block h-56 sm:h-64 w-full relative">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  priority={idx === 0}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm sm:text-base">{pkg.duration}</span>
                  </div>
                </div>
              </Link>
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <p className="text-teal-600 mb-4 text-sm sm:text-base">{pkg.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mt-auto">
                  <span className="text-xl sm:text-2xl font-bold text-teal-700">From {pkg.price}</span>
                  <button
                    onClick={() => handleWhatsAppClick(pkg.name)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start"
                    aria-label={`Book ${pkg.name} via WhatsApp`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link 
            href="/all-packages" 
            className="inline-block bg-teal-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-teal-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            aria-label="View all tour packages"
          >
            See All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}