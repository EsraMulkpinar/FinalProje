import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {

  return (
   <Link to={`/MovieInfo/${movie.id}`}>
    <div className="w-72 cursor-pointer mt-4">
      <button>
        <img
          className=" rounded-3xl"
          src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
        />
        <div className="px-2 py-4">{movie.original_title}</div>
      </button>
    </div></Link>
  )
}

export default MovieCard
