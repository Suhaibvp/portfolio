import React, { useEffect } from 'react';
import Typed from 'typed.js';

function Hero() {
  useEffect(() => {
    const typedElement = document.querySelector('.typed');

    if (typedElement) {
      const typed_strings = typedElement.getAttribute('data-typed-items').split(',');

      const options = {
        strings: typed_strings,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000, // Adjust back delay to make typing more natural
        loop: true,
        loopCount: Infinity, // Set loopCount to Infinity for continuous looping
      };

      const typed = new Typed(typedElement, options);

      // Clear Typed instance when component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div id="hero" class="route bg-image" >
    <div  className="hero route bg-image">
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">I am Suhaib VP</h1>
            <p className="hero-subtitle">
              
              Software Engineer
              
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
