import React from 'react';
import styles from '../styles/Projects.module.css';
import ecommerceImg from '../assets/ecommerce.png';
import trelloImg from '../assets/trello.png';

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>

      <div className={styles.projectCard}>
        <img src={ecommerceImg} alt="E-Commerce Platform" className={styles.image} />
        <div className={styles.details}>
          <h3>E-Commerce Platform (ShopSphere)</h3>
          <p>
            Built a full-stack e-commerce platform using React, Node.js, Express, and PostgreSQL.
            Implemented features like product listings, cart, checkout, admin panel, and user authentication.
          </p>
          <a href="https://github.com/Srikanth515341/ShopSphere" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <div className={styles.projectCard}>
        <img src={trelloImg} alt="Project Management Tool" className={styles.image} />
        <div className={styles.details}>
          <h3>Project Management Tool (Trello Clone)</h3>
          <p>
            Developed a full-stack project management app inspired by Trello.
            Implemented boards, task tracking, and authentication using React, Node.js, Express, and MongoDB.
          </p>
          <a href="https://github.com/Srikanth515341/Project-Management-Tool-Trello" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
