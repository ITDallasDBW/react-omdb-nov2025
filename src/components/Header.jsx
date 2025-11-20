import React from "react";
import logoPic from "../assets/wtmIcon.png";
import titlePic from "../assets/wtmTitle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  function resetHome() {
    window.location.reload();
  }
  return (
    <>
      <header>
        <div className="navbar">
            <a href="/" className="homeLink homeLink__anchor">
          <figure id="Home" onClick={resetHome}>
              <img src={logoPic} alt="" className="logo__img" />
          </figure>
          <span className="homeLink__logo--popper">Reset Form
            <FontAwesomeIcon icon={faArrowRotateRight} />
          </span>
            </a>
          <div className="navlinks">
            <a href="/" className="link__hover--effect link__wide">
              Home
            </a>
            <a href="https://www.imdb.com/" className="link__hover--effect link__wide">
              Vault
            </a>
            <a className="btn__contact no-cursor" >
              Contact
            </a>
          </div>
        </div>
        <figure>
          <img src={titlePic} alt="" className="title" />
        </figure>
      </header>
    </>
  );
};

export default Header;
