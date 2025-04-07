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
          An enthusiastic and highly motivated full-stack developer with strong academic coursework at EPITA and hands-on experience in full-stack development.
          </p> 
          <p>I am currently seeking internship opportunities in full-stack development where I can apply my knowledge to solve technical and business challenges as a software engineer.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default About;
