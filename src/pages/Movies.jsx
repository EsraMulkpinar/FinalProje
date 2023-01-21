import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchMovies, getTopRated } from '../reducers/movieReducer'
import MovieCard from '../components/CardComponents/MovieCard'
import Loading from '../components/shared/Loading/Loading'

const Movies = () => {
  const dispatch = useDispatch()
  const { topRated, page, searchMovie } = useSelector((state) => state.movie)
  const [isLoading, setisLoading] = useState(true)
  const [searchValue, setsearchValue] = useState('')

  useEffect(() => {
    if (topRated) {
      setTimeout(() => {
        setisLoading(false)
      }, 2000)
    }
  }, [topRated])

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      if (searchValue.length >= 3) dispatch(getSearchMovies(searchValue))
      else dispatch(getTopRated(page))
    }, 1000)
    return () => {
      clearTimeout(searchTimeout)
    }
  }, [searchValue])

  useEffect(() => {
    setsearchValue('')
    dispatch(getTopRated(page))
  }, [])
  if (!isLoading && (topRated || searchMovie)) {
    return (
      <div className="mt-32">
        <div className="container mx-auto px-5">
          <div className="flex justify-center items-center my-8 ">
            <div className="font-bold text-xl">MOVIES</div>
          </div>
          <div className="w-full flex justify-center">
            <input
              className="text-black my-4 px-8 py-2 rounded-2xl"
              type="text"
              placeholder="Search Movie"
              value={searchValue}
              onChange={(e) => setsearchValue(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          {searchMovie
            ? searchMovie.map((movie, key) => {
                return (
                  <div key={key} className="">
                    <MovieCard movie={movie} />
                  </div>
                )
              })
            : topRated.map((movie, key) => {
                return (
                  <div key={key} className="">
                    <MovieCard movie={movie} />
                  </div>
                )
              })}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => dispatch(getTopRated(page))}
            className="bg-slate-900 px-16 py-4 my-10 rounded-lg mx-auto "
          >
            Load More
          </button>
        </div>
      </div>
    )
  }
  return <Loading />
}

export default Movies
