import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to discuss an opportunity, feel free to reach out.</p>

      <div className={styles.contactDetails}>
        <p><strong>Email:</strong> nellurisrikanthchowdary007@gmail.com</p>
        <p><strong>Phone:</strong> +33 07 45 54 22 72</p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/srikanth-nelluri/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/srikanth-nelluri/
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/Srikanth515341"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Srikanth515341
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
