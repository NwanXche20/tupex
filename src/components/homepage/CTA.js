import React from "react";
import CtaCartoon from "../../assets/cta-cartoon.png";
import Button from "../Button";

const CTA = () => {
  return (
    <div className="cta">
      <img className="cta-img" alt="background art" src={CtaCartoon} />
      <div className="cta-inner">
        <h2>Get Started With Us</h2>
        <p>
          Your ceremony & reception venues, yourvision, your dress, your colours
          and anythingelse you would like to share with us.{" "}
        </p>
        <Button className="secondary" />
      </div>
    </div>
  );
};

export default CTA;
