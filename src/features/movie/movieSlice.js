import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../../topMovies.json";

const {
  VITE_API_URL,
  VITE_API_KEY,
} = import.meta.env;

const initialState = {
  movies: [],
  topMovies: data,
  isLoading: false,
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
    getData: (state, action) => {
      state.topMovies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      });
  },
});

export const { getData } = movieSlice.actions;

export default movieSlice.reducer;
