import React from 'react';
import styles from '../styles/About.module.css';
import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        
        <div className={styles.image}>
          <img src={aboutImg} alt="QA Engineer" />
        </div>

        <div className={styles.text}>
          <h2>About Me</h2>

          <p>
            I am a Software Quality Assurance Engineer currently working on cloud-based and distributed systems, 
            with hands-on experience validating complex workflows across APIs, simulators, and production environments.
          </p>

          <p>
            At Quandela, I work on testing a cloud platform that provides access to quantum computing systems, where 
            I design and automate end-to-end validation workflows including authentication, job execution, scheduling, 
            and result verification across simulators and real hardware.
          </p>

          <p>
            My expertise lies in building scalable automation frameworks using Python, Java, and TypeScript, covering 
            UI, API, and database validation. I work with BDD (Gherkin/Behave), API contract testing (Schemathesis), 
            CI/CD pipelines, and observability-driven debugging to ensure reliable and high-quality software releases.
          </p>

          <p>
            With a strong full-stack background, I approach testing from an engineering perspective, focusing on 
            improving test coverage, reducing system failures, and enabling faster and more reliable release cycles.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;