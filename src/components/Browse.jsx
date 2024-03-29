import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import Header from './shared/Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}
export default Browse;