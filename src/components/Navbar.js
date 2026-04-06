import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      
      {/* Logo */}
      <div className={styles.logo}>
        SRIKANTH <span>NELLURI</span>
      </div>

      {/* Links */}
      <ul className={styles.navLinks}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li> {/* ✅ NEW */}
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Actions */}
      <div className={styles.actions}>
        <a 
          href="https://github.com/Srikanth515341" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.githubBtn}
        >
          GitHub
        </a>
      </div>

    </nav>
  );
};

export default Navbar;