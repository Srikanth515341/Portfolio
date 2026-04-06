import React from 'react';
import styles from '../styles/Languages.module.css';

const Languages = () => {
  return (
    <section className={styles.languagesSection} id="languages">

      <h2 className={styles.languagesTitle}>Languages</h2>

      <div className={styles.languagesGrid}>

        <div className={styles.languageCard}>
          <div className={styles.circle}>EN</div>
          <p>English</p>
          <span className={styles.level}>Fluent</span>
        </div>

        <div className={styles.languageCard}>
          <div className={styles.circle}>FR</div>
          <p>French</p>
          <span className={styles.level}>Beginner (A2)</span>
        </div>

        <div className={styles.languageCard}>
          <div className={styles.circle}>TE</div>
          <p>Telugu</p>
          <span className={styles.level}>Native</span>
        </div>

        <div className={styles.languageCard}>
          <div className={styles.circle}>HI</div>
          <p>Hindi</p>
          <span className={styles.level}>Conversational</span>
        </div>

      </div>

    </section>
  );
};

export default Languages;