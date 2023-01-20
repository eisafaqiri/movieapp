import { useTheme } from "@emotion/react";
import {
  Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
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

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Container sx={{ mt: 10, pb: 8 }}>
      <Typography variant="h1" pb={2}>
        IMDb Top 10 Movies
      </Typography>

      <Grid
        container
        spacing={1.5}
      >
        {topMovies.movies && topMovies.movies.slice(0, 10).map((item) => (
          <Grid key={item.Title} item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                maxWidth: 345, height: "98%", backgroundColor: colors.primary[500],
              }}
            >
              <CardHeader
                sx={{ height: "15%" }}
                action={(
                  <Typography
                    variant="body1"
                    sx={{
                      color: colors.greenAccent[500],
                      display: "flex",
                      alignItems: "center",
                      gap: 0.1,
                      mt: 1,
                    }}
                  >
                    <StarIcon sx={{ pb: 0.3, color: "#E7B81E" }} />
                    {" "}
                    {item.imdbRating}
                  </Typography>
          )}
                title={item.Title}
                subheader={item.Released}
              />
              <CardMedia
                component="img"
                sx={{ height: 350, width: "100%" }}
                image={item.Poster}
                alt={item.Title}
              />
              <CardContent>
                <Typography variant="body1" fontSize={13} color={colors.grey[200]}>
                  {item.Plot.substring(0, 60)}
                  ...
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
    </Container>
  );
}

export default Home;
