import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <h1>Hey, I'm <span>Srikanth</span>.</h1>
        <p>I’m a passionate software engineer who loves solving problems through clean code and scalable solutions.</p>
        <a href="#contact" className={styles.cta}>Work with Me</a>
      </div>
      <div className={styles.image}>
        <div className={styles.placeholder}></div>
      </div>
    </section>
  );
};

export default Hero;
