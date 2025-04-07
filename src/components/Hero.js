import React from 'react';
import styles from '../styles/Hero.module.css';
import heroImage from '../assets/hero.jpg'; // replace with your image name

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <h1>
          Hey, I'm <span>Srikanth</span>.
        </h1>
        <p>
          I'm a passionate software engineer who loves solving problems through clean code and scalable solutions.
        </p>
        <a href="#contact" className={styles.cta}>
          Work with Me
        </a>
      </div>
      <div className={styles.image}>
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
