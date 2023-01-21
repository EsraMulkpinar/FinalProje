import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../constants/axios";

export const filmGetir = createAsyncThunk("filmGetir", async () => {
  const { data } = await instance.get("/movie/popular");
  return data;
});
export const getTopRated = createAsyncThunk("getTopRated", async (page) => {
  const { data } = await instance.get("/movie/top_rated",{
    params:{
      page
    }
  });
  
  return data;
});
export const getPopularTV = createAsyncThunk("getPopularTV", async (page) => {
  const { data } = await instance.get("/tv/popular",{
    params:{
      page
    }
  });
  return data;
});
export const getTopRatedTV = createAsyncThunk("getTopRatedTV", async () => {
  const { data } = await instance.get("/tv/top_rated");
  return data;
});

export const getTVideo= createAsyncThunk("getTVideo",async (payload) => {
  const {data} = await instance.get(`/tv/${payload}/videos`)
  return data;
})

export const getMovieDetails = createAsyncThunk("getMovieDetails",async (payload) => {
  const {data} = await instance.get(`/movie/${payload}`)
  return data
})
export const getMovieVideo = createAsyncThunk("getMovieVideo",async (payload) => {
  const {data} = await instance.get(`/movie/${payload}/videos`)
  console.log(data);
  return data 
})
export const getMovieCast = createAsyncThunk("getMovieCast",async (payload) => {
  const {data} = await instance.get(`/movie/${payload}/credits`)
  return data 
})
export const getTVCast = createAsyncThunk("getTVCast",async (payload) => {
  const {data} = await instance.get(`/tv/${payload}/credits`)
  return data 
})

export const getSimilarMovies = createAsyncThunk("getSimilarMovies",async (payload) => {
  const {data} = await instance.get(`/movie/${payload}/similar`)
  return data 
})
export const getSimilarTV = createAsyncThunk("getSimilarTV",async (payload) => {
  const {data} = await instance.get(`/tv/${payload}/similar`)
  return data 
})
export const getSearchMovies = createAsyncThunk("getSearchMovies",async (query) => {
  const {data} = await instance.get(`/search/movie`,{
    params:{
      query
    }
  })
  return data 
})
export const getSearchTV = createAsyncThunk("getSearchTV",async (query) => {
  const {data} = await instance.get(`/search/tv`,{
    params:{
      query
    }
  })
  return data 
})
export const getReviewsMovies = createAsyncThunk("getReviewsMovies",async (payload) => {
  const {data} = await instance.get(`/movie/${payload}/reviews`)
  return data 
})
export const getReviewsTV = createAsyncThunk("getReviewsTV",async (payload) => {
  const {data} = await instance.get(`/tv/${payload}/reviews`)
  return data 
})
export const getTVDetails = createAsyncThunk("getTVDetails",async (payload) => {
  const {data} = await instance.get(`/tv/${payload}`)
  return data 
})



const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: null,
    trendingMovies: null,
    topRated: null,
    popularTv:null,
    page:1,
    topRatedTv:null,
    movieDetails:null,
    movieCast:null,
    movieVideo:null,
    similarMovies:null,
    searchMovie:null,
    reviewMovies:null,
    tvDetails:null,
    tvCast:null,
    tvVideo:null,
    reviewTV:null,
    similarTV:null,
    searchTV:null,
  },

  extraReducers: ({ addCase }) => {
    addCase(filmGetir.fulfilled, (state, action) => {
      state.movies = action.payload.results;
    });
    addCase(getTopRated.fulfilled, (state, action) => {
      state.searchMovie = null
      if(state.page>1 && state.topRated){
        state.topRated = [...state.topRated,...action.payload.results]
      }
      else{
        state.topRated = action.payload.results;
      }
      state.page = state.page + 1;
    });
    addCase(getPopularTV.fulfilled, (state, action) => {
      if(state.page>1 && state.popularTv){
        state.popularTv = [...state.popularTv,...action.payload.results]
      }
      else{
        state.popularTv = action.payload.results;
        
      }
      state.page = state.page + 1;
    });
    addCase(getTopRatedTV.fulfilled, (state, action) => {
      state.topRatedTv = action.payload.results;
    });

    addCase(getMovieDetails.pending,(state) => {
      state.movieDetails = null
    })
    addCase(getMovieDetails.fulfilled,(state,action) => {
      state.movieDetails = action.payload
    })
    addCase(getMovieCast.fulfilled,(state,action) => {
      state.movieCast = action.payload
    })
    addCase(getTVCast.fulfilled,(state,action) => {
      state.tvCast = action.payload
    })
    addCase(getMovieCast.pending,(state) => {
      state.movieCast = null
    })
    addCase(getMovieVideo.fulfilled, (state,action) => {
      
      state.movieVideo=action.payload.results.find(movie => movie.site === "YouTube")
    })
    addCase(getMovieVideo.pending,(state) => {
      state.movieVideo = null
    })
    addCase(getSimilarMovies.fulfilled, (state,action) => {
      state.similarMovies=action.payload.results
    })
    addCase(getSimilarTV.fulfilled, (state,action) => {
      state.similarTV=action.payload.results
    })
    addCase(getSearchMovies.fulfilled, (state,action) => {
      state.searchMovie = action.payload.results
    })
    addCase(getSearchTV.fulfilled, (state,action) => {
      state.searchTV = action.payload.results
      console.log(action.payload);
    })
    addCase(getReviewsMovies.fulfilled, (state,action) => {
      state.reviewMovies = action.payload.results
    })
    addCase(getReviewsTV.fulfilled, (state,action) => {
      state.reviewTV = action.payload.results
    })
    addCase(getTVDetails.fulfilled, (state,action) => {
      state.tvDetails = action.payload
    })

    addCase(getTVideo.fulfilled,(state,action) => {
      state.tvVideo =action.payload.results.find(movie => movie.site === "YouTube")
    })
    addCase(getTVideo.pending,(state) => {
      state.tvVideo =null
    })

  },
});

export default movieSlice.reducer;
