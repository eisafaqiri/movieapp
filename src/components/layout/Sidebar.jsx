import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useContext, useState } from "react";
import {
  DarkModeOutlined,
  GitHub, Home, Info, LightModeOutlined, Movie, SearchOutlined,
} from "@mui/icons-material";
import {
  Button,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  // const [emptyInput, setEmptyInput] = useState(false);

  // const handleInput = (e) => setInputValue(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      // return setEmptyInput(true);
    }
    navigate(`/search?s=${inputValue}`);
    // setEmptyInput(false);
    return setInputValue("");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: colors.primary[500],
            display: "flex",
          }}
        >
          <Box display="flex">
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                ml: { xs: 0, sm: -0.3 },
                padding: 0,
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap color={colors.grey[100]} sx={{ display: { xs: "none", md: "block" } }}>
              Movie API Aplication
            </Typography>
          </Box>
          <Container
            maxWidth="sm"
          >
            <Box
              onSubmit={handleForm}
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                placeholder="Find Movies, TV Shows and more..."
                variant="outlined"
                sx={{ width: { xs: 150, sm: 300 } }}
                InputProps={{
                  style: {
                    height: "35px",
                    backgroundColor: colors.primary[400],
                    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                onClick={handleForm}
                variant="contained"
                sx={{
                  backgroundColor: colors.primary[400], color: colors.grey[100], ml: 0.3, height: "35px",
                }}
              >
                Serach
              </Button>
            </Box>
          </Container>
          <Box>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined />
              ) : (
                <LightModeOutlined />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ position: "relative" }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              value: "Home",
              icon: <Home />,
              link: "/",
            },
            {
              value: "250 Top",
              icon: <Movie />,
              link: "/topmovies",
            },
            {
              value: "About",
              icon: <Info />,
              link: "/about",
            },
          ].map((item) => (
            <ListItem key={item.value} disablePadding sx={{ display: "block" }}>
              <Link to={item.link} style={{ textDecoration: "none", color: colors.primary[100] }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.value} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <a
          href="https://github.com/eisafaqiri"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            textDecoration: "none",
            color: colors.grey[100],
            marginLeft: "15px",
          }}
        >
          <GitHub fontSize="large" />
        </a>
      </Drawer>
    </Box>
  );
}
