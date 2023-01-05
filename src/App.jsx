import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import TopMovies from "./components/TopMovies";
import About from "./components/About";
import Home from "./components/Home";
import MovieItems from "./components/MovieItems";

function App() {
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
              <Route path="/movieItems/:id" element={<MovieItems />} />
            </Routes>
          </main>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
