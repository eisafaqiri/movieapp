import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const {
  VITE_API_URL,
  VITE_API_KEY,
} = import.meta.env;

const initialState = {
  movies: [],
};

export const searchMovies = createAsyncThunk("movie/searchMovie", async (searchString) => {
  const res = await fetch(`${VITE_API_URL}?s=${searchString}&apikey=${VITE_API_KEY}`);
  const result = await res.json();

  return result;
});

export const moreDetails = createAsyncThunk("movie/moreDetails", async (movieID) => {
  const res = await fetch(`${VITE_API_URL}?i=${movieID}&apikey=${VITE_API_KEY}`);
  const result = await res.json();
  console.log(result);

  return result;
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {

  },
  extraReducers: {
    [searchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { } = movieSlice.actions;

export default movieSlice.reducer;
