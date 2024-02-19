import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    const imgPath = `${IMG_CDN_URL}${posterPath}`;
  return (
    <div className='w-40 pr-4 h-48'>
      <img src={imgPath} alt='movie poster' className='h-[100%]'/>
    </div>
  )
}

export default MovieCard
