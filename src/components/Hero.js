import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <h1>Hey, I'm <span>Srikanth</span>.</h1>
        <p>"On a mission to build, I bring ideas to life" — I help businesses and entrepreneurs create powerful digital experiences.</p>
        <a href="#contact" className={styles.cta}>Work with Me</a>
      </div>
      <div className={styles.image}>
        <div className={styles.placeholder}></div>
      </div>
    </section>
  );
};

export default Hero;
