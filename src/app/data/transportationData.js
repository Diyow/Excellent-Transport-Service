'use client'

// Export the transportation data to be used across components
export const transportationOptions = [
  {
    name: "Toyota Avanza",
    image: "/transportation/toyota-avanza.avif",
    category: "medium",
    priceAdjustment: 0, // Base price, no adjustment
    specs: [
      "Max 4 persons with luggage for airport transfer",
      "Max 6 persons for tour"
    ]
  },
  {
    name: "Suzuki APV",
    image: "/transportation/suzuki-apv.avif",
    category: "medium",
    priceAdjustment: 5, // $5 more than base price
    specs: [
      "Max 4 persons with luggage for airport transfer",
      "Max 6 persons for tour"
    ]
  },
  {
    name: "Toyota Innova",
    image: "/transportation/toyota-innova.avif",
    category: "medium",
    priceAdjustment: 10, // $10 more than base price
    specs: [
      "Max 4 persons with luggage for airport transfer",
      "Max 6 persons for tour"
    ]
  },
  {
    name: "Isuzu ELF",
    image: "/transportation/isuzu-elf.jpg",
    category: "large",
    priceAdjustment: 20, // $20 more than base price
    specs: [
      "Max 9 persons with luggage for airport transfer",
      "Max 12 persons for tour"
    ]
  },
  {
    name: "Toyota Hiace",
    image: "/transportation/toyota-hiace.jpg",
    category: "large",
    priceAdjustment: 25, // $25 more than base price
    specs: [
      "Max 10 persons with luggage for airport transfer",
      "Max 15 persons for tour"
    ]
  }
];

// Helper function to get transportation options by category
export function getTransportationByCategory(category) {
  return category === 'all' 
    ? transportationOptions 
    : transportationOptions.filter(option => option.category === category);
}

// Helper function to calculate the adjusted price based on base price and transportation
export function calculateAdjustedPrice(basePrice, transportationName) {
  // If no transportation selected, return the base price
  if (!transportationName) return basePrice;
  
  // Find the selected transportation option
  const selectedTransportation = transportationOptions.find(option => option.name === transportationName);
  
  // If not found, return the base price
  if (!selectedTransportation) return basePrice;
  
  // Extract the numeric value from the base price (assuming format like "$50")
  const numericBasePrice = parseInt(basePrice.replace(/[^0-9]/g, ''));
  
  // Calculate the adjusted price
  const adjustedPrice = numericBasePrice + selectedTransportation.priceAdjustment;
  
  // Return in the same format as the base price
  return `$${adjustedPrice}`;
}