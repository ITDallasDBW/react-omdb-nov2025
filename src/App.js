import './layout.css'
import './media.css'
import Home from "./pages/Home";
import Feature from "./pages/Feature"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faArrowUp, faLink, faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faArrowLeft,faHouse, faMagnifyingGlass, faArrowUp, faInstagram, faLinkedin, faTiktok, faYoutube);

function App() {
    useEffect(() => {
  const handleBeforeUnload = () => {
    sessionStorage.clear();
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, []);
  

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path=':id' element={<Feature />}></Route>
      </Routes>


    </div>
    </Router>
  );
}

export default App;

