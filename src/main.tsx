import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./utils/AuthContext/AuthContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { client } from "./api/client.ts";

const theme = createTheme({
  fontFamily: "Barlow, sans-serif",
  primaryColor: "teal",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <MantineProvider theme={theme} defaultColorScheme="dark">
            <App />
          </MantineProvider>
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
