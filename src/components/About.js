import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.image}>
        <div className={styles.placeholder}></div>
      </div>
      <div className={styles.text}>
        <h2>About Me</h2>
        <p>
          As a full-stack developer with a strong foundation in software engineering, I bring a unique perspective to building secure, high-performance web applications. Through hands-on experience with modern technologies, I’ve developed meaningful applications that solve real-world problems.
        </p>
        <p>
          I help individuals and startups build scalable and maintainable applications, following clean code practices and responsive design standards. I enjoy turning ideas into functional, professional digital products.
        </p>
      </div>
    </section>
  );
};

export default About;
