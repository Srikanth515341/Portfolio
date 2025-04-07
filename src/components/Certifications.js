import React from 'react';
import styles from '../styles/Certifications.module.css'; // ✅ Correct path

const Certifications = () => {
  return (
    <section id="certifications" className={styles.certificationsSection}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.certificationsGrid}>
        {/* Certificate 1 */}
        <div className={styles.card}>
          <h3>Responsive Web Design</h3>
          <p>Issued by: freeCodeCamp — Feb 2025</p>
          <a href="https://www.freecodecamp.org/certification/fccb7033cc1-aa06-4752-a930-03bb4c7183c2/responsive-web-design" target="_blank" rel="noopener noreferrer">
            <button className={styles.viewButton}>View Certificate</button>
          </a>
        </div>

        {/* Certificate 2 */}
        <div className={styles.card}>
          <h3>JavaScript Algorithms and Data Structures</h3>
          <p>Issued by: freeCodeCamp — Feb 2025</p>
          <a href="https://www.freecodecamp.org/certification/fccb7033cc1-aa06-4752-a930-03bb4c7183c2/javascript-algorithms-and-data-structures-v8" target="_blank" rel="noopener noreferrer">
            <button className={styles.viewButton}>View Certificate</button>
          </a>
        </div>

        {/* Certificate 3 */}
        <div className={styles.card}>
          <h3>Front End Development Libraries</h3>
          <p>Issued by: freeCodeCamp — Feb 2025</p>
          <a href="https://www.freecodecamp.org/certification/fccb7033cc1-aa06-4752-a930-03bb4c7183c2/front-end-development-libraries" target="_blank" rel="noopener noreferrer">
            <button className={styles.viewButton}>View Certificate</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
