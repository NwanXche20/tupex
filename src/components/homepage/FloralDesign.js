import React from "react";
import { useFetcher } from "../../hooks/useFetcher";
import Button from "../Button";

const FloralDesign = () => {
  const { pictures } = useFetcher();

  return (
    <div className="floral-container">
      <div className="floral-text">
        <h2>Floral Design in a event planning company</h2>
        <p>
          Your ceremony & reception venues, your vision, your dress, your
          colours and anything else you would like to share with us. I am a Gold
          Coast and Brisbane.
        </p>

        <Button className="primary" />
      </div>

      <div className="floral-images">
        {pictures &&
          pictures.results.slice(0, 3).map((image, index) => {
            return (
              <div className="floral-image_container" key={image.id}>
                <img alt="floral" src={image.image} className="floral-img" />

                <h2 className="floral-total">
                  {index < 10 ? `0${index + 1}` : index}
                  <span>{`/${pictures.results.length}`}</span>
                </h2>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FloralDesign;
