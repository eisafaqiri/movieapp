import {
  Box,
  Button,
  Container, FormControl, InputLabel, List, ListItem, MenuItem, Select, Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { getData } from "../features/movie/movieSlice";
import { tokens } from "../theme";

function TopMovies() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const { topMovies } = useSelector((state) => state.movie);

  const [data, setData] = useState();
  const [sortBy, setSortedBy] = useState("ranking");

  useEffect(() => {
    dispatch(getData(topMovies));
    setData(topMovies.movies);
  }, [dispatch, topMovies]);

  const handleChnage = (e) => {
    setSortedBy(e.target.value);
  };

  const handleSort = () => {
    const sortedData = data.slice().sort((a, b) => {
      if (sortBy === "ranking") {
        return a.Rank - b.Rank;
      }
      if (sortBy === "imdbRate") {
        return b.imdbRating - a.imdbRating;
      }
      if (sortBy === "year") {
        return b.Year - a.Year;
      }
    });
    return setData(sortedData);
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
      }}
      >
        <Typography variant="h2">
          IMDb Top 250 Movies
        </Typography>
        <Box sx={{
          display: "flex",
          alignItems: "end",
          mt: { xs: 2, sm: 0 },
        }}
        >
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Select sort option</InputLabel>
            <Select
              labelId="selectOption"
              id="selectOption"
              value={sortBy}
              onChange={handleChnage}
              label="sortBy"
            >
              <MenuItem value="ranking">Ranking</MenuItem>
              <MenuItem value="imdbRate">IMDb Rating</MenuItem>
              <MenuItem value="year">Release Date</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={handleSort}
            variant="outlined"
            color="secondary"
            size="large"
            sx={{ width: 100, ml: 1.5 }}
          >
            Sort
          </Button>
        </Box>
      </Box>
      <Box sx={{
        display: "flex",
        alignItems: "end",
        justifyContent: "space-between",
        mt: 3,
        mb: 1,
      }}
      >
        <Typography variant="h5">
          Rank & Title
        </Typography>
        <Typography variant="h5">
          IMDb Rating
        </Typography>
      </Box>
      {data && data.map((item) => (
        <List
          key={item.imdbID}
          sx={{
            width: "100%",
            maxWidth: 1400,
            backgroundColor: colors.primary[500],
            mb: 1,
            borderRadius: 2,
          }}
        >
          <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box display="flex" alignItems="center">
              <img src={item.Poster} alt={item.Title} height="80" width="55" loading="lazy" />
              <Link to={`/moredetails/${item.imdbID}`} className="link" style={{ display: "flex", color: colors.blueAccent[300] }}>
                <Typography variant="h5" color={colors.grey[100]}>
                  {item.Rank}
                </Typography>
                <Typography variant="h5">
                  .
                  {" "}
                  {item.Title}
                  {" "}
                  {`(${item.Year})`}
                </Typography>
              </Link>
            </Box>
            <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <StarIcon sx={{ pb: 0.3, color: "#E7B81E" }} />
              {" "}
              {item.imdbRating}
            </Typography>
          </ListItem>
        </List>
      ))}
    </Container>
  );
}

export default TopMovies;
