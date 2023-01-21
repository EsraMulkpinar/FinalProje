import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filmGetir } from "../../reducers/movieReducer";
import CarouselMovie from "../MovieComponents/CarouselMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";

const PopularFilms = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);
 
  useEffect(() => {
    dispatch(filmGetir());
  }, []);

  return (
    <div className="">
      {movies && (
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={2500}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            paginationDisabledClass: false,
           
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {movies.map((movie, index) => {
            return (
              <SwiperSlide className="cursor-grab" key={index}>
                <CarouselMovie movie={movie} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default PopularFilms;
