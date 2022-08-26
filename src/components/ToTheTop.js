import React from 'react';
import './ToTheTop.css';
import ScrollLink from './ScrollLink.js';

const ToTheTop = () => {
  return (
    <ScrollLink scrollToTop={1}>
      {' '}
      <div className="to-the-top">^</div>{' '}
    </ScrollLink>
  );
};

export default ToTheTop;
