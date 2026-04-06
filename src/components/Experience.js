import React from 'react';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  return (
    <section className={styles.experienceSection} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.card}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.role}>Quality Assurance Engineer Intern</h3>
            <p className={styles.company}>Quandela — Massy, France</p>
          </div>
          <span className={styles.duration}>Jan 2026 – Present</span>
        </div>

        <p className={styles.summary}>
          Working on cloud-based and distributed systems, validating end-to-end
          workflows across APIs, simulators, and quantum processing
          environments. Focused on scalable automation, release validation, and
          improving software reliability across complex platform workflows.
        </p>

        <div className={styles.grid}>
          <div className={styles.block}>
            <h4>Platform & Validation</h4>
            <ul>
              <li>
                Designed and automated end-to-end validation workflows for the
                Quandela Cloud platform, covering authentication, job
                submission, scheduling, execution, and results verification.
              </li>
              <li>
                Validated workflows across simulators and quantum processing
                units (QPUs), improving confidence in platform reliability and
                release stability.
              </li>
              <li>
                Performed database validation using SQL to ensure consistency
                between API responses, job outputs, and distributed system state
                transitions.
              </li>
            </ul>
          </div>

          <div className={styles.block}>
            <h4>Automation & Testing</h4>
            <ul>
              <li>
                Built BDD-based API automation frameworks using Behave and
                Gherkin with reusable, data-driven test scenarios.
              </li>
              <li>
                Implemented schema validation, negative testing, and API
                contract testing with Schemathesis to improve coverage and catch
                regressions earlier.
              </li>
              <li>
                Applied observability-driven testing with structured logs and
                debugging techniques to improve defect traceability and reduce
                issue resolution time.
              </li>
            </ul>
          </div>

          <div className={styles.block}>
            <h4>CI/CD & Reporting</h4>
            <ul>
              <li>
                Integrated automated test suites into CI/CD pipelines using
                GitHub Actions and GitLab CI.
              </li>
              <li>
                Implemented Allure reporting with historical trends and failure
                diagnostics to improve debugging efficiency and release
                confidence.
              </li>
              <li>
                Supported reliable validation workflows across staging and
                production-like environments for release readiness.
              </li>
            </ul>
          </div>

          <div className={styles.block}>
            <h4>Collaboration</h4>
            <ul>
              <li>
                Collaborated with Cloud Platform, Quantum Applications, and
                Hardware teams to debug complex distributed system issues.
              </li>
              <li>
                Contributed to stable and reliable production workflows by
                aligning QA efforts with real platform behavior and release
                requirements.
              </li>
              <li>
                Combined automation, reporting, and debugging practices to
                support faster and higher-quality delivery cycles.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.techStack}>
          <span>Python</span>
          <span>Behave</span>
          <span>Gherkin</span>
          <span>Schemathesis</span>
          <span>SQL</span>
          <span>Allure</span>
          <span>GitHub Actions</span>
          <span>GitLab CI</span>
          <span>API Testing</span>
          <span>Distributed Systems</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;