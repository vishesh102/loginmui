import "./App.css";

import theme from "./Assets/Theme";
import { ThemeProvider } from "@emotion/react";
import MainIndex from "./Page/Main/MainIndex";
import HeaderIndex from "./Page/Header/HeaderIndex";

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <HeaderIndex />
      <MainIndex />
    </div>
    // </ThemeProvider>
  );
}

export default App;
