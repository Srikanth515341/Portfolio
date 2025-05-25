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
          Master’s student in Software Engineering at EPITA, Paris, with a strong focus on full-stack development, 
          scalable backend architecture, and cloud technologies. Proficient in building robust REST APIs and working 
          with modern databases like PostgreSQL and MongoDB.
          </p> 
          <p>I’m currently seeking a full-time internship where I can apply my technical skills to build impactful, 
          production-ready applications. I enjoy solving complex problems, writing clean and maintainable code, and collaborating with cross-functional teams in Agile environments.
          </p>
          <p>My goal is to grow as a full-stack engineer while contributing meaningfully to innovative software teams 
          through real-world challenges, continuous learning, and mentorship.</p>
         
        </div>
      </div>
    </section>
  );
};

export default About;
