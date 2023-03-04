import "./App.css";

import theme from "./Assets/Theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">App</div>
    </ThemeProvider>
  );
}

export default App;
