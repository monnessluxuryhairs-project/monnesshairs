import WhatsAppPopup from "../component/global/WhatappsPopUp";
import Categories from "../component/homepage/Categories";
import FeaturedProducts from "../component/homepage/FeaturedProducts";
import HeroSection from "../component/homepage/HeroSection";

const HomePage = () => {
  return (
    <div>
      <WhatsAppPopup />
      <HeroSection />
      <FeaturedProducts />
      <Categories />
    </div>
  );
};

export default HomePage;
