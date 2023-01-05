import { useTheme } from "@emotion/react";
import {
  DarkModeOutlined,
  LightModeOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  Box, IconButton, InputBase,
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    navigate(`/search?s=${inputValue}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Box />
      <Box
        sx={{
          display: "flex",
          backgroundColor: colors.primary[500],
          borderRadius: "3px",
        }}
      >
        <form onSubmit={handleForm} autoComplete="off">
          <InputBase
            value={inputValue}
            onChange={(e) => (setInputValue(e.target.value))}
            sx={{
              ml: 2,
              mt: 0.6,
              flex: 1,
              width: { sm: 240, md: 500, lg: 800 },
            }}
            placeholder="Search Movies..."
          />
        </form>
        <IconButton onClick={handleForm}>
          <SearchOutlined />
        </IconButton>
      </Box>

      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
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
