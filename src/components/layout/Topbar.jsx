import { useTheme } from "@emotion/react";
import {
  DarkModeOutlined,
  LightModeOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  Box, IconButton, InputBase,
} from "@mui/material";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import { searchMovies } from "../../features/movie/movieSlice";
// import MovieItems from "../MovieItems";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const { movies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  // dispatch(searchMovies(inputValue));
  const [inputValue, setInputValue] = useState("");
  const { id } = useParams();
  console.log(id);

  const handelInput = (e) => setInputValue(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
    const formData = dispatch(searchMovies(inputValue));
    return (
      <Link to={{
        pathname: `/movieItems/${id}`,
        search: `formData=${encodeURIComponent(JSON.stringify(formData))}`,
      }}
      />
    );
  };
  console.log(movies);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Box />
      <Box
        sx={{
          display: "flex",
          backgroundColor: colors.primary[400],
          borderRadius: "3px",
        }}
      >
        <form onSubmit={handleForm} autoComplete="off">
          <InputBase
            id="input"
            name="input"
            onChange={handelInput}
            sx={{
              ml: 2,
              mt: 0.6,
              flex: 1,
              width: { sm: 240, md: 500, lg: 800 },
            }}
            placeholder="Search Movies..."
          />
        </form>
        {/* <MovieItems inputValue={inputValue} /> */}
        <IconButton onClick={handleForm}>
          <SearchOutlined />
        </IconButton>
      </Box>

      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
