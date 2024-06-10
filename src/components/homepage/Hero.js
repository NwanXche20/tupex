import React from "react";
import Button from "../Button";
import HeroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="flex hero">
      <div className="hero-text">
        <h1>
          Where <span className="colorDesign">creativity</span> meets{" "}
          <span className="colorDesign">focus</span>
        </h1>
        <h4>
          Your creativity, our inspiration Whatever your story, set if free.
        </h4>
        <Button className="primary" />
      </div>

      <div className="hero-image">
        <img src={HeroImage} alt="photography shots" loading="lazy" />
      </div>
    </div>
  );
};

export default Hero;
