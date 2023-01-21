import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularTV, getSearchTV } from '../reducers/movieReducer'
import { useState } from 'react'
import TVCard from '../components/CardComponents/TVCard'
import Lottie from 'lottie-react'
import loading_icon from '../assets/icons/loading_icon.json'

const TVSeries = () => {
  const dispatch = useDispatch()
  const [isLoading, setisLoading] = useState(true)
  const [searchTV, setsearchTV] = useState('')
  const { popularTv, page, searchTV: searchTVState } = useSelector(
    (state) => state.movie,
  )
  useEffect(() => {
    if (popularTv) {
      setTimeout(() => {
        setisLoading(false)
      }, 2000)
    }
  }, [popularTv])
  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      if (searchTV.length >= 3) dispatch(getSearchTV(searchTV))
      else dispatch(getPopularTV(page))
    }, 1000)
    return () => {
      clearTimeout(searchTimeout)
    }
  }, [searchTV])

  useEffect(() => {
    setsearchTV('')
    dispatch(getPopularTV(page))
  }, [])
  if ((popularTv || searchTV) && !isLoading) {
    return (
      <div className="mt-36">
        <div className="container mx-auto px-5">
          <div className="flex justify-center items-center my-8  ">
            <div className="font-bold text-xl ">TV SERIES</div>
          </div>
          <div className="w-full flex justify-center">
            <input
              className="text-black my-4 px-8 py-2 rounded-2xl m-auto "
              type="text"
              placeholder="Search TV"
              value={searchTV}
              onChange={(e) => setsearchTV(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          {searchTVState
            ? searchTVState.map((movie, key) => {
                return (
                  <div key={key} className="">
                    <TVCard movie={movie} />
                  </div>
                )
              })
            : popularTv.map((movie, key) => {
                return (
                  <div key={key} className="">
                    <TVCard movie={movie} />
                  </div>
                )
              })}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => dispatch(getPopularTV(page))}
            className="bg-slate-900 px-16 py-4 my-10 rounded-lg mx-auto "
          >
            Load More
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className=" flex justify-center items-center  h-screen">
        <Lottie className="w-64 h-64 " animationData={loading_icon} loop />
      </div>
    )
  }
}

export default TVSeries
