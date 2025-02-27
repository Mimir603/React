import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className={`portfolio-container ${loaded ? 'loaded' : ''}`}>
      <div className="triangle top-left">
        <Link to="/about"><span>About Me</span></Link> 
      </div>
      <div className="triangle top-right">
        <Link to="/contacts"><span>Contacts</span></Link> 
      </div>
      <div className="triangle bottom-left">
        <Link to="/portfolio"><span>Portfolio</span></Link>
      </div>
      <div className="triangle bottom-right">
        <Link to="/report"><span>Report</span></Link> 
      </div>
      <p className="center-text">
        Здравствуйте, меня зовут Артур! И это мое собственное портфолио, которое поможет вам со мной познакомиться.
      </p>
    </div>
  );
};

export default Portfolio;
