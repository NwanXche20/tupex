import React from "react";
import {
  Hero,
  AboutUsSection,
  WhyUsSection,
  ProjectStats,
  FloralDesign,
  OurWorks,
  CTA,
} from "../components/homepage";

const Homepage = () => {
  return (
    <div className="container grid">
      <Hero />
      <AboutUsSection />
      <WhyUsSection />
      <ProjectStats />
      <FloralDesign />
      <OurWorks />
      <CTA />
    </div>
  );
};

export default Homepage;
