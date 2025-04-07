import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.brand}>
          <h2>Srikanth.</h2>
          <p>
            Software Engineer focused on building full-stack web applications
            with clean code, performance, and scalability.
          </p>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h3>Connect</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/srikanth-nelluri/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Srikanth515341" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
          <p><FaPhone /> +33 07 45 54 22 72</p>
          <p><FaEnvelope /> nellurisrikanthchowdary007@gmail.com</p>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
