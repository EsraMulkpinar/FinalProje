import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MovieInfoSlider from '../components/MovieInfo/MovieInfoSlider'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import Loading from '../components/shared/Loading/Loading'
import avatarIcon from '../assets/icons/avatar-icon.json'
import Lottie from 'lottie-react'

import {
  getMovieCast,
  getMovieDetails,
  getMovieVideo,
  getReviewsMovies,
  getSimilarMovies,
} from '../reducers/movieReducer'
import { BiCameraMovie } from 'react-icons/bi'
import { MdLanguage } from 'react-icons/md'
const MovieInfo = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const {
    movieDetails,
    movieCast,
    movieVideo,
    similarMovies,
    reviewMovies,
  } = useSelector((state) => state.movie)

  useEffect(() => {
    dispatch(getMovieDetails(params.id))
    dispatch(getMovieCast(params.id))
    dispatch(getMovieVideo(params.id))
    dispatch(getSimilarMovies(params.id))
    dispatch(getReviewsMovies(params.id))
  }, [params.id])

  if (
    movieDetails &&
    movieCast &&
    movieVideo &&
    similarMovies &&
    reviewMovies
  ) {
    return (
      <div className="my-28">
        <div className="container mx-auto bg-[#0F172A] rounded-3xl py-5 px-10 ">
          <div className="text-3xl font-bold ">
            {movieDetails.original_title}
          </div>
          <div className="lg:flex  gap-4 items-start my-4">
            <div className="flex-1">
              <LiteYouTubeEmbed id={movieVideo.key} title="" />
            </div>
            <div className="flex-1">
              <div className="text-md my-2">
                <div className="">
                  IMDB:{movieDetails.vote_average.toFixed(1)}
                </div>
              </div>
              <div className="text-md my-2 flex row items-center">
                <div className="mb-1">
                  <BiCameraMovie />
                </div>
                {movieDetails.genres.map((genres, key) => {
                  return (
                    <div key={key} className="text-md mx-1">
                      {genres.name}
                    </div>
                  )
                })}
              </div>
              <div className="text-md my-4 max-w-3xl">
                {movieDetails.overview}
              </div>
              <div className="text-md my-2 flex row items-center">
                <div className="mb-1">
                  <MdLanguage />
                </div>
               <div className="mx-2"> {movieDetails.spoken_languages[0].name}</div>
              </div>
              <div className="text-md my-1 flex flex-row flex-wrap">
                <div>Movie Cast:</div>
                {movieCast.cast.map((cast, key) => {
                  if (key < 10) {
                    return (
                      <div key={key} className="text-md mx-1">
                        {cast.name}
                      </div>
                    )
                  }
                })}
              </div>
              {reviewMovies[0] && reviewMovies[0].author ? (
                <div className="mt-2">
                  <div className="flex row justify-start items-center">
                    <Lottie
                      className="w-10 h-10  "
                      animationData={avatarIcon}
                    />
                    <div className=" mx-2">
                      {reviewMovies[0].author} : "
                      {reviewMovies[0].content.split('.')[0]}"
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            
          </div>
        
          <MovieInfoSlider similarMovies={similarMovies} />
        </div>
      </div>
    )
  }
  return <Loading />
}

export default MovieInfo
