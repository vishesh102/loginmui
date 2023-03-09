import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#14809E",
      light: "#3F3F3F",
    },
    secondary: {
      main: "#3F3F3F",
      light: "#337af7",
      contrastText: "rgba(0,0,0,0.87)",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#3F3F3F",
    },
    typography: {
      fontFamily: ["Roboto"],
      fontSize: 10,
    },
  },
});

export default theme;
