import React, { useEffect } from 'react';
import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { Link as ScrollLink, Element } from 'react-scroll';

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: '1s',
  },
});

const AnimatedSection = ({ sectionId, children }) => {
  useEffect(() => {
    // Add additional logic if needed when the section is scrolled into view
    console.log(`Section ${sectionId} is now in view!`);
  }, [sectionId]);

  return (
    <Element name={sectionId} className={css(styles.bounce)}>
      {children}
    </Element>
  );
};

export default AnimatedSection;
