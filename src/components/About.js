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
          Master’s student in Software Engineering at EPITA, Paris, specializing in full-stack development, cloud technologies (AWS), and modern software architecture.
          </p> 
          <p>Proficient in React.js, Node.js, PostgreSQL, MongoDB and Git, with hands-on experience building and deploying scalable web applications
          </p>
          <p>Actively seeking a full-time internship to apply my technical expertise, collaborate with dynamic teams, and contribute to impactful software solutions.</p>
         
        </div>
      </div>
    </section>
  );
};

export default About;
