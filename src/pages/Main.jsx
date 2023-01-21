import PopularFilms from '../components/MovieComponents/PopularFilms'
import PopularTV from '../components/TVComponents/PopularTV'
import TopRatedMovie from '../components/MovieComponents/TopRatedMovie'
import TopRatedTV from '../components/TVComponents/TopRatedTV'
import Lottie from 'lottie-react'
import loading_icon from '../assets/icons/loading_icon.json'
import React, { useState } from 'react'
import { useEffect } from 'react'
import TrendingMovie from '../components/MovieComponents/TrendingMovie'
import TrendingMovieSwiper from '../components/MovieComponents/TrendingMovieSwiper'
import TopRatedMovieSwiper from '../components/MovieComponents/TopRatedMovieSwiper'
import TopRatedTVSwiper from '../components/TVComponents/TopRatedTVSwiper'
import TrendingTVSwiper from '../components/TVComponents/TrendingTVSwiper'
import MovieInfo from './MovieInfo'
import Loading from '../components/shared/Loading/Loading'

const Main = () => {
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setisLoading(false)
        
      }, 2000)
    }
  }, [isLoading])
  if (!isLoading) {
    return (
      <div>
        <PopularFilms />
        {/* <TopRatedMovie />
        <TopRatedTV />
        <PopularTV />
        <TrendingMovie /> */}
        <TrendingMovieSwiper />
        <TopRatedMovieSwiper />
        <TopRatedTVSwiper/>
        <TrendingTVSwiper/>
        
      </div>
    )
  } else {
     return  <Loading/>
  }
}

export default Main
