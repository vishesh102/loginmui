import React from "react";
import { createTheme } from "@mui/material/styles";

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
    // type: "dark",
    // primary: {
    //   main: "#f9f9f9",
    //   light: "rgba(171,199,38,0.93)",
    //   dark: "#045f8e",
    // },
    // secondary: {
    //   main: "#f50057",
    //   light: "#337af7",
    //   contrastText: "rgba(0,0,0,0.87)",
    // },
    // background: {
    //   default: "#ffffff",
    //   paper: "#ffffff",
    // },
    // text: {
    //   primary: "rgba(208,68,46,0.87)",
    //   disabled: "#696969",
    // },
  },
  // typography: {
  //   fontFamily: "Roboto",
  //   htmlFontSize: 13,
  //   fontSize: 13,

  // },
});

export default theme;
