import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { filmGetir } from '../../reducers/movieReducer';
import MovieCard from '../CardComponents/MovieCard';
import { useEffect } from 'react';
import { useHistory} from 'react-router-dom';

const TrendingMovie = () => {
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movie);
    const history= useHistory();;
   
    useEffect(() => {
      dispatch(filmGetir());
    }, []);
    if (movies) {
      return (
        <div>
          <div className="container mx-auto px-5">
            <div className="flex justify-between items-center m-8 xl:mx-40">
              <div className="font-bold text-xl">TRENDING MOVİE</div>
              <button className="bg-slate-200 text-black rounded-lg px-5 py-2" onClick={() => {
              history.push("/Movies")
            }}>View More</button>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {movies.map((movie, key) => {
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
}

export default TrendingMovie