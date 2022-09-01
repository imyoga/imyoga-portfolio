import React from 'react';
import { Link } from 'react-scroll';
import * as Scroll from 'react-scroll';
import './ScrollLink.css';
import './Navbar.css';


const ScrollLink = (props) => {
  // console.log(props);

  function clickHandler() {
    console.log('clicked on scroll link');
    if (props.ontoggle) {
      props.ontoggle();
    }

    if (props.scrollToTop === 1) {
      Scroll.animateScroll.scrollToTop();
    }
  }

  return (
    <Link
      activeClass="active"
      className={props.classes}
      to={props.scrollTo === 'Hero' ? null : props.scrollTo}
      spy={true}
      smooth={true}
      offset={props.offset ?? -56}
      duration={500}
      onClick={clickHandler}
    >
      {props.children}
    </Link>
  );
};

export default ScrollLink;
