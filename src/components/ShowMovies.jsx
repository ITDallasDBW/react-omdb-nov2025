import React, { useEffect, useState } from "react";
import Sorting from "./Sorting";

const ShowMovies = ({ moviesToShow = [], featureToLookup, getMoreResults }) => {
  // console.log(moviesToShow);

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
    // console.log(imdbID);
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
      {/* <h3>ShowMovies</h3> */}
      <h3>
        Showing {startSlice + 1} - {endSlice} of {moviesToShow.length}
      </h3>

      <button className="prevNext" onClick={pageDown}>
        Prev
      </button>
      <button className="prevNext" onClick={pageUp}>
        Next
      </button>
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
                  <h3 className="movie__title">
                    {index}. {movie.Title}
                  </h3>
                  <div className="movie__details">
                  <p>Released {movie.Year}</p>
                  <p>IMDB ID: {movie.imdbID}</p>
                  </div>
                  </div>
                </div>
              </div>
            ))}

      </div>
    </>
  );
};

export default ShowMovies;
