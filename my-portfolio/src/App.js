import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navigation';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Works from './components/works';



const App = () => {


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <Works />
              
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
