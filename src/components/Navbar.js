import React, { useState } from 'react';
import ScrollLink from './ScrollLink.js';
import { FaBars } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  function toggleModal() {
    setToggle(!toggle);
  }

  return (
    <div id={props.id} className="container-navbar">
      <div className="container-mobile-nav flex-item" onClick={toggleModal}>
        <div>Portfolio</div>
        <FaBars className="burger-icon" />
      </div>

      <div id={toggle ? 'modal-navlinks' : ''} className="container-navlinks flex-item">
        <div>
          <ScrollLink
            scrollTo="Hero"
            classes={`nav-link`}
            ontoggle={toggleModal}
            scrollToTop={1}
          >
            Home
          </ScrollLink>
        </div>
        <div>
          <ScrollLink scrollTo="Skills" classes={`nav-link`} ontoggle={toggleModal}>
            Skills
          </ScrollLink>
        </div>

        <div>
          <ScrollLink scrollTo="Projects" classes={`nav-link`} ontoggle={toggleModal}>
            Projects
          </ScrollLink>
        </div>

        <div>
          <ScrollLink scrollTo="About" classes={`nav-link`} ontoggle={toggleModal}>
            About
          </ScrollLink>
        </div>

        <div>
          <ScrollLink scrollTo="Contact" classes={`nav-link`} ontoggle={toggleModal}>
            Contact
          </ScrollLink>
        </div>

        <div>
          <a
            className="nav-link"
            href="https://drive.google.com/file/d/1uFhzlxC6hRraTQZX6a1g9CRqXq-toAzV/view"
            target={'blank'}
            onClick={toggleModal}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
