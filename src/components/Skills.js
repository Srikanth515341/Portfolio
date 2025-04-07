// src/components/Skills.js
import React from 'react';
import styles from '../styles/Skills.module.css';
import { FaCode, FaDatabase, FaCloud, FaLock, FaGitAlt, FaUsers } from 'react-icons/fa';

const skills = [
  {
    icon: <FaCode size={40} />,
    title: 'Programming & Scripting',
    description: 'Proficient in JavaScript, Python, SQL, HTML, CSS, and Bash.'
  },
  {
    icon: <FaDatabase size={40} />,
    title: 'Database Management',
    description: 'Experience with PostgreSQL and MongoDB for efficient data handling.'
  },
  {
    icon: <FaCloud size={40} />,
    title: 'Cloud Basics',
    description: 'Familiar with AWS services and deployment fundamentals.'
  },
  {
    icon: <FaLock size={40} />,
    title: 'Security Practices',
    description: 'Understanding of secure coding and authentication mechanisms.'
  },
  {
    icon: <FaGitAlt size={40} />,
    title: 'Version Control',
    description: 'Proficient with Git and GitHub for collaboration and CI/CD workflows.'
  },
  {
    icon: <FaUsers size={40} />,
    title: 'Soft Skills',
    description: 'Strong problem-solving, adaptability, and team collaboration.'
  }
];

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.title}>Skills</h2>
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
