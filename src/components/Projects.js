import React from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2>QA Automation Projects</h2>

      {/* Project 1 */}
      <div className={styles.projectCard}>
        <div className={styles.details}>
          <h3>Enterprise Banking Test Automation Framework</h3>

          <p>
            Built an enterprise-grade automation framework validating UI, API, and database layers for core banking workflows including authentication, account management, fund transfers, and transaction validation.
          </p>

          <p>
            <strong>Tech:</strong> Java, Selenium, REST Assured, JUnit, Cucumber (BDD), JDBC, Docker, Jenkins
          </p>

          <ul>
            <li>Implemented UI automation using Selenium with Page Object Model (POM)</li>
            <li>Automated API validation including schema validation, negative testing, and contract testing</li>
            <li>Performed database validation using SQL/JDBC for transactional integrity</li>
            <li>Integrated CI/CD pipelines with Jenkins and containerized execution using Docker</li>
            <li>Enabled data-driven testing and reporting with Allure</li>
          </ul>

          <a
            href="https://github.com/Srikanth515341/enterprise-banking-test-automation-framework.git"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className={styles.projectCard}>
        <div className={styles.details}>
          <h3>Backend API & Data Validation Automation Framework</h3>

          <p>
            Designed a backend-focused automation framework for validating REST APIs, authentication flows, and data integrity across microservices-based systems.
          </p>

          <p>
            <strong>Tech:</strong> Python, Pytest, Requests, Behave (BDD), PostgreSQL, Docker, Jenkins, JMeter
          </p>

          <ul>
            <li>Automated CRUD API validation with authentication and negative testing scenarios</li>
            <li>Performed database validation using SQL and psycopg2</li>
            <li>Implemented API contract testing and service mocking</li>
            <li>Enabled data-driven testing using JSON/CSV datasets</li>
            <li>Integrated CI/CD pipelines and generated reports using Allure</li>
          </ul>

          <a
            href="https://github.com/Srikanth515341/backend-api-data-validation-automation-framework.git"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div className={styles.projectCard}>
        <div className={styles.details}>
          <h3>Modern SaaS Web & API Automation Framework</h3>

          <p>
            Built a modern automation framework for SaaS applications to validate end-to-end workflows across UI, API, and database layers using Playwright and TypeScript.
          </p>

          <p>
            <strong>Tech:</strong> TypeScript, Playwright, Node.js, Cucumber, Postman, Newman, Docker, GitHub Actions
          </p>

          <ul>
            <li>Automated complete user journeys including authentication, cart, checkout, and order flows</li>
            <li>Implemented API testing using Playwright API and Postman collections</li>
            <li>Enabled network mocking and service virtualization for failure testing</li>
            <li>Integrated CI/CD pipelines with GitHub Actions</li>
            <li>Generated reports and execution insights using Allure</li>
          </ul>

          <a
            href="https://github.com/Srikanth515341/saas-ecommerce-automation-framework.git"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>

      {/* Optional Project */}
      <div className={styles.projectCard}>
        <div className={styles.details}>
          <h3>Full-Stack E-Commerce Platform (Supporting Project)</h3>

          <p>
            Developed a full-stack e-commerce application to understand real-world system design, enabling better end-to-end test scenario design across UI, API, and database layers.
          </p>

          <p>
            <strong>Tech:</strong> React.js, Node.js, Express.js, PostgreSQL
          </p>

          <a
            href="https://github.com/Srikanth515341/ecomart.git"
            target="_blank"
            rel="noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>

    </section>
  );
};

export default Projects;