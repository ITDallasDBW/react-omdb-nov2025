import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

//API CREDS
const BASE_URL = `https://www.omdbapi.com/`;
const API_KEY = "c393ced6";

const Feature = ({ getFeature }) => {
  let navigate = useNavigate();
  // const location = useLocation();
  const { id } = useParams();
  const [feature, setFeature] = useState({});
  const [loadFeature, setLoadFeature] = useState(false);

  useEffect(() => {
    setLoadFeature(true);
    getFeature(id);
  }, []);

  function goHome() {
    sessionStorage.clear();
  }
  const handleGoBack = () => {
    navigate(-1);
  };

  //This gets the data for the feature
  async function getFeature(id) {
    const { data } = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);

    const searchResults = data;
    setFeature(searchResults);
    setLoadFeature(false);
  }
  return (
    <>
      <div className="outer">
        <div className="container">
          <Header />
          {/* <h1>Feature.jsx</h1> */}
          <div className="pageButtons">
            <button className="prevNext" onClick={goHome}>
              <Link to={"/"}>Home</Link>
            </button>
            <button className="prevNext" onClick={handleGoBack}>
              Back to Results
            </button>
          </div>
          {loadFeature ? (
            // <div className="spinner">
            //   <FontAwesomeIcon icon={faGear} />
            // </div>
            <div className="feature__wrapper skeleton poster">
              <div className="feature__img ">
                <img
                  // src={feature.Poster}
                  className="feature__poster "
                />
              </div>
              <div className="feature__right">
                <div className="feature__col">
                  <h1 className="glow skeleton"></h1>
                  <div className="split">
                    <p className="splitLeft skeleton">
                      Released {feature.Year}
                    </p>
                    <p className="skeleton">Rated {feature.Rated}</p>
                  </div>
                  <div className="feature__plot skeleton">
                    {feature.Plot}
                  </div>
                  <div className="feature__people skeleton">
                    <p>Directed by: {feature.Director}</p>
                    <p>Starring: {feature.Actors}</p>
                  </div>
                  <p className="feature__imdbRating skeleton">
                    IMDB Rating: {feature.imdbRating}
                  </p>
                  <div className="feature__etc"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="feature__wrapper">
              <div className="feature__img">
                <img
                  src={feature.Poster}
                  alt={feature.Title}
                  className="feature__poster"
                />
              </div>
              <div className="feature__right">
                <div className="feature__col">
                  <h1 className="glow">{feature.Title}</h1>
                  <div className="split">
                    <p className="splitLeft">Released {feature.Year}</p>
                    <p>Rated {feature.Rated}</p>
                  </div>
                  <div className="feature__plot">{feature.Plot}</div>
                  <div className="feature__people">
                    <p>Directed by: {feature.Director}</p>
                    <p>Starring: {feature.Actors}</p>
                  </div>
                  <p className="feature__imdbRating">
                    IMDB Rating: {feature.imdbRating}
                  </p>
                  <div className="feature__etc"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Feature;
