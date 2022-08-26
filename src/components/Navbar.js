import React from 'react';
import ScrollLink from './ScrollLink.js';
import home from '../images/home-icon.png';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <div id={props.id} className={`container-navbar`}>
      <ScrollLink classes={`nav-link flex-item home-icon-container`} scrollToTop={1}>
        <img className="home-icon" src={home} alt="home-icon" width={50} height={50} />
      </ScrollLink>

      <div className="flex-item container-navlinks">
      
        <div>
          <ScrollLink scrollTo="Skills" classes={`nav-link`} >
            Skills
          </ScrollLink>
        </div>

        <div>
          <ScrollLink scrollTo="Projects" classes={`nav-link`}>
            Projects
          </ScrollLink>
        </div>

        <div>
          <ScrollLink scrollTo="About" classes={`nav-link`}>
            About
          </ScrollLink>
        </div>        

        <div>
          <ScrollLink scrollTo="Contact" classes={`nav-link`}>
            Contact
          </ScrollLink>
        </div>

        <div>
          <a
            className="nav-link"
            href="https://drive.google.com/file/d/1uFhzlxC6hRraTQZX6a1g9CRqXq-toAzV/view"
            target={'blank'}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
