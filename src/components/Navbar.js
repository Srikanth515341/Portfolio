// src/components/Navbar.js
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Portfolio.</div>
      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button className={styles.navBtn}>Web Development</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
