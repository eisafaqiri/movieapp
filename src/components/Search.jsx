import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../features/movie/movieSlice";

function Search() {
  const location = useLocation();
  const inputValue = new URLSearchParams(location.search).get("s");

  const { movies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMovies(inputValue));
  }, [dispatch, inputValue]);

  console.log(movies);

  return (
    <div>
      Input value:
      {" "}
      {inputValue}
    </div>
  );
}

export default Search;
