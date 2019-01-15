import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import { Theme, createStyles, WithStyles, withStyles } from "@material-ui/core";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { connect } from "react-redux";
import { IAppState, IWebpage, initialState } from "./redux/initialState";
import Showcase from "./components/showcase/Showcase";
import ScrollToTop from "./components/common/ScrollToTop";

interface IAppProps extends WithStyles<typeof styles> {
  paginas?: IWebpage[];
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.dark
    },
    page: {
      width: "100%",
      minHeight: "90vh",
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
  _paginas =
    this.props.paginas != undefined ? this.props.paginas : initialState.paginas;

  _home = () => (
    <Home
      className={this.props.classes.page}
      linkList={this._paginas}
      paginas={this._paginas}
    />
  );
  _about = () => (
    <About
      className={this.props.classes.page}
      linkList={this._paginas}
      paginas={this._paginas}
    />
  );
  _contact = () => (
    <Contact
      className={this.props.classes.page}
      linkList={this._paginas}
      paginas={this._paginas}
    />
  );
  _showcase = () => (
    <Showcase
      className={this.props.classes.page}
      linkList={this._paginas}
      paginas={this._paginas}
    />
  );

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Router>
          <ScrollToTop>
            <Route
              path="/index.html"
              exact
              component={this._home}
            />
            <Route
              path="/index"
              exact
              component={this._home}
            />
            <Route
              path={this._paginas[0].url}
              exact
              component={this._home}
            />
            <Route
              path={this._paginas[1].url}
              exact
              component={this._showcase}
            />
            <Route
              path={this._paginas[2].url}
              exact
              component={this._about}
            />
            <Route
              path={this._paginas[3].url}
              exact
              component={this._contact}
            />
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState, props: IAppProps) => {
  return {
    paginas: state.paginas
  };
};

export default withStyles(styles)(connect(mapStateToProps)(App));
