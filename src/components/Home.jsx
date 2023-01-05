import { useTheme } from "@emotion/react";
import {
  Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography,
} from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../theme";
import data from "../topMovies.json";

function Home() {
  const [jsonData] = useState(data.movies);
  const movie = jsonData.slice(0, 10);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{
      flexGrow: 1, ml: 2, mr: 2, mt: 3,
    }}
    >
      <Typography variant="h1" mb="1rem">
        IMDb Top 10 Movies
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 3 }}
        columns={{
          xs: 12, sm: 12, md: 12, lg: 12, xl: 12,
        }}
      >
        {movie.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.Title}>
            <Card
              sx={{
                maxWidth: 345, height: "100%", mb: 3, backgroundColor: colors.primary[500],
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
                component="img"
                loading="lazy"
                height={500}
                image={item.Poster}
                alt={item.Title}
              />
              <CardContent>
                <Typography variant="body1" color={colors.grey[200]}>
                  {item.Plot}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
