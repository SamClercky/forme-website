import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import Header from './components/common/Header'
import Home from "./components/home/Home"
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

interface IAppProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) => createStyles({
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
})

class App extends Component<IAppProps, {}> {
  _home = () => <Home className={this.props.classes.page} />

  render() {
    return (
      <div className={this.props.classes.root}>
        <Header title="Welkom" linkList={[
          { label: "Hallo iedereen", url: ""}
        ]} />
        <Router>
          <Route path="/" exact component={this._home} />
        </Router>
      </div>
    );
  }
}


export default withStyles(styles)(App);
