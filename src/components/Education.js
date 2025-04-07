import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import styles from '../styles/Education.module.css'; // ✅ Correct path

const Education = () => {
  return (
    <section id="education" className={styles.educationSection}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationGrid}>
        {/* EPITA */}
        <div className={styles.card}>
          <FaGraduationCap className={styles.icon} />
          <h3 className={styles.degree}>
            Master's in Computer Science – <br /> Software Engineering
          </h3>
          <p className={styles.institution}>EPITA School of Engineering and Computer Science</p>
          <p className={styles.location}>Paris, France</p>
          <p className={styles.details}>
            <strong>Key Courses:</strong> Software Engineering, Web Development, Cloud Fundamentals, CI/CD, System Architecture.
          </p>
        </div>

        {/* SR & BGNR College */}
        <div className={styles.card}>
          <FaGraduationCap className={styles.icon} />
          <h3 className={styles.degree}>B.Sc. in Computer Science</h3>
          <p className={styles.institution}>SR & BGNR Govt. College</p>
          <p className={styles.location}>Khammam, India</p>
          <p className={styles.details}>
            <strong>Key Courses:</strong> C, C++, Java, Python.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
