import React, { useState } from "react";
import { useFetcher } from "../hooks/useFetcher";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Photos = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchItem, setSearchItem] = useState("man");
  const [inputtedText, setInputtedText] = useState("");

  const { pictures, isLoading, error } = useFetcher(searchItem, pageNumber);

  const handleNextPage = (side) => {
    if (side == "next" && pageNumber >= 1) {
      return setPageNumber(pageNumber + 1);
    } else if (side != "next" && pageNumber > 1) {
      return setPageNumber(pageNumber - 1);
    } else return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchItem(inputtedText);
  };

  if (error) {
    return <Error />;
  }

  return (
    <div className="container grid">
      <div className="ourWorks">
        <h2 className="ourWorks-heading">Our Awesome Works</h2>

        <p>See what we shot</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Search your preference.. Ex. man"
              className="form-input"
              onChange={(e) => setInputtedText(e.target.value)}
            />
            <button className="btn search-btn">
              <FaMagnifyingGlass /> Search
            </button>
          </div>
        </form>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="gallery">
            {pictures &&
              pictures.results.map((image, index) => {
                return (
                  <img
                    loading="lazy"
                    alt="floral"
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
              <div className="pagination-text">{`< Previous`}</div>
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
    </div>
  );
};

export default Photos;
