import React from 'react';
import styles from '../styles/Skills.module.css';
import { FaCode, FaDatabase, FaCloud, FaBug, FaCogs, FaTools } from 'react-icons/fa';

const skills = [
  {
    icon: <FaBug size={40} />,
    title: 'Automation & Testing',
    description: (
      <>
        Selenium, Playwright, REST Assured, Pytest,
        <br />
        Cucumber (Gherkin), Behave
      </>
    )
  },
  {
    icon: <FaCogs size={40} />,
    title: 'API Testing',
    description: (
      <>
        Postman, Newman, Requests,
        <br />
        Schema Validation, Contract Testing (Schemathesis), Service Mocking
      </>
    )
  },
  {
    icon: <FaDatabase size={40} />,
    title: 'Database Validation',
    description: (
      <>
        SQL, JDBC, PostgreSQL, MongoDB
      </>
    )
  },
  {
    icon: <FaCode size={40} />,
    title: 'Programming',
    description: (
      <>
        Java, Python, JavaScript, TypeScript
      </>
    )
  },
  {
    icon: <FaCloud size={40} />,
    title: 'CI/CD & DevOps',
    description: (
      <>
        Jenkins, GitHub Actions, GitLab CI,
        <br />
        Docker
      </>
    )
  },
  {
    icon: <FaTools size={40} />,
    title: 'QA Practices',
    description: (
      <>
        Functional Testing, Regression Testing,
        <br />
        Test Case Design, Data-Driven Testing, BDD, Agile
      </>
    )
  }
];

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.title}>Technical Skills</h2>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;