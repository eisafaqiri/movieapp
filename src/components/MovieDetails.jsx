import {
  Box,
  Chip,
  Container, Divider, Grid, Paper, Stack, Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieDetails } from "../features/movie/movieSlice";
import MoreDetailSkeleton from "./layout/MoreDetailSkeleton";

function MovieDetails() {
  const params = useParams();
  const movieId = params.id;

  const { isLoading, movies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieDetails(movieId));
  }, [dispatch, movieId]);

  if (isLoading) {
    return <MoreDetailSkeleton />;
  }

  const {
    Title, Year, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, Ratings, Metascore, imdbRating, imdbVotes, Type, BoxOffice,
  } = movies;

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
              alt={Title}
              src={Poster}
              style={{
                maxWidth: "100%", height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs>
              <Grid item xs>
                <Typography variant="h2" component="div">
                  {Title}
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  {Year}
                  {" "}
                  •
                  {" "}
                  {Runtime}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} container sx={{ alignItems: "end" }}>
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
                      {imdbRating}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {imdbVotes}
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
                      mt: 1,
                    }}
                  >
                    <Typography variant="h3" fontWeight="bold">
                      {Metascore}
                    </Typography>
                    <Typography variant="body2">
                      META SCORE
                    </Typography>
                  </Grid>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Grid
                  component="div"
                  sx={{
                    height: 42,
                    width: {
                      xs: 72,
                      sm: 130,
                    },

                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    ml: 0.5,
                    mt: { xs: 1.5, sm: 0 },
                  }}
                >
                  {React.Children.toArray(
                    Ratings && Ratings.slice(1, 2).map((rate) => (
                      <div>
                        <Typography variant="h3" fontWeight="bold">
                          {rate.Value}
                        </Typography>
                        <Typography variant="body2">
                          {rate.Source.toUpperCase()}
                        </Typography>
                      </div>
                    )),
                  )}
                </Grid>
              </Grid>
              <Grid item container>
                <Stack direction="row" mt={1.3} spacing={{ xs: 0, md: 1 }} flexWrap="wrap">
                  <Chip variant="outlined" label={Genre} color="secondary" sx={{ mb: 0.5 }} />
                  <Chip variant="outlined" label={Country} color="secondary" />
                </Stack>
              </Grid>
              <Grid mt={1}>
                <Typography variant="h6">
                  <span>Director:</span>
                  {" "}
                  {Director}
                </Typography>
                <Typography variant="h6">
                  <span>Writer:</span>
                  {" "}
                  {Writer}
                </Typography>
                <Typography variant="h6">
                  <span>Actors:</span>
                  {" "}
                  {Actors}
                </Typography>
                <Typography variant="h6">
                  <span>Awards:</span>
                  {" "}
                  {Awards}
                </Typography>
                <Typography variant="h6">
                  <span>Box Office:</span>
                  {" "}
                  {BoxOffice}
                </Typography>
                <Typography variant="h6">
                  <span>Plot:</span>
                  {" "}
                  {Plot}
                </Typography>
                <Typography variant="h6">
                  <span>Language:</span>
                  {" "}
                  {Language}
                </Typography>
                <Typography variant="h6">
                  <span>Type:</span>
                  {" "}
                  {Type}
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
