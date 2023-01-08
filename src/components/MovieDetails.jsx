import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieDetails } from "../features/movie/movieSlice";

function MovieDetails() {
  const params = useParams();
  const movieId = params.id;

  const { movies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieDetails(movieId));
  }, [dispatch, movieId]);

  console.log(movies);
  return (
    <div>
      MovieDetails:
      {" "}
      {movieId}
    </div>
  );
}

export default MovieDetails;
