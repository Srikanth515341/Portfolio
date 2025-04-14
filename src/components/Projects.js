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
          Tech Stack: React.js, Node.js, Express.js, PostgreSQL, Context API, CSS Modules <br></br>
          ●Built a full-stack e-commerce platform with product listings, category filters, and search functionality. <br></br>
●Implemented a shopping cart with add, remove, quantity update, and clear-cart functionalities using Context API.<br></br>
●Integrated a checkout system with form validation to collect user details and process orders.<br></br>
●Designed a responsive and user-friendly interface using modular CSS for consistency across devices.
          </p>
          <a href="https://github.com/Srikanth515341/ShopSphere" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <div className={styles.projectCard}>
        <img src={trelloImg} alt="Project Management Tool" className={styles.image} />
        <div className={styles.details}>
          <h3>Project Management Tool (Trello Clone)</h3>
          <p>
          Tech Stack: React.js, Node.js, Express.js, MongoDB <br></br>
●Developed a project management tool for creating projects, managing tasks, and tracking progress. <br></br>
●Built a real-time task board with drag-and-drop functionality, filtering, and update/delete features. <br></br>
●Developed a scalable backend with Node.js, Express.js, and MongoDB, ensuring a responsive UI across devices.
          </p>
          <a href="https://github.com/Srikanth515341/Project-Management-Tool-Trello" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
