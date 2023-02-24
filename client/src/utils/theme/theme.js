import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import typography from "./typography";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2f8af5",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#06070A",
      paper: "#1A162C",
      card: "#262143",
    },
    error: {
      main: red.A400,
    },
    text: {
      secondary: "rgba(255, 255, 255, 0.6)",
    },
  },
  typography,
});

export default theme;
