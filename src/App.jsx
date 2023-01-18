import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./components/layout/Sidebar";
import TopMovies from "./components/TopMovies";
import About from "./components/About";
import Home from "./components/Home";
import SearchMovie from "./components/SearchMovie";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", overflowY: "scroll" }}>
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/topmovies" element={<TopMovies />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<SearchMovie />} />
              <Route path="/moredetails/:id" element={<MovieDetails />} />
            </Routes>
          </main>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
