import React, { useEffect } from 'react';
import Typed from 'typed.js';

function Hero() {
  useEffect(() => {
    const typedElement = document.querySelector('.typed');

    if (typedElement) {
      const typed_strings = typedElement.getAttribute('data-typed-items').split(',');

      new Typed(typedElement, {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 200,
      });
    }
  }, []);

  return (
    <div id="hero" class="hero route bg-image" >
    <div id="hero" className="hero route bg-image">
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">I am Suhaib VP</h1>
            <p className="hero-subtitle">
              <span className="typed" data-typed-items="Software Developer, Software Engineer, App Developer,">
                Test
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
