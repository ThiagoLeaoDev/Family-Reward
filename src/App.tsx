import React from "react";
import { ThemeProvider } from "styled-components";

import { DefaultRoutes } from "./routes/default";

import { AuthProvider } from "./hooks/auth";

import GlobalStyle from "./styles/globalStyles";
import { lightTheme } from "./global/styles/theme";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={lightTheme}>
        <DefaultRoutes />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
