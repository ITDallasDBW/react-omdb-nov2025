import React, { useEffect, useState } from "react";
import Sorting from "./Sorting";

const ShowMovies = ({
  loadState,
  moviesToShow = [],
  featureToLookup,
  getMoreResults,
}) => {
  const [endSlice, setEndSlice] = useState(6);
  const startSlice = Math.max(0, endSlice - 6);

  useEffect(() => {
    //Reload result set if it exists
    const savedSlice = sessionStorage.getItem("savedSlice");
    if (savedSlice) {
      setEndSlice(parseInt(savedSlice));
    }
  }, []);

  //Pass movie to feature. Save result set.
  function fetchFeature(imdbID) {
    sessionStorage.setItem("savedSlice", endSlice.toString());
    featureToLookup(imdbID);
  }

  //Click handlers
  function pageDown() {
    const newEndSlice = endSlice - 6;
    setEndSlice(newEndSlice);
  }

  function pageUp() {
    const newEndSlice = endSlice + 6;
    setEndSlice(newEndSlice);
    //Check data supply for display
    if (newEndSlice > moviesToShow.length) {
      getMoreResults();
    }
  }

  return (
    <>
      <h3 className="pageView">
        Showing {startSlice + 1} - {endSlice} of {moviesToShow.length} results
      </h3>
      <div className="pageButtons">
        <button
          className={endSlice <= 6 ? "prevNext grayed" : "prevNext"}
          onClick={pageDown}
          disabled={endSlice <= 6}
        >
          Show Previous
        </button>
        <button className="prevNext" onClick={pageUp}>
          Show Next
        </button>
      </div>
      {loadState ? (
        <>
          <div className="results">
            {new Array(6).fill(0).map((_, index) => (
              <div className="movie" key={index}>
                <div className="poster__wrapper skeleton"></div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="results">
          {moviesToShow.length > 0 &&
            moviesToShow.slice(startSlice, endSlice).map((movie, index) => (
              <div
                key={movie.imdbID}
                className="movie"
                onClick={() => fetchFeature(movie.imdbID)}
              >
                <div className="poster__wrapper">
                  <img className="poster" src={movie.Poster} alt="" />
                  <div className="coverPoster"></div>
                  <div className="movie__description">
                    <h3 className="movie__title">{movie.Title}</h3>
                    <div className="movie__details">
                      <p>Released {movie.Year}</p>
                      <p>IMDB ID: {movie.imdbID}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default ShowMovies;
