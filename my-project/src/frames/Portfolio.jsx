import React, { useEffect, useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className={`portfolio-container ${loaded ? 'loaded' : ''}`}>
      <div className="triangle top-left"><span>About Me</span></div>
      <div className="triangle top-right"><span>Contacts</span></div>
      <div className="triangle bottom-left"><span>Portfolio</span></div>
      <div className="triangle bottom-right"><span>Report</span></div>
      <p className="center-text">
        Здравствуйте, меня зовут Артур! И это мое собственное портфолио, которое поможет вам со мной познакомиться.
      </p>
    </div>
  );
};

export default Portfolio;
