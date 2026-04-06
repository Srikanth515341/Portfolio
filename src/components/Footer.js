import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.topSection}>

        {/* Branding */}
        <div className={styles.brand}>
          <h2>Srikanth.</h2>
          <p>
            QA Automation Engineer focused on building scalable test frameworks,
            validating distributed systems, and ensuring reliable software delivery.
          </p>
        </div>

        {/* Navigation */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h3>Connect</h3>

          <div className={styles.socialIcons}>
            <a 
              href="https://www.linkedin.com/in/srikanth-nelluri/" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a 
              href="https://github.com/Srikanth515341" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>

          <p>
            <FaPhone /> +33 7 45 54 22 72
          </p>

          <p>
            <FaEnvelope /> nellurisrikanthchowdary007@gmail.com
          </p>

        </div>

      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Srikanth. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;