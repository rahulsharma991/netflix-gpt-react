import  { useEffect } from 'react';
import { API_HEADER } from '../utils/constants';
import {useDispatch} from 'react-redux';
import { addTrailerVideo } from '../utils/redux-store/moviesSlice';

const useMovieTrailer = (movieId:number) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_HEADER);
        const json = await data.json();
        const filteredData = json.results.filter((video:any) => video.type === 'Trailer');
        const trailer = filteredData.length? filteredData[0]: json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(() => {
        getMovieVideos();
    },[])
}

export default useMovieTrailer
