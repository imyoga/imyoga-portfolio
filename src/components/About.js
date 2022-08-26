import React from 'react';
import './About.css'


const About = (props) => {
  return (
    <div id={props.id} className='container-about'>
    <h2>ABOUT</h2>
      <p>
        I’m a Web Developer specializing in building (and occasionally designing)
        exceptional digital experiences. Currently, I'm focused on building accessible,
        SEO-friendly and human-centred products with serverless providers like AWS.
      </p>
      <p>
        Since I took a leap and trained in modern web app development at Par Info-tech, I
        have been promoted to put my hands on more advanced projects, while bringing
        ambitious ideas and a positive attitude to every challenge.
      </p>

      <p>
        When I'm not coding, I'm usually going for a walk, trying out a new recipe, or
        reading spiritual content.
      </p>
    </div>
  );
};

export default About;
