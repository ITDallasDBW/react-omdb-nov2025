import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputFn from "../components/InputFn";
import axios from "axios";
import ShowMovies from "../components/ShowMovies";
import Sorting from "../components/Sorting";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

//API CREDS
const BASE_URL = `https://www.omdbapi.com/`;
const API_KEY = "c393ced6";

const Home = () => {
  //USE STATE
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [featureId, setFeatureId] = useState("");
  const [featureToShow, setFeatureToShow] = useState({});
  const [prevMovies, setPrevMovies] = useState([]);
  //PageUp/Dn states
  const [allMovies, setAllMovies] = useState([]);
  const [omdbPage, setOmdbPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  //USE EFFECT
  // Load ONCE on mount only
  useEffect(() => {
    const savedMovies = sessionStorage.getItem("sessionMovies");
    const savedInput = sessionStorage.getItem("sessionInput");
    const savedPage = sessionStorage.getItem("sessionPage");

    if (savedMovies) {
      setAllMovies(JSON.parse(savedMovies));
      setInputValue(savedInput || "");
      setOmdbPage(parseInt(savedPage) || 1);
    }
  }, []); // Empty array - ONLY runs on mount

  // FUNCTIONS

  function resetHome() {
    window.location.reload();
  }
  //get search term, setLoading, search for movie,
  //await response, set response to allMovies, stop loading

  // console.log(`Before getMovies omdbPage ${omdbPage}`);
  async function getMovies(inputValue, pageNum) {
    setInputValue(inputValue);
    setLoading(true);
    const { data } = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${inputValue}&page=${pageNum}`
    );
    if (data.Response === "True" && data.Search) {
      if (pageNum === 1) {
        setAllMovies(data.Search); //First page - replace
      } else {
        setAllMovies((prev) => [...prev, ...data.Search]); //Add results to existing array
      }
      setOmdbPage(pageNum);
      setLoading(false);
    } else if (data.Response === "False") {
      setError(data.Error);
    }
  }

function handleError(serverMessage) {

  <h2>`${serverMessage}. Try again` </h2>
}

  //sends imdbID to address bar and redirects there
  function getFeatureId(featureId) {
    // console.log(featureId)
    sessionStorage.setItem("sessionMovies", JSON.stringify(allMovies));
    sessionStorage.setItem("sessionInput", inputValue);
    sessionStorage.setItem("sessionPage", omdbPage.toString());
    navigate(`${featureId}`);
  }

  //once data from API is sorted by select/sort box
  //sends sorted data (sorted) to be displayed
  const handleSort = (sorted) => {
    if (sorted) {
      setAllMovies(sorted);
    }
  };

  function getFirstMovies(inputValue) {
    setError(false);
    setLoading(true);
    sessionStorage.clear();
    getMovies(inputValue, 1);
  }
  function getNext() {
    getMovies(inputValue, omdbPage + 1);
  }

  return (
    <>
      <div className="outer">
        <div className="container">
          <Header />
          <section id="main">
            {/* BUILD SPINNING LOADER HERE */}
            {/* <h3>Home.js</h3> */}
            <section id="search">
              <InputFn error={error} onSubmit={getFirstMovies} />
            </section>
            {/* {error && (
              <h2 className="errCtr"><span className="glow">{error}</span> Try again.</h2>
            )} */}
            {/* {loading && (
              <div className="spinner">
                <FontAwesomeIcon icon={faGear} />
                <ShowMovies loadState={loading} />
              </div>
            )} */}

            {allMovies.length > 0 && (
              <>
                <section id="display__movies">
                  <Sorting
                    moviesToSort={allMovies}
                    inputValue={inputValue}
                    onSort={handleSort}
                  />

                  <ShowMovies
                    loadState={loading}
                    moviesToShow={allMovies}
                    featureToLookup={(lookupId) => {
                      getFeatureId(lookupId);
                    }}
                    getMoreResults={getNext}
                  />
                </section>
              </>
            )}
            {/* <section id="display__feature"></section> */}
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
