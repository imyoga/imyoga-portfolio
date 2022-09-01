import React from 'react';
import './ToTheTop.css';
import ScrollLink from './ScrollLink.js';

const ToTheTop = (props) => {
  return (
    <div className="to-the-top">
      <ScrollLink scrollToTop={1}>
        <div >^</div>
      </ScrollLink>
    </div>
  );
};

export default ToTheTop;
