import React from 'react'

import { SwiperSlide, Swiper } from 'swiper/react'
import MovieCard from '../CardComponents/MovieCard'

const MovieInfoSlider = ({ similarMovies }) => {
  console.log(similarMovies)
  return (
    <Swiper
      breakpoints={{
        576: {
          // width: 576,
          slidesPerView: 1,
        },
        768: {
          // width: 768,
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
        1366: {
          slidesPerView: 5,
        },
      }}
    >
      {similarMovies.map((movie, index) => {
        return (
          <SwiperSlide key={index}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MovieInfoSlider
