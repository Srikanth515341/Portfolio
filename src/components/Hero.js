import React from 'react';
import styles from '../styles/Hero.module.css';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        
        <h1>
          Hi, I'm <span>Srikanth</span>.
        </h1>

        <h2 className={styles.title}>
          QA Automation Engineer | SDET | Cloud & Distributed Systems
        </h2>

        <p>
          I build scalable test automation frameworks to validate complex systems across UI, API, and database layers. 
          Currently working on cloud-based platforms, testing distributed workflows, simulators, and production-grade environments.
        </p>

        <div className={styles.buttons}>
          <a href="#contact" className={styles.cta}>
            Contact Me
          </a>

          <a 
            href="https://github.com/Srikanth515341" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            View GitHub
          </a>
        </div>

      </div>

      <div className={styles.image}>
        <img src={heroImage} alt="QA Automation Engineer" />
      </div>
    </section>
  );
};

export default Hero;