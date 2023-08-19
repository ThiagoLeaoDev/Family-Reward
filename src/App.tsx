import React from "react";
import { ThemeProvider } from "styled-components";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { DefaultRoutes } from "./routes/default";

import { AuthProvider } from "./hooks/auth";

import GlobalStyle from "./styles/globalStyles";
import { lightTheme } from "./global/styles/theme";

function App() {
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId="679672176669-t2ot9gosh78vlc5epo76h4nmq7o2el49.apps.googleusercontent.com">
        <ThemeProvider theme={lightTheme}>
          <DefaultRoutes />
          <GlobalStyle />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </AuthProvider>
  );
}

export default App;
