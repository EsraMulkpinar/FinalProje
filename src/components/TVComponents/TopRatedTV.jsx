import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom'
import { getTopRatedTV } from "../../reducers/movieReducer";
import TVCard from "../CardComponents/TVCard";
const TopRatedTV = () => {
  const dispatch = useDispatch();
  const { topRatedTv } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(getTopRatedTV());
  }, []);
  console.log(topRatedTv);
  const history= useHistory();;
  if (topRatedTv) {
    return (
      <div>
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center m-8 xl:mx-40 ">
            <div className="font-bold text-xl">TOP RATED TV</div>
            <button className="bg-slate-200 text-black rounded-lg px-5 py-2" onClick={() => {
              history.push("/TVSeries")
            }}>
              View More
            </button>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          {topRatedTv.map((movie, key) => {
            if (key < 4) {
              return (
                <div key={key} className="">
                  <TVCard movie={movie} />
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

export default TopRatedTV;
