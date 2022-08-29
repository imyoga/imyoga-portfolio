import React, { useState } from 'react';
import ScrollLink from './ScrollLink.js';
import { FaBars } from 'react-icons/fa';
// import home from '../images/home-icon.png';
import './Navbar.css';

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  function toggleSideBar() {
    setToggle(!toggle);
  }

  return (
    <div id={props.id} className="container-navbar">
      <div className="container-mobile-nav flex-item" onClick={toggleSideBar}>
        <div>Portfolio</div>
        <FaBars className="burger-icon" />
      </div>

      <div id={toggle ? 'modal-navlinks' : ''} className="container-navlinks flex-item">
        <div>
          <ScrollLink classes={`nav-link`} ontoggle={toggleSideBar} scrollToTop={1}>
            Home
          </ScrollLink>
        </div>
        <div>
          <ScrollLink scrollTo="Skills" classes={`nav-link`} ontoggle={toggleSideBar}>
            Skills
          </ScrollLink>
        </div>

        <div>
          <ScrollLink scrollTo="Projects" classes={`nav-link`} ontoggle={toggleSideBar}>
            Projects
          </ScrollLink>
        </div>

        <div>
          <ScrollLink scrollTo="About" classes={`nav-link`} ontoggle={toggleSideBar}>
            About
          </ScrollLink>
        </div>

        <div>
          <ScrollLink scrollTo="Contact" classes={`nav-link`} ontoggle={toggleSideBar}>
            Contact
          </ScrollLink>
        </div>

        <div>
          <a
            className="nav-link"
            href="https://drive.google.com/file/d/1uFhzlxC6hRraTQZX6a1g9CRqXq-toAzV/view"
            target={'blank'}
            onClick={toggleSideBar}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
