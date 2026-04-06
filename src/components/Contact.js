import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      
      <h2 className={styles.contactTitle}>Get In Touch</h2>

      <p className={styles.subtitle}>
        I'm currently open to QA Automation / SDET opportunities.  
        Feel free to reach out for collaborations, roles, or discussions.
      </p>

      <div className={styles.contactDetails}>

        {/* Email */}
        <div className={styles.contactBox}>
          <div className={styles.contactIcon}>
            <FaEnvelope size={26} />
          </div>
          <div>
            <strong>Email</strong>
            <p>
              <a href="mailto:nellurisrikanthchowdary007@gmail.com">
                nellurisrikanthchowdary007@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className={styles.contactBox}>
          <div className={styles.contactIcon}>
            <FaPhone size={26} />
          </div>
          <div>
            <strong>Phone</strong>
            <p>
              <a href="tel:+33745542272">
                +33 7 45 54 22 72
              </a>
            </p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className={styles.contactBox}>
          <div className={styles.contactIcon}>
            <FaLinkedin size={26} />
          </div>
          <div>
            <strong>LinkedIn</strong>
            <p>
              <a 
                href="https://www.linkedin.com/in/srikanth-nelluri/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Profile →
              </a>
            </p>
          </div>
        </div>

        {/* GitHub */}
        <div className={styles.contactBox}>
          <div className={styles.contactIcon}>
            <FaGithub size={26} />
          </div>
          <div>
            <strong>GitHub</strong>
            <p>
              <a 
                href="https://github.com/Srikanth515341" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Projects →
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;