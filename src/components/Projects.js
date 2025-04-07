import React from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>

      <div className={styles.projectCard}>
        <div className={styles.placeholder}></div>
        <div className={styles.projectInfo}>
          <h3>E-Commerce Platform (ShopSphere)</h3>
          <p>
            Built a full-stack e-commerce platform using React, Node.js, Express, and PostgreSQL.
            Implemented features like product listings, cart, checkout, admin panel, and user authentication.
          </p>
          <div className={styles.links}>
            <a href="https://github.com/Srikanth515341/ShopSphere" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.placeholder}></div>
        <div className={styles.projectInfo}>
          <h3>Project Management Tool (Trello Clone)</h3>
          <p>
            Developed a full-stack project management app inspired by Trello.
            Implemented boards, task tracking, and authentication using React, Node.js, Express, and MongoDB.
          </p>
          <div className={styles.links}>
            <a href="https://github.com/Srikanth515341" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
