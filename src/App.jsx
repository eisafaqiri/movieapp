import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorModeContext, useMode } from "./theme";
import Navbar from "./components/layout/Navbar";
import { moreDetails } from "./features/movie/movieSlice";

function App() {
  const { movies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  dispatch(moreDetails("tt3896198"));
  console.log(movies);

  const [theme, colorMode] = useMode();
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Typography variant="h1">Movie API Application</Typography>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
