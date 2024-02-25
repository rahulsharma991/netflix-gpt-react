import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux';
const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  if(!movies?.nowPlayingMovies) return;
  return (
    <div className='bg-black'>
      <div className='-mt-60 relative z-20 pl-8'>
      <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} key={movies.id}/>
      <MovieList title={'Popular'} movies={movies.popularMovies} key={movies.id}/>
      <MovieList title={'Top Rated'} movies={movies.topRatedMovies} key={movies.id}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
