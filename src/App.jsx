import { Box, CssBaseline, ThemeProvider } from "@mui/material";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
// import { moreDetails } from "./features/movie/movieSlice";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import TopMovies from "./components/TopMovies";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  // const { movies } = useSelector((state) => state.movie);
  // const dispatch = useDispatch();
  // dispatch(moreDetails("tt3896198"));
  // console.log(movies);

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", overflowY: "hidden" }}>
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="topmovies" element={<TopMovies />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
