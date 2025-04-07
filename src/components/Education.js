import React from 'react';
import styles from '../styles/Education.module.css';

const Education = () => {
  return (
    <section className={styles.education} id="education">
      <h2>Education</h2>
      <div className={styles.educationItem}>
        <h3>EPITA – Paris, France</h3>
        <p>M.Sc. in Software Engineering (Feb 2024 – Feb 2026)</p>
        <p>Completed 3 semesters, currently seeking an internship.</p>
      </div>

      <div className={styles.educationItem}>
        <h3>SR & BGNR Govt. College – Khammam, India</h3>
        <p>B.Sc. in Computer Science (Completed Oct 2020)</p>
        <p>Grade: 8.56 / 10</p>
      </div>
    </section>
  );
};

export default Education;
