import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import register from "./serviceWorker";
// import InitFirebase from "./firestore/InitFirebase";

// create theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: grey[50],
      light: grey[50],
      dark: grey[900],
      contrastText: grey[900],
    },
  },
  typography: {
    // htmlFontSize: 18,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// const f = new InitFirebase();
// f.getAll();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
register();
