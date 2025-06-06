import { motion } from "framer-motion";

export default function TransferServices() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6287741459807";
    const message =
      "Hi, I'm interested in booking a Transfer Service. Can you help me with more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Airport transfer pricing data
  const transferPricing = [
    { destination: "Nusa Dua", oneWay: 25, return: 45 },
    { destination: "Jimbaran", oneWay: 25, return: 45 },
    { destination: "Kuta", oneWay: 10.94, return: 35 },
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
    <section
      id="transfer-services"
      className="py-20 bg-gradient-to-b from-blue-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Airport & Hotel Transfer Services
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Enjoy hassle-free transportation between Bali&apos;s Ngurah Rai
            International Airport and your accommodation with our reliable
            transfer services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Airport Transfer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg p-6 md:p-8 flex flex-col"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                Airport Transfer
              </h3>
            </div>
            <p className="text-slate-600 mb-6">
              Our airport pickup service ensures a smooth start to your Bali
              vacation. We&apos;ll monitor your flight and wait for you even if it&apos;s
              delayed, helping with your luggage and providing a comfortable
              ride to your accommodation.
            </p>
            <ul className="space-y-3 text-slate-700 mb-6">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Meet & greet at arrival hall
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Complimentary bottled water
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Air-conditioned vehicles
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Good English-speaking drivers
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Flexible pickup times
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                No hidden fees or surcharges
              </li>
            </ul>
            <div className="mt-auto p-4 bg-blue-50 rounded-lg">
              <p className="text-slate-700 font-medium">
                <span className="text-blue-800 font-bold">Important Note:</span>{" "}
                Our airport transfer service includes fixed pricing to popular
                destinations throughout Bali. See the pricing table below for
                details. For destinations not listed, please contact us for a
                custom quote.
              </p>
            </div>
          </motion.div>

          {/* Hotel Transfer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg p-6 md:p-8 flex flex-col"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                Hotel Transfer
              </h3>
            </div>
            <p className="text-slate-600 mb-6">
              Need to move between hotels during your stay? Our hotel transfer
              service provides convenient transportation between accommodations,
              allowing you to enjoy Bali without worrying about your luggage or
              finding transportation.
            </p>
            <ul className="space-y-3 text-slate-700 mb-6">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Door-to-door service
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Assistance with luggage
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Flexible pickup times
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Good English-speaking drivers
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Air-conditioned vehicles
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                No hidden fees or surcharges
              </li>
            </ul>
            <div className="mt-auto p-4 bg-blue-50 rounded-lg">
              <p className="text-slate-700 font-medium">
                <span className="text-blue-800 font-bold">Custom Pricing:</span>{" "}
                Hotel transfer prices are calculated based on the distance
                between locations. Contact us for a personalized quote based on
                your specific journey.
              </p>
            </div>
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
          <div className="p-6 bg-blue-600 text-white">
            <h3 className="text-2xl font-bold">Airport Transfer Pricing</h3>
            <p className="text-blue-100">
              Transparent pricing for airport transfers to all destinations in
              Bali
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-6 py-4 text-blue-600 font-bold">
                    DESTINATIONS
                  </th>
                  <th className="px-6 py-4 text-blue-600 font-bold">ONE WAY</th>
                  <th className="px-6 py-4 text-blue-600 font-bold">RETURN</th>
                </tr>
              </thead>
              <tbody>
                {transferPricing.map((item, index) => (
                  <tr
                    key={item.destination}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 text-slate-800 font-medium">
                      {item.destination}
                    </td>
                    <td className="px-6 py-4 text-slate-700">
                      USD {item.oneWay}
                    </td>
                    <td className="px-6 py-4 text-slate-700">
                      USD {item.return}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-blue-50 text-slate-700">
            <p className="text-sm">
              * Prices are in USD and include all taxes and fees. Return
              transfers include both airport pickup and drop-off.
            </p>
            <p className="text-sm mt-2">
              * For groups larger than 4 people or special requirements, please
              contact us for a custom quote.
            </p>
            <p className="text-sm mt-2 font-medium">
              * Hotel-to-hotel transfer pricing is not included in this table.
              Prices for hotel transfers are calculated based on the distance
              between locations. Please contact us for a personalized quote.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleWhatsAppClick}
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Book Your Transfer
          </button>
        </div>
      </div>
    </section>
  );
}
