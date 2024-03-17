import React from 'react';
import ReactDOM from 'react-dom/client';



import App from './App.js';
import './index.css';
// import Contact from './components/contact.js';
import reportWebVitals from './reportWebVitals';
import '../src/assets/css/style.css';
import '../src/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../src/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../src/assets/vendor/glightbox/css/glightbox.min.css';
import '../src/assets/vendor/swiper/swiper-bundle.min.css';
import '../src/assets/js/main.js';


const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
<App />
  </React.StrictMode>
);

reportWebVitals();
