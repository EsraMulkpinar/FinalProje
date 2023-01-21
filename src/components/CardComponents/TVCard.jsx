import React from 'react'
import { Link } from 'react-router-dom'

const TVCard = ({movie}) => {
  return (
    <Link to={`/TVSeriesInfo/${movie.id}`}>
    <div className="w-72 cursor-pointer mt-4">
      <button>
        <img
          className=" rounded-3xl"
          src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
        />
        <div className="px-2 py-4">{movie.name}</div>
      </button>
    </div></Link>
  )
}

export default TVCard