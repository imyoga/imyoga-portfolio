import React from 'react';
import { Link } from 'react-scroll';
import * as Scroll from 'react-scroll';

const ScrollLink = (props) => {
  return (
    <Link
      activeClass="active"
      className={props.classes}
      to={props.scrollTo}
      spy={true}
      smooth={true}
      offset={props.offset ?? 50}
      duration={500}
      onClick={props.scrollToTop === 1 ? () => Scroll.animateScroll.scrollToTop() : null}
    >
      {props.children}
    </Link>
  );
};

export default ScrollLink;
