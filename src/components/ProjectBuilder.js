import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';

const ProjectBuilder = (props) => {
  let project = props.project;

  return (
    <li>
      <div>
        <h3>{project.title}</h3>

        <ul>
          {project.technologies.map((technology, key) => {
            return <li key={key}>{technology}</li>;
          })}
        </ul>

        <div>Collobraters: {project.collobraters}</div>

        <p>{project.description}</p>

        <p>Note: {project.note}</p>

        <div>
        
        <a target="_blank" rel="noreferrer" href={project.links[1]}>
          {project.links[0]}
        </a>
        
        <a target="_blank" rel="noreferrer" href={project.links[3]}>
        {project.links[2]}
        
        </a>
        </div>
      </div>
      <div>
        <YoutubeEmbed embedId={project.embedId} />
      </div>
    </li>
  );
};

export default ProjectBuilder;
