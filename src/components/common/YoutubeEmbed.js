import React from 'react';
import PropTypes from "prop-types";

const YoutubeEmbed = ({embedId}) => {
  
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };
  
  return (
    <div className="youtube-video">
       <iframe 
       className='yt-iframe'
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default YoutubeEmbed;