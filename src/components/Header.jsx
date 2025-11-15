import React from "react";
import logoPic from "../assets/wtmIcon.png";
import titlePic from "../assets/wtmTitle.png";

const Header = () => {
  function resetHome() {
    window.location.reload();
  }
  return (
    <>
      <header>
        <div className="navbar">
          <figure id="Home" onClick={resetHome}>
            <a href="/" className="homeLink">
              <img src={logoPic} alt="" className="logo__img" />
            </a>
          </figure>
          <div className="navlinks">
            <a href="/" className="link__hover--effect">
              Home
            </a>
            <a href="/Movie.jsx" className="link__hover--effect">
              To Movie Info
            </a>
            <a href="mailto" className="btn__contact">
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
