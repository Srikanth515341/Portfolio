import React from 'react';

const ResumeButton = () => {
  return (
    <a
      href="/resume.pdf"
      download
      style={{
        backgroundColor: '#445b55',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '30px',
        textDecoration: 'none',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '20px',
      }}
    >
      Download Resume
    </a>
  );
};

export default ResumeButton;
