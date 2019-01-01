import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import { Theme, createStyles, WithStyles, withStyles } from "@material-ui/core";
import { resources } from "./resources";
import About from "./components/about/About";

interface IAppProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.dark
    },
    page: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      margin: "5px"
    },
    header: {
      position: "absolute",
      zIndex: 200
    },
    [theme.breakpoints.up("sm")]: {
      page: {
        width: "80%"
      }
    },
    [theme.breakpoints.down("sm")]: {
      page: {
        width: "100%"
      }
    }
  });

class App extends Component<IAppProps, {}> {
  _home = () => (
    <Home className={this.props.classes.page} linkList={resources.paginas} />
  );
  _about = () => (
    <About className={this.props.classes.page} linkList={resources.paginas} />
  );

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Router>
          <>
            <Route
              path={resources.paginas[0].url}
              exact
              component={this._home}
            />
            <Route
              path={resources.paginas[1].url}
              exact
              component={this._about}
            />
          </>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
