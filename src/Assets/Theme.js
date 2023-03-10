import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { colors } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#045F8E",
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
      secondary: "#696969",
    },
  },
  // typography: {
  //   fontFamily: "Roboto",
  //   htmlFontSize: 13,
  //   fontSize: 13,

  // },
});

export default theme;
