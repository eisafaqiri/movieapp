import {
  Box,
  Container, Divider, Grid, Paper, Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieDetails } from "../features/movie/movieSlice";

function MovieDetails() {
  const params = useParams();
  const movieId = params.id;

  const { movies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieDetails(movieId));
  }, [dispatch, movieId]);

  return (
    <Container sx={{ mt: 2 }}>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          flexGrow: 1,
          backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#1A2027" : "#fffefe"),
        }}
      >

        <Grid container spacing={2}>
          <Grid item>
            <img
              alt={movies.Title}
              src={movies.Poster}
              style={{
                maxWidth: "100%", height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs>
              <Grid item xs>
                <Typography variant="h2" component="div">
                  {movies.Title}
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  {movies.Year}
                  {" "}
                  •
                  {" "}
                  {movies.Runtime}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} container sx={{ alignItems: { xs: "start", lg: "end" } }}>
                <Box sx={{ display: "flex", alignItems: "end" }}>
                  <Grid
                    component="div"
                    container
                    sx={{
                      height: 65,
                      width: 83,
                      backgroundColor: "#E7B81E",
                      color: "#000001",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: 1,
                    }}
                  >
                    <Typography variant="h3" fontWeight="bold">
                      {movies.imdbRating}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {movies.imdbVotes}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      FROM USERS
                    </Typography>
                  </Grid>
                  <Grid
                    component="div"
                    sx={{
                      height: 42,
                      width: 83,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: 1,
                      mt: 1,
                    }}
                  >
                    <Typography variant="h3" fontWeight="bold">
                      {movies.Metascore}
                    </Typography>
                    <Typography variant="body2">
                      META SCORE
                    </Typography>
                  </Grid>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ display: "flex", flexWrap: { xs: "wrap", sm: "nowrap" } }}>
                  {React.Children.toArray(
                    movies.Ratings && movies.Ratings.map((rate) => (
                      <Grid
                        component="div"
                        sx={{
                          height: 42,
                          width: {
                            xs: 70,
                            sm: 70,
                            md: 80,
                            lg: 130,
                          },
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                          mt: 1,
                          ml: 1,
                        }}
                      >
                        <Typography variant="h3" fontWeight="bold">
                          {rate.Value.split(1)}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: 10 } }}>
                          {rate.Source}
                        </Typography>
                      </Grid>
                    )),
                  )}
                </Box>
              </Grid>
              <Grid item container>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Director:
                  {" "}
                  {movies.Director}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default MovieDetails;
