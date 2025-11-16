import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

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

  const handleGoBack = () => {
    navigate(-1);
  };

  //This gets the data for the feature
  async function getFeature(id) {
    const { data } = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);

    const searchResults = data || {};
    setFeature(searchResults);
    setLoadFeature(false);
  }
  return (
    <>
      <Header />
      <div className="container">
        {/* <h1>Feature.jsx</h1> */}
        <Link to={"/"}>Home</Link>
        <button onClick={handleGoBack}>Go Back</button>

        {/* <h2>Show the Feature.jsx</h2> */}
        <div className="feature__wrapper">
          <div className="feature__img">
            <img
              src={feature.Poster}
              alt={feature.Title}
              className="feature__poster"
            />
          </div>
          <div className="feature__right">
            <p>Blake</p>
          </div>
          {/* <div className="feature__details">
            <h1>{feature.Title}</h1>
            <p>Year: {feature.Year}</p>
            <p>Plot: {feature.Plot}</p>
            <p>Director: {feature.Director}</p>
            <p>Actors: {feature.Actors}</p>
            <p>Rating: {feature.imdbRating}</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Feature;
