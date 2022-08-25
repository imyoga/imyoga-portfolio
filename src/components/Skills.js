import React from 'react';
import Image from './Image';

//Front End images
import javascript from '../images/javascript.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import html5 from '../images/html5.png';
import css from '../images/css.png';
import sass from '../images/sass.png';

//Back End images
import node from '../images/node.png';
import express from '../images/express.png';
import restfulapi from '../images/restfulapi.png';
import mysql from '../images/mysql.png';

//Tools images
import agile3 from '../images/agile3.png';
import git from '../images/git.png';
import module from '../images/module.png';
import npm from '../images/npm.png';
import aws from '../images/aws.png';

let frontEnd = [
  [javascript, 'JavaScript'],
  [react, 'React'],
  [redux, 'Redux'],
  [html5, 'HTML'],
  [css, 'CSS'],
  [sass, 'SASS'],
];

let backEnd = [
  [node, 'Node'],
  [express, 'Express'],
  [restfulapi, 'REST api'],
  [mysql, 'MySql'],
];

let tools = [
  [git, 'Git'],
  [agile3, 'Agile'],
  [module, 'Webpack'],
  [npm, 'Npm'],
  [aws, 'AWS'],
];
const Skills = () => {
  return (
    <div id="Skills" className="container-skills">
      <h2>Skills</h2>
      <ul>
        <li>
          <div>Front End</div>
        </li>
        {frontEnd.map((skill, index) => {
          return (
            <li key={index}>
              <Image imageName={skill[0]} imageLabel={skill[1]} />{' '}
            </li>
          );
        })}
      </ul>

      <ul>
        <li>
          <div>Back End</div>
          {backEnd.map((skill, index) => {
            return (
              <li key={index}>
                <Image imageName={skill[0]} imageLabel={skill[1]} />{' '}
              </li>
            );
          })}
        </li>
      </ul>

      <ul>
        <li>
          <div>Tools</div>
        </li>
        {tools.map((skill, index) => {
          return (
            <li key={index}>
              <Image imageName={skill[0]} imageLabel={skill[1]} />{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
