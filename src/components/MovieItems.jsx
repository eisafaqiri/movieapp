// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { searchMovies } from "../features/movie/movieSlice";

import { useLocation } from "react-router-dom";

function MovieItems() {
  const location = useLocation();

  const formData = location.search.includes("formData")
    ? JSON.parse(decodeURIComponent(location.search.split("formData=")[1]))
    : {};

  return (
    <div>
      {formData}
    </div>
  );
}

export default MovieItems;
