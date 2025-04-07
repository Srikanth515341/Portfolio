import React from 'react';
import styles from '../styles/Languages.module.css';

const Languages = () => {
  return (
    <section className={styles.languages} id="languages">
      <h2>Languages</h2>
      <ul>
        <li>English — Fluent</li>
        <li>French — Beginner (A2)</li>
        <li>Telugu — Native</li>
        <li>Hindi — Conversational</li>
      </ul>
    </section>
  );
};

export default Languages;
