import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../features/movie/movieSlice";
import MovieItems from "./MovieItems";
import { tokens } from "../theme";
import LoadingSkeleton from "./layout/LoadingSkeleton";

function SearchMovie() {
  const location = useLocation();
  const inputValue = new URLSearchParams(location.search).get("s");

  const { movies, isLoading } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    dispatch(searchMovies(inputValue));
  }, [dispatch, inputValue]);

  const { Response, Search, totalResults } = movies;

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (Response === "False") {
    return (
      <Typography
        variant="h2"
        color={colors.redAccent[500]}
        sx={{
          display: "flex",
          justifyContent: "center",
          placeItems: "center",
          mt: 15,
        }}
      >
        Movie not found!
      </Typography>
    );
  }

  return (
    <MovieItems search={Search} totalResults={totalResults} colors={colors} />
  );
}

export default SearchMovie;
