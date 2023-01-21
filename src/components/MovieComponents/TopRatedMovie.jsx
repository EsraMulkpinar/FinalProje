import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {  getTopRated } from "../../reducers/movieReducer";
import MovieCard from "../CardComponents/MovieCard";

const TopRatedMovie = () => {
  const dispatch = useDispatch();
  const { topRated } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(getTopRated());
  }, []);
  const history= useHistory();
  console.log(topRated);
  if (topRated) {
    return (
      <div>
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center m-8 xl:mx-40 ">
            <div className="font-bold text-xl">TOP RATED MOVİE</div>
            <button
              className="bg-slate-200 text-black rounded-lg px-5 py-2"
              onClick={() => {
                history.push("/Movies");
              }}
            >
              View More
            </button>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          {topRated.map((movie, key) => {
            if (key < 4) {
              return (
                <div key={key} className="">
                  <MovieCard movie={movie} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default TopRatedMovie;
