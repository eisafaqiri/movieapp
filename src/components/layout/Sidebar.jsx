import Box from "@mui/material/Box";
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
  GitHub, Home, Info, Movie, SearchOutlined,
} from "@mui/icons-material";
import {
  Button,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  DrawerHeader, AppBar, Drawer, MaterialUISwitch,
} from "./sidebarMUIStyle";
import { ColorModeContext, tokens } from "../../theme";

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
  const [emptyInput, setEmptyInput] = useState(false);

  const handleInput = (e) => setInputValue(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setEmptyInput(true);

      return setTimeout(() => {
        setEmptyInput(false);
      }, 3000);
    }
    navigate(`/search?s=${inputValue}`);
    setEmptyInput(false);
    return setInputValue("");
  };

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: colors.primary[500],
          }}
        >
          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  ml: { xs: 0, sm: -0.3 },
                  padding: 0,
                  marginRight: { xs: 3, sm: 5 },
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" noWrap color={colors.grey[100]} sx={{ display: { xs: "none", sm: "block" }, fontSize: { xs: 16, md: 20 } }}>
                Movie API Aplication
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
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
                  label={!emptyInput ? "Find Movies..." : "Please fill the input"}
                  variant="filled"
                  fullWidth={true}
                  onChange={handleInput}
                  value={inputValue}
                  sx={{
                    width: {
                      xs: 180,
                      sm: 250,
                      md: 400,
                      lg: 500,
                      xl: 600,
                    },
                    backgroundColor: !emptyInput ? colors.blueAccent[500] : colors.redAccent[600],
                    borderRadius: 1,
                  }}
                  InputProps={{
                    style: {
                      height: "42px",
                      boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  onClick={handleForm}
                  variant="contained"
                  color="neutral"
                  sx={{
                    ml: 0.5,
                    height: "42px",
                    width: "17%",
                  }}
                >
                  Serach
                </Button>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ position: "relative" }}>
        <DrawerHeader>
          <Typography variant="h5" noWrap color={colors.grey[100]} sx={{ display: { xs: "block", sm: "none" } }}>
            Movie API Aplication
          </Typography>
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
        <FormGroup onChange={colorMode.toggleColorMode} sx={{ position: "absolute", bottom: 50 }}>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: { xs: 1, md: 1.4 } }} />}
            label={open ? "Switch mode" : " "}
          />
        </FormGroup>
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
          <FormControlLabel
            control={(
              <GitHub
                fontSize="large"
                sx={{
                  m: { xs: 1, md: 1 },
                  width: open ? 52 : 35,
                  height: 34,
                }}
              />
)}
            label={open ? "Github" : " "}
          />
        </a>
      </Drawer>
    </>
  );
}
