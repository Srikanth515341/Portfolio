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
          <div className={styles.level}>Fluent</div>
        </div>
        <div className={styles.languageCard}>
          <div className={styles.circle}>FR</div>
          <p>French</p>
          <div className={styles.level}>Beginner (A2)</div>
        </div>
        <div className={styles.languageCard}>
          <div className={styles.circle}>TE</div>
          <p>Telugu</p>
          <div className={styles.level}>Native</div>
        </div>
        <div className={styles.languageCard}>
          <div className={styles.circle}>HI</div>
          <p>Hindi</p>
          <div className={styles.level}>Conversational</div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
