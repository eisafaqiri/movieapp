import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../../topMovies.json";

const {
  VITE_API_URL,
  VITE_API_KEY,
} = import.meta.env;

const initialState = {
  movies: [],
  topMovies: [],
  isLoading: false,
};

export const searchMovies = createAsyncThunk("movie/searchMovie", async (searchString) => {
  const res = await fetch(`${VITE_API_URL}?s=${searchString}&apikey=${VITE_API_KEY}`);
  const result = await res.json();

  return result;
});

export const movieDetails = createAsyncThunk("movie/movieDetails", async (movieID) => {
  const res = await fetch(`${VITE_API_URL}?i=${movieID}&apikey=${VITE_API_KEY}`);
  const result = await res.json();

  return result;
});

export const getData = createAsyncThunk("data/getData", async () => data);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      })
      .addCase(movieDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(movieDetails.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.topMovies = action.payload;
      });
  },
});

// eslint-disable-next-line no-empty-pattern
export const { } = movieSlice.actions;

export default movieSlice.reducer;
