import React from "react";
import { ThemeProvider } from "styled-components";

import { AppRouter } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import GlobalStyle from "./styles/globalStyles";
import { lightTheme } from "./global/styles/theme";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={lightTheme}>
          <AppRouter />
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
