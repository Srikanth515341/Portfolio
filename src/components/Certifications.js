import React from 'react';
import styles from '../styles/Certifications.module.css';

const Certifications = () => {
  return (
    <section className={styles.certifications} id="certifications">
      <h2>Certifications</h2>

      <div className={styles.certItem}>
        <h3>Responsive Web Design</h3>
        <p>Issued by freeCodeCamp — Feb 2025</p>
      </div>

      <div className={styles.certItem}>
        <h3>JavaScript Algorithms and Data Structures</h3>
        <p>Issued by freeCodeCamp — Feb 2025</p>
      </div>

      <div className={styles.certItem}>
        <h3>Front End Development Libraries</h3>
        <p>Issued by freeCodeCamp — Feb 2025</p>
      </div>
    </section>
  );
};

export default Certifications;
