import React from 'react';
import { useSelector} from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movieId);
  
  return (
    <div>
     <iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="300"
  height="200"
  src={'https://www.youtube.com/embed/'+ trailerVideo?.key}>
</iframe>
    </div>
  )
}

export default VideoBackground
