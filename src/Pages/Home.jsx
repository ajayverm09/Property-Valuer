import React from "react";
import HomeCta from "../Components/HomeCta";
import HomeTestimonial from "../Components/HomeTestimonial";
import HomeStats from "../Components/HomeStats";
import HomeProcess from "../Components/HomeProcess";
import HomeService from "../Components/HomeService";
import HomeHero from "../Components/HomeHero";
import AboutCompany from "../Components/HomeAbout";

const HomePage = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HomeHero />

      {/* About Company */}
      <AboutCompany/>

      {/* Services Section */}
      <HomeService />

      {/* Process Section */}
      <HomeProcess />

      {/* Stats Section */}
      <HomeStats />

      {/* Testimonials */}
      <HomeTestimonial />

      {/* CTA Section */}
      <HomeCta />
    </div>
  );
};

export default HomePage;
