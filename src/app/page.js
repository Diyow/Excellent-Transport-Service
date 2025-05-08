'use client'
import Header from "./components/Header";
import Hero from "./components/Hero";
import TourPackages from "./components/TourPackages";
import WhyChooseUs from "./components/WhyChooseUs";
import PopularDestinations from "./components/PopularDestinations";
import ExclusiveBaliExperiences from "./components/ExclusiveBaliExperiences";
import TravelTips from "./components/TravelTips";
import PhotoGallery from "./components/PhotoGallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  const destinations = [
    {
      name: "Bali Cultural Experience",
      image: "/bali.jpg",
      description: "Explore Ubud's temples, rice terraces, and traditional arts.",
      duration: "3 Days",
      price: "From $299"
    },
    {
      name: "Bali Beach Paradise",
      image: "/bali.jpg",
      description: "Discover pristine beaches and vibrant nightlife in Seminyak.",
      duration: "4 Days",
      price: "From $399"
    },
    {
      name: "Bali Adventure Tour",
      image: "/bali.jpg",
      description: "Hike Mount Batur and experience water sports in Nusa Penida.",
      duration: "5 Days",
      price: "From $499"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100 flex flex-col">
      <Header />
      <Hero />
      <TourPackages destinations={destinations} />
      <WhyChooseUs />
      <PopularDestinations />
      <ExclusiveBaliExperiences />
      <TravelTips />
      <PhotoGallery />
      <FAQ />
      <Footer />
    </div>
  );
}
