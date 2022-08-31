import React from "react";
import './YoutubeEmbed.css';

const YoutubeEmbed = (props) => (
  <div className="embed-youtube">
    <iframe
      width={400}
      height={225}
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="iframe"
      loading="lazy"
    />
  </div>
);



export default YoutubeEmbed;