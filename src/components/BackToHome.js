import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import './BackToHome.css';

const BackToHome = () => {
  return (
    <div className="container-back-to-home">
      <Link to="/">
        <div className="container-link">
          <AiOutlineHome className="icon-home" loading='lazy'/>
          <p>Back to home </p>
        </div>
      </Link>
    </div>
  );
};

export default BackToHome;
