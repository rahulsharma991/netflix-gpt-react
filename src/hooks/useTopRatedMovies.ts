import { useEffect } from 'react';
import { API_HEADER } from '../utils/constants';
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from '../utils/redux-store/moviesSlice';
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_HEADER);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
    useEffect(() => {
        getTopRatedMovies();
    },[])
}

export default useTopRatedMovies
