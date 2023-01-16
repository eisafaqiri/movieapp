import { useTheme } from "@emotion/react";
import {
  DarkModeOutlined,
  LightModeOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  Box, IconButton, TextField, Tooltip,
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ColorModeContext } from "../../theme";

function Topbar() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);

  const handleInput = (e) => setInputValue(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return setEmptyInput(true);
    }
    navigate(`/search?s=${inputValue.trim()}`);
    setEmptyInput(false);
    return setInputValue("");
  };

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        pr: 2,
      }}
    >
      <Box />
      <Box
        onSubmit={handleForm}
        component="form"
        sx={{
          display: "flex",
        }}
        noValidate
        autoComplete="off"
      >
        {!emptyInput ? (
          <TextField
            value={inputValue}
            onChange={handleInput}
            id="input-with-icon-textfield"
            label="Search Movie..."
            variant="standard"
            color="primary"
            sx={{
              width: { sm: 240, md: 500, lg: 800 },
            }}
          />
        ) : (
          <TextField
            error
            value={inputValue}
            onChange={handleInput}
            id="outlined-error-helper-text"
            label="Error"
            helperText="Please fill the input"
            variant="standard"
            sx={{
              width: { sm: 240, md: 500, lg: 800 },
            }}
          />
        )}
        <IconButton onClick={handleForm} sx={{ mt: 3 }}>
          <Tooltip title="serach">
            <SearchOutlined />
          </Tooltip>
        </IconButton>
      </Box>

      <Box>
        <IconButton onClick={colorMode.toggleColorMode} sx={{ mt: 3 }}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
