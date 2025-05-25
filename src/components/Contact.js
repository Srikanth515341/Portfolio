import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/Contact.module.css'; // ✅ Correct path

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Contact Me</h2>
      <p>If you'd like to discuss an opportunity, feel free to reach out.</p>
      <div className={styles.contactDetails}>
        {/* Email */}
        <div className={styles.contactBox}>
          <div className={styles.contactIcon}>
            <FaEnvelope size={30} />
          </div>
          <div>
            <strong>Email:</strong>
            <p>nellurisrikanthchowdary007@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className={styles.contactBox}>
          <div className={styles.contactIcon}>
            <FaPhone size={30} />
          </div>
          <div>
            <strong>Phone:</strong>
            <p>+33 07 45 54 22 72</p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className={styles.contactBox}>
          <div className={styles.contactIcon}>
            <FaLinkedin size={30} />
          </div>
          <div>
            <strong>LinkedIn:</strong>
            <p>
              <a href="https://www.linkedin.com/in/srikanth-nelluri/" target="_blank" rel="noopener noreferrer">
                View LinkedIn Profile
              </a>
            </p>
          </div>
        </div>

        {/* GitHub */}
        <div className={styles.contactBox}>
          <div className={styles.contactIcon}>
            <FaGithub size={30} />
          </div>
          <div>
            <strong>GitHub:</strong>
            <p>
              <a href="https://github.com/Srikanth515341" target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
