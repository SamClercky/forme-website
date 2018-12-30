import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";

// create theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[900]
    },
    secondary: {
      main: grey[50],
      light: grey[50],
      dark: grey[900],
      contrastText: grey[900]
    }
  }
});

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
