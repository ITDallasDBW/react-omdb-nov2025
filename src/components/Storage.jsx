
  .outer {
    max-width: 750px;
  }
  #main {
    /* max-width: 750px; */
    width: 100%;
  }
  .results {
    justify-content: space-evenly;
  }
  .movie {
    width: 40%;
    height: auto;
  }
.feature__wrapper {
    max-width: 90%;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-evenly;
    padding: 16px;
    margin: 0;
}
.feature__img {
    /* width: 60%; */
}
.feature__right {
    width: ;
    margin-left: 16px;
}




























@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

* {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* line-height: 1.5; */
  text-decoration: none;
  list-style-type: none;
  /* scroll-behavior: smooth; */
}
/* NATIVES */
body {
  background-image: url("./assets/wtmBg.png");
  transition: all 300ms ease;
  font-size: 16px;
  color: white;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
header {
  height: 250px;
  width: 100%;
  max-width: 1200px;
  padding: 12px;
  /* display: flex;
  justify-content: center; */
  margin: 0 auto;
  /* border: 2px white solid; */
}
h1 {
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: 0.1em;
  font-size: 45px;
  max-width: 1000px;
  color: rgb(0, 0, 85);
}
h2 {
  font-size: 28px;
  line-height: 1.25;
}
h3 {
  font-size: 24px;
}
a {
  position: relative;
}
i:hover {
  opacity: 0.7;
}
figure {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* STRUCTURE, LAYOUT */

.no-cursor {
  cursor: not-allowed;
}
.glow {
  color: #f7c552;
}
.red {
  color: red;
}
.italic {
  font-style: italic;
  font-size: inherit;
}
.hidden {
  display: none;
}
section {
  padding: 0;
  /* border: 3px solid blue; */
}
.container {
  padding: 16px 0;
  /* border: 3px solid brown; */
  /* background-color: rgb(241, 232, 180); */
  min-height: calc(100vh - 300px - 100px);
}
.row {
  width: 100%;
  max-width: 1024px;
  padding: 0 24px;
  margin: 0 auto;
  /* border: 3px solid darkgreen; */
  position: relative;
}

/* HEAD AND NAV */

.navbar {
  width: 100%;
  padding: 16px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}
.logo__img {
  height: 100px;
}

/* LINKS AND BUTTONS */

.navlinks {
  color: #d99425;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 48px;
}
.link__hover--effect {
  color: #f0f0f5;
  margin: 0 16px;
  cursor: pointer;
}
.link__hover--effect::after {
  content: "";
  position: absolute;
  height: 3px;
  background-color: #f7c552;
  width: 0;
  bottom: -3px;
  right: 0;
  transition: all 300ms ease;
}
.link__hover--effect:hover:after {
  width: 100%;
  left: 0;
}
.btn__contact {
  border: 2px #f0f0f5 solid;
  background-color: #0b0c3f;
  color: #f0f0f5;
  border-radius: 25px;
  padding: 12px 40px;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-left: 16px;
}
.btn__contact:hover {
  background-color: #373a7d;
  color: #f7c552;
  border: 2px #f7c552 solid;
}

.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.search__wrapper {
  width: 100%;
  max-width: 600px;
  position: relative;
  margin-top: 8px;
}
.search__input {
  color: #1c1c1c;
  width: 100%;
  border-radius: 50px;
  height: 60px;
  font-size: 20px;
  padding-left: 20px;
  border: 2px #f7c552 solid;
  outline: none;
}
.search__input::placeholder {
  color: #373a7d;
}
 
/* MAIN RESULTS */

#main {
  display: flex;
  flex-direction: column;
}
.results__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}
.results__message {
  color: #f0f0f5;
  font-size: 36px;
}
#filter {
  background-color: #0b0c3f;
  color: #f0f0f5;
  font-size: 20px;
}
select {
  background: red;
}
select option:hover {
  background-color: #e1358f; /* Example highlight color */
}

/* RESULTS */

