import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom'
import { getTopRatedTV } from "../../reducers/movieReducer";
import  { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";


const TopRatedTVSwiper = () => {
    const dispatch = useDispatch()
    const { topRatedTv } = useSelector((state) => state.movie)
    const history= useHistory();
    useEffect(() => {
      dispatch(getTopRatedTV())
    }, [])
  
    if (topRatedTv) 
    return (
        <div className="">
          <div className="flex justify-between items-center m-8 ">
            <button className="font-bold text-xl bg-[#0F172A] rounded-3xl px-5 py-2"
             onClick={() => {
                history.push('/Movies')
              }}>TOP RATED TV</button>
        
          </div>
          {topRatedTv && (
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
              {topRatedTv.map((movie, index) => {
                return (
                  <div className="" key={index}>
                    <SwiperSlide className="cursor-grab" key={index}>
                      <div className="container mx-auto  px-0.5">
                        <div className=" rounded-lg  bg-center ">
                          <div className="">
                            <img alt="#"
                              className=" opacity-90 object-cover  bg-slate-300 rounded-xl border-white"
                              src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            />
                            <div className="flex   items-center justify-start ml-2  z-10  font-bold ">
                              <div className="text-white   ">
                                <div className=" max-w-md  mt-3">
                                  {movie.name}
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

export default TopRatedTVSwiper