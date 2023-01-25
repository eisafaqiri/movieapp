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
    <Container sx={{ mt: 15 }}>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          flexGrow: 1,
          backgroundColor: () => (theme.palette.mode === "dark" ? colors.primary[600] : "#fffefe"),
        }}
      >
        <Typography variant="h2">
          Welcome to the Movie API Application!
        </Typography>
        <Typography variant="body1" fontSize={16} mt={1}>
          This web application allows you to easily search for and learn about your favorite movies. It is built using
          {" "}
          <span style={{ color: "#7cc5d9" }}>React</span>
          , a popular JavaScript library for building user interfaces.
          <br />
          <br />
          With our app, you can search for movies by title and view detailed information about them, including the cast, release date, and plot summary. You can also explore the IMDb 250 Top Movies, a list of the highest-rated movies of all time according to the Internet Movie Database (IMDb).
          <br />
          <br />
          We use a variety of technologies to bring this app to life, including
          {" "}
          <span style={{ color: "#7249B7" }}>Redux/Toolkit</span>
          {" "}
          ,
          {" "}
          <span style={{ color: "#0280C7" }}>Material UI</span>
          {" "}
          and the Open Movie Database
          {" "}
          <span>OMDb API.</span>
        </Typography>
        <List>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
            mt: 2,
          }}
          >
            <ListItem dense sx={{ color: "#7cc5d9" }}>
              <img src={reactLogo} alt="React Logo" height="25" width="30" style={{ paddingRight: "3px" }} />
              React
            </ListItem>
            <ListItem dense sx={{ color: "#7249B7" }}>
              <img src={reduxLogo} alt="Redux/Toolkit Logo" height="25" width="30" style={{ paddingRight: "3px" }} />
              Redux/Toolkit
            </ListItem>
            <ListItem dense sx={{ color: "#0280C7" }}>
              <img src={muiLogo} alt="Material UI Logo" height="25" width="30" style={{ paddingRight: "3px" }} />
              Material UI
            </ListItem>
            <ListItem dense sx={{ color: colors.grey[100] }}>
              <img src={omdbLogo} alt="OMDb API Logo" height="25" width="30" style={{ paddingRight: "3px" }} />
              The Movie Database (OMDb) API
            </ListItem>
          </Box>
        </List>
        <Typography variant="body1" fontSize={16} mt={2}>
          Our application is built to make it easy for you to find the information you need about your favorite movies, quickly and easily. Thank you for choosing the Movie App!
        </Typography>
        <Typography variant="h3" mt={2}>
          Contributing
        </Typography>
        <Typography variant="body1" fontSize={16} mt={1}>
          If you would like to contribute to this project, please create a pull request with a detailed description of your changes.
          {" "}
          <a
            href="https://github.com/eisafaqiri/movieapp"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.blueAccent[300] }}
          >
            Repository_link
          </a>
        </Typography>
        <Typography variant="body1" fontSize={16} mt={1}>
          Developed by
          {" "}
          <a
            href="https://github.com/eisafaqiri"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.blueAccent[300] }}
          >
            Eisa Faqiri
          </a>
        </Typography>
      </Paper>
    </Container>
  );
}

export default About;
