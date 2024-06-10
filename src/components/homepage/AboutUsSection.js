import React from "react";
import AboutUsImage from "../../assets/aboutUs-image.png";
import Button from "../Button";

const AboutUsSection = () => {
  return (
    <div className="flex aboutUs">
      <div className="aboutUs-image">
        <img src={AboutUsImage} alt="photography shots" loading="lazy" />
      </div>

      <div className="aboutUs-text">
        <h5>GET TO KNOW US</h5>
        <h2>Why we make it happen</h2>
        <p>
          Your ceremony & reception venues, your vision, your dress, your
          colours and anything else you would like.
        </p>
        <Button className="primary" />
      </div>
    </div>
  );
};

export default AboutUsSection;
