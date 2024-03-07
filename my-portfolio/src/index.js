import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import Navbar from './components/navigation';
import Hero from './components/hero.js';
import About from './components/about.js';
import Services from './components/services.js';
import Count from './components/count.js';
import Works from './components/works.js';
import Blog from './components/blog.js';
import Contact from './components/contact.js';
import reportWebVitals from './reportWebVitals';
import '../src/assets/css/style.css';
import '../src/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../src/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../src/assets/vendor/glightbox/css/glightbox.min.css';
import '../src/assets/vendor/swiper/swiper-bundle.min.css';
import '../src/assets/js/main.js';
import Blog1Details from './components/blog1details.js';
import Blog2Details from './components/blog2Details.js';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
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
              <Count />
              <Works />
              <Blog />
              <Contact />
            </div>
          }
        />
        <Route 
        path='/blog1'
        element={
          <div>
            <Blog1Details />
          </div>
        }
        />
        <Route 
        path='/blog2'
        element={
          <div>
            <Blog2Details />
          </div>
        }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
