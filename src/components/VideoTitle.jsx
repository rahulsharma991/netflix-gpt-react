import React from 'react';
import '../scss/videoTitle.scss';

const VideoTitle = ({title,description}) => {
    console.log(title,description)
  return (
    <div className='video-title-container'>
        <h4 className='video-title'>{title}</h4>
        <p className='video-description'>{description}</p>
        <div className='video-action-btn-container'>
            <button className='video-play-btn'>Play</button>
            <button className='video-more-info-btn'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
