import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import styles from '../styles/Education.module.css';

const Education = () => {
  return (
    <section id="education" className={styles.educationSection}>
      
      <h2 className={styles.title}>Education</h2>

      <div className={styles.educationGrid}>
        
        {/* EPITA */}
        <div className={styles.card}>
          <FaGraduationCap className={styles.icon} />

          <h3 className={styles.degree}>
            MSc in Software Engineering
          </h3>

          <p className={styles.institution}>
            EPITA – School of Engineering and Computer Science
          </p>

          <p className={styles.location}>
            Paris, France | 2024 – 2026
          </p>

          <p className={styles.details}>
            Focused on software engineering, cloud computing, and distributed systems. 
            Gained hands-on experience in building scalable applications and understanding 
            system design, which supports end-to-end testing across UI, API, and database layers.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Education;