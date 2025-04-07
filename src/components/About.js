import React from 'react';
import styles from '../styles/About.module.css';
import aboutImg from '../assets/about.jpg'; // Add your new image to assets and name it 'about.jpg'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={aboutImg} alt="About Me" />
        </div>
        <div className={styles.text}>
          <h2>About Me</h2>
          <p>
            I'm a passionate software engineer who loves solving problems through clean code and scalable solutions. I focus on building secure, high-performance applications with modern technologies.
          </p>
          <p>
            I enjoy turning ideas into meaningful digital products. My goal is to help individuals and startups bring their vision to life through functional, responsive, and professional web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
