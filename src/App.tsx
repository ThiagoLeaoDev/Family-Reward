import React from "react";
import { ThemeProvider } from "styled-components";
import { AdminRoutes } from "./routes/index";
import GlobalStyle from "./styles/globalStyles";
import { lightTheme } from "./global/styles/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AdminRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
