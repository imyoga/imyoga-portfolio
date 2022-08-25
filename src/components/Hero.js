import React from 'react';
import { ReactComponent as ImportedAvatar } from '../images/avatar.svg';


const Hero = () => {
  return (
    <div className="hero">
      <div >
        <h1>
          👋Hi, I'm <span className="name-heading">Yogesh Moradiya.</span>
        </h1>
        <h2>I build things for web.</h2>
      </div>

      <div><ImportedAvatar /></div>
    </div>
  );
};

export default Hero;
