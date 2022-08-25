import React from 'react';
import ScrollLink from './ScrollLink.js';

const Footer = () => {
  return (
    <div id="Footer" className="container-footer">
      <div>
        <ScrollLink scrollToTop={1}>^</ScrollLink>
      </div>
      <div>
        <p>Handcrafted by me @ 2022</p>
        <p>
          Made with <span>React 18</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
