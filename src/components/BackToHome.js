import React from 'react';
import { Link } from 'react-router-dom';
import home from '../images/home-icon.png';

const BackToHome = () => {
  return (
    <div>
      <p>
        Back to home{' '}
        <Link to={'/'}>
          <img src={home} alt="home-icon" />
        </Link>{' '}
      </p>
    </div>
  );
};

export default BackToHome;
