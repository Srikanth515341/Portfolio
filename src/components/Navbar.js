import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Portfolio.</div>
      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><span className={styles.badge}>Web Development</span></li>
      </ul>
    </nav>
  );
};

export default Navbar;
