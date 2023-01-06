import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../features/movie/movieSlice";
import MovieItems from "./MovieItems";

function SearchMovie() {
  const location = useLocation();
  const inputValue = new URLSearchParams(location.search).get("s");

  const { movies, isLoading } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMovies(inputValue));
  }, [dispatch, inputValue]);

  const { Search, totalResults } = movies;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Typography variant="h3" mb="1rem" ml="1rem">
        Total Results:
        {" "}
        {totalResults}
      </Typography>
      <MovieItems search={Search} />
    </>
  );
}

export default SearchMovie;
