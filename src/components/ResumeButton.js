import React from 'react';

const ResumeButton = () => {
  return (
    <a
      href="/resume.pdf"
      download
      style={{
        background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
        color: '#fff',
        padding: '10px 22px',
        borderRadius: '30px',
        textDecoration: 'none',
        fontWeight: '600',
        display: 'inline-block',
        marginTop: '20px',
        fontSize: '0.95rem',
        transition: 'all 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 6px 20px rgba(56, 189, 248, 0.4)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = 'none';
      }}
    >
      Download Resume
    </a>
  );
};

export default ResumeButton;