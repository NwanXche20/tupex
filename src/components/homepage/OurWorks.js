import React, { useState } from "react";
import { useFetcher } from "../../hooks/useFetcher";
import Loading from "../Loading";
import Error from "../Error";

const OurWorks = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { pictures, isLoading, error } = useFetcher("random", pageNumber);

  const handleNextPage = (side) => {
    if (side == "next" && pageNumber >= 1) {
      return setPageNumber(pageNumber + 1);
    } else if (side != "next" && pageNumber > 1) {
      return setPageNumber(pageNumber - 1);
    } else return null;
  };

  if (error) {
    return <Error />;
  }

  return (
    <div className="ourWorks">
      <h2 className="ourWorks-heading">Our Awesome Works</h2>

      <p>See what we shot</p>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="gallery">
          {pictures &&
            pictures.results.map((image, index) => {
              return (
                <img
                  alt={`floral-image-${index + 1}`}
                  src={image.image}
                  className="gallery-img"
                  key={image.id}
                />
              );
            })}
        </div>
      )}

      <div className="pagination-container">
        <div className="pagination" onClick={() => handleNextPage("prev")}>
          <div className="pagination-inner">
            <div className="pagination-text">{`< Prev`}</div>
            <div className="pagination-line"></div>
          </div>
        </div>

        <div className="pagination" onClick={() => handleNextPage("next")}>
          <div className="pagination-inner">
            <div className="pagination-line"></div>
            <div className="pagination-text">{`Next >`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
