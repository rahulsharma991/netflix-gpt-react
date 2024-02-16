import React from 'react';
import { useSelector} from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
import '../scss/videoBackground.scss';

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movieId);
  
  return (
    <div className='video-bg-container'>
     <iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&rel=0&loop=1`}>
</iframe>
    </div>
  )
}

export default VideoBackground
