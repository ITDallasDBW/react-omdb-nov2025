import React from "react";

const LoadingMovies = () => {
  return (
    <>
      <div className="results">
        {new Array(6).fill(0).map((_, index) => (
          <div className="movie" key={index}>
            <div className="poster__wrapper">
              <div className="skeleton"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LoadingMovies;
{
  new Array(10).fill(0).map((_, index) => (
    <div className="movie" key={index}>
      <div className="poster__wrapper">
        <div className="poster skeleton"></div>
        <div className="movie__description skeleton"></div>
        <div className="skeleton"></div>
      </div>
    </div>
  ));
}

{
  /* {loadState ? (
          <div className="loading">
            <i className="fa-solid fa-gear" aria-hidden="true"></i>
          </div>
        ) : null} */
}
