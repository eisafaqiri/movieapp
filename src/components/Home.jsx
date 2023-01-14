import { useTheme } from "@emotion/react";
import {
  Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import { getData } from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();
  const { topMovies } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getData(topMovies));
  }, [dispatch, topMovies]);

  // const movie = topMovies.movies.slice(0, 10);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{
      flexGrow: 1, ml: 2, mr: 2,
    }}
    >
      <Typography variant="h1" mb="1rem">
        IMDb Top 10 Movies
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 3 }}
      >
        {topMovies.movies && topMovies.movies.slice(0, 10).map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.Title}>
            <Card
              sx={{
                maxWidth: 345, height: "92%", mb: 2.5, backgroundColor: colors.primary[500],
              }}
              key={item.Title}
            >
              <CardHeader
                action={(
                  <Typography variant="h6" color={colors.greenAccent[400]} ml="1px">
                    {item.imdbRating}
                  </Typography>
          )}
                title={item.Title}
                subheader={item.Released}
              />
              <CardMedia
                sx={{ objectFit: "scale-down" }}
                component="img"
                loading="lazy"
                height={200}
                image={item.Poster}
                alt={item.Title}
              />
              <CardContent>
                <Typography variant="body1" fontSize={13} color={colors.grey[200]}>
                  {item.Plot}
                </Typography>
                <Link to={`/moredetails/${item.imdbID}`} style={{ display: "flex", color: colors.blueAccent[300] }}>
                  <Typography variant="body1" fontSize={13}>
                    Read more
                  </Typography>
                  <KeyboardArrowRightIcon />
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
