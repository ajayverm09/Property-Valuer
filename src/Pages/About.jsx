import React from "react";
import { motion } from "framer-motion";
import AboutHero from "../Components/AboutHero";
import AboutHistory from "../Components/AboutHistory";
import AboutTeam from "../Components/AboutTeam";
import AboutValues from "../Components/AboutValue";
import AboutCertifications from "../Components/AboutCertification";
import AboutCta from "../Components/AboutCta";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <AboutHero/>

      {/* History Section */}
      <AboutHistory/>
      {/* Team Section */}
      <AboutTeam/>

      {/* Values Section */}
      <AboutValues/>

      {/* Certifications */}
      <AboutCertifications/>

      {/* CTA Section */}
      <AboutCta/>
    </div>
  );
};

export default About;