.results {
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.movie {
  background-color: #0b0c3f;
  width: calc(100% / 3);
  max-width: 300px;
  height: 450px;
  margin: 4px;
  padding: 24px;
  border: 3px #f7c552 solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}
.posterWrapper {
  display: flex;
  position: relative;
  max-width: 300px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* background-color: green; */
}
.coverPoster {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1c1d25;
  opacity: 0;
  transition: opacity 300ms ease;
}
.movie:hover .coverPoster {
  opacity: 0.75;
}
.movie:hover .movie__description {
  opacity: 1;
  transform: translateY(-50%);
}
.movie:hover .poster {
  filter: blur(2px);
  transform: scale(1.07);
}
/* .coverPoster img.poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
} */
.poster {
  width: 100%;
  position: relative;
  opacity: 1;
  transition: all 200ms ease;
}
.movie__description {
  position: absolute;
  background-color: rgba(0, 0, 85, 0.1);
  left: 0;
  top: 50%;
  transform: translateY(-100%);
  width: 100%;
  max-width: 250px;
  height: 100%;
  opacity: 0;
  /* color: #d99425; */
  font-style: italic;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  transition: transform 450ms, opacity 500ms ease;
}
.movie__title {
  font-size: 28px;
  margin: 12px;
  text-align: center;
  position: relative;
  color: #f7c552;
}
.movie__details {
  margin: 8px;
  text-align: center;
  font-size: 20px;
  color: #f7c552;
}


/* SHOWMOVIES */
.movie {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 16px;
}
.movie__elements {
  padding: 16px;
  border: 1px solid black;
  width: 250px;
}
.poster {
  width: 100px;
}
.prevNext {
  padding: 16px;
  margin: 16px;
}

/* FOOTER */

footer {
  width: 100%;
  max-width: 800px;
  height: 150px;
  /* background-color: rgba(0, 0, 0, 0.514); */
  color: #f0f0f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 48px;
  border: 1px red solid;
}
.footer__logo {
  height: 75px;
}
.footer__anchor {
  position: relative;
}
.footer__logo--popper {
  position: absolute;
  right: 0;
  top: 30px;
  font-weight: 700;
  opacity: 0;
  transition: all 300ms ease;
  color: #f0f0f5;
}
.footer__anchor:hover .footer__logo--popper {
  transform: translateX(40px);
  opacity: 1;
}
.footer__copy {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
}
.footer__social {
  font-size: 30px;
}
.fa-brands:hover {
  scale: 0.85;
}
.footer__social .fa-brands {
  margin: 0 8px;
  color: #f7c552;
  cursor: pointer;
}
.footer__social .fa-brands:active {
  color: #373a7d;
}

/* FONT AWESOME .FA */
/* .magGlass {
  color: green;
  background-color: red;
} */
/* .fa-magnifying-glass {
  background-color: yellow;
  color: red;
} */
.fa-magnifying-glass {
  display: flex;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 8px 20px 8px 8px;
  /* background-color: black; */
  color: #373a7d;
  font-size: 40px;
  transition: all 0.2s ease;
}
.fa-magnifying-glass:hover {
  color: #4c4f91;
  scale: 0.8;
}
.fa-magnifying-glass:active {
  color: #f7c552;
}
.fa-gear {
  font-size: 60px;
  animation: rotate 2000ms infinite linear;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* LOADING, MESSAGES */

.message-box__locator {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 60px;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(0, 0, 85);
}
.hide__spinner {
  display: none;
}

/* JS Messages */
.message-box {
  width: 50%;
  background-color: #0b3d63;
  border: 2px solid orange;
  color: orange;
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  transition: all 300ms ease-in-out;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 6px;
}

/* RESPONSIVENESS */
/* My phone... */
@media (max-width: 450px) {
  /* h1 {
    font-size: 30px !important;
  } */
  .message-box {
    width: 75%;
    font-size: 16px;
    top: 28px;
  }

  .results__wrapper {
    display: flex;
    flex-direction: column-reverse;
  }
  #filter {
    margin-bottom: 8px;
  }
}

/* SMALL PHONES */
@media (max-width: 576px) {
  .link__hover--effect {
    display: none;
  }
  .title {
    width: 90%;
  }
  /* h1 {
    font-size: 40px;
  } */
  .search__wrapper {
    max-width: 400px;
  }
  .search__input {
    height: 40px;
  }
  .fa-magnifying-glass {
    font-size: 25px;
  }
  .results__message {
    font-size: 24px;
  }
  #filter {
    font-size: 16px;
  }
  .results {
    justify-content: center;
  }
  .movie {
    width: 300px;
    margin: 16px;
  }
  footer {
    height: auto;
  }
  .footer__logo {
    height: 50px;
  }
  .footer__logo--img {
    height: 50px;
  }
  .footer__social {
    display: none;
  }
}

/* TABLETS, LARGE SMARTPHONES */
@media (max-width: 768px) {
  .link__hover-effect {
    display: none;
  }
  #filter {
    font-size: 16px;
  }
  .results {
    justify-content: space-around;
    padding-bottom: 8px;
  }
  .movie {
    width: 50%;
    margin: 16px 0;
  }
}

/* DESKTOP */
@media (max-width: 992px) {
  .results {
    justify-content: space-around;
  }
  #filter {
    font-size: 16px;
  }
  .movie {
    width: 300px;
    margin: 16px;
  }
}
