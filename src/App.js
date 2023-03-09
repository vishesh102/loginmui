import "./App.css";

import theme from "./Assets/Theme";
import { ThemeProvider } from "@emotion/react";
import MainIndex from "./Page/Main/MainIndex";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MainIndex />
      </div>
    </ThemeProvider>
  );
}

export default App;
