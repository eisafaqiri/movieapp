import { Box, CssBaseline, ThemeProvider } from "@mui/material";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { ColorModeContext, useMode } from "./theme";
// import { moreDetails } from "./features/movie/movieSlice";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";

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
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <main className="content">
            <Topbar />
          </main>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
