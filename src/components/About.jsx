import {
  Box,
  Container, List, ListItem, Paper, Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import reactLogo from "../assets/react-icon.png";
import reduxLogo from "../assets/redux-logo.svg";
import muiLogo from "../assets/material-ui-logo.png";
import omdbLogo from "../assets/OMDB-API.png";
import { tokens } from "../theme";

function About() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Container>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          flexGrow: 1,
          backgroundColor: () => (theme.palette.mode === "dark" ? "#1A2027" : "#fffefe"),
        }}
      >
        <Typography variant="h2" textAlign="center">
          Welcome to the Movie API App
        </Typography>
        <Typography variant="body1" fontSize={16} mt={1}>
          A movie application that connects via an API and allows you to look up and read about movies. It is built using
          {" "}
          <span style={{ color: "#7cc5d9" }}>React</span>
          .
        </Typography>
        <List>
          <Typography variant="h3">
            Features
          </Typography>
          <ListItem dense sx={{ listStyle: "outside" }}>
            Search for movies by title
          </ListItem>
          <ListItem dense sx={{ listStyle: "outside" }}>
            View detailed information about a movie, including cast, release date, and plot summary
          </ListItem>
          <ListItem dense sx={{ listStyle: "outside" }}>
            Explore
            {" "}
            <span style={{ color: "#E7B81E", paddingLeft: "2px", paddingRight: "2px" }}>IMDb</span>
            {" "}
            250 Top Movies
          </ListItem>
          <Typography variant="h3">
            Technologies used
          </Typography>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 1,
          }}
          >
            <ListItem dense sx={{ color: "#7cc5d9" }}>
              <img src={reactLogo} alt="react icon" height="25" width="30" style={{ paddingRight: "3px" }} />
              React
            </ListItem>
            <ListItem dense sx={{ color: "#7249B7" }}>
              <img src={reduxLogo} alt="react icon" height="25" width="30" style={{ paddingRight: "3px" }} />
              Redux/Toolkit
            </ListItem>
            <ListItem dense sx={{ color: "#0280C7" }}>
              <img src={muiLogo} alt="react icon" height="25" width="30" style={{ paddingRight: "3px" }} />
              Material UI
            </ListItem>
            <ListItem dense sx={{ color: colors.grey[100] }}>
              <img src={omdbLogo} alt="react icon" height="25" width="30" style={{ paddingRight: "3px" }} />
              The Movie Database (OMDb) API
            </ListItem>
          </Box>
        </List>
        <Typography variant="h3">
          Contributing
        </Typography>
        <Typography variant="body1" mt={1}>
          This project is created by
          {" "}
          <a
            href="https://github.com/eisafaqiri"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.blueAccent[500] }}
          >
            Eisa Faqiri
          </a>
          <br />
          If you would like to contribute to this project, please create a pull request with a detailed description of your changes.
        </Typography>
      </Paper>
    </Container>
  );
}

export default About;
