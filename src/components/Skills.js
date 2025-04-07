import React from 'react';
import styles from '../styles/Skills.module.css';

const skills = [
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'MongoDB',
  'HTML5',
  'CSS3',
  'Git & GitHub',
  'AWS Basics'
];

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div className={styles.skillItem} key={index}>{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
