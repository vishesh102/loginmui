import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#655DBB",
      light: "rgba(171,199,38,0.93)",
    },
    secondary: {
      main: "#f50057",
      light: "#337af7",
      contrastText: "rgba(0,0,0,0.87)",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "rgba(208,68,46,0.87)",
    },
  },
});

export default theme;
