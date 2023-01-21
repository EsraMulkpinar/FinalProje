import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { useHistory} from 'react-router-dom'
import { getTopRated } from '../../reducers/movieReducer'

const TopRatedMovieSwiper = () => {
  const dispatch = useDispatch()
  const { topRated } = useSelector((state) => state.movie)
  const history= useHistory();
  useEffect(() => {
    dispatch(getTopRated())
  }, [])

  if (topRated) 
  return (
    <div className="">
      <div className="flex justify-between items-center m-8 ">
        <button className="font-bold text-xl bg-[#0F172A] rounded-3xl px-5 py-2"
         onClick={() => {
            history.push('/Movies')
          }}>TOP RATED MOVİE</button>
    
      </div>
      {topRated && (
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
            1040: {
              slidesPerView: 6,
            },
          }}
          
          speed={2500}
          loop={false}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            paginationDisabledClass: false,
          }}
          modules={[Autoplay, Navigation]}
        >
          {topRated.map((movie, index) => {
            return (
              <div className="" key={index}>
                <SwiperSlide className="cursor-grab" key={index}>
                  <div className="container mx-auto  px-0.5">
                    <div className=" rounded-lg  bg-center ">
                      <div className="">
                        <img
                          className=" opacity-90   bg-slate-300 rounded-xl border-white"
                          src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        />
                        <div className="flex   items-center justify-start ml-2  z-10  font-bold ">
                          <div className="text-white   ">
                            <div className=" max-w-md  mt-3">
                              {movie.original_title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            )
          })}
        </Swiper>
      )}
    </div>
  )
}

export default TopRatedMovieSwiper
