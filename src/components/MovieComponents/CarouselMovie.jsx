import React from "react";

const CarouselMovie = ({ movie }) => {
  // console.log(movie);

  return (
    <div>
      <div className=" rounded-lg w-full  bg-center ">
        <div className="flex  object-cover absolute items-center lg:mt-0  sm:mt-20 md:mx-32 mx-10  justify-start h-screen w-full z-10  font-bold ">
          <div className="text-white bg-transparent flex flex-col  ">
            <div className="lg:text-6xl md:max-w-lg max-w-xs text-md  ">{movie.original_title}</div>
            <div className="">Movie Score : {movie.vote_average}</div>
            <div className="md:flex justify-start lg:max-w-md max-w-lg hidden ">{movie.overview}</div>
          </div>
          {/* <div className="">
            <img className="lg:w-[25rem] lg:h-[25rem] w-0 h-0 rounded-3xl  xl:ml-36 " src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}/>
          </div> */}
        </div>

        <img
          className=" md:w-screen md:h-screen h-[30rem] opacity-50 relative bg-slate-300 "
          src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        />
      </div>
    </div>
  );
};

export default CarouselMovie;
