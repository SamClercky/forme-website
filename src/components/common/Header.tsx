import React from "react";
import {
  withStyles,
  createStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  WithStyles,
  Theme,
  Hidden
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import LinkBar from "./LinkBar";
import SideBar, { drawerWidth } from "./SideBar";

export interface IHeaderProps extends WithStyles<typeof styles> {
  title: string;
  linkList?: {
    url: string;
    label: string;
  }[];
}

interface IHeaderState {
  isDrawerOpen: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      flexGrow: 1,
      marginLeft: 0,
      width: "100%"
    },
    grow: {
      flexGrow: 1,
      textAlign: "left"
    },
    menuButton: {
      marginRight: 20,
      "@media (min-width: 600px)": {
        display: "none"
      }
    },
    sideBar: {
      "@media (min-width: 600px)": {
        display: "none"
      }
    }
  });

class HeaderComponent extends React.Component<IHeaderProps, IHeaderState> {
  state: IHeaderState = {
    isDrawerOpen: false
  };

  handleToggle = () => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  };

  // TODO: isDrawerUpdate reset after window changes
  render() {
    const { classes, title } = this.props;

    return (
      <>
        {/*<Hidden xsUp>*/}
          <SideBar
            linkList={[
              { label: "Hallo iedereen", url: "http://mijnwebsite.be" }
            ]}
            isOpen={this.state.isDrawerOpen}
            onClose={this.handleToggle}
            className={classes.sideBar}
          />
        {/*</Hidden>*/}
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            {/*<Hidden xsUp>*/}
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.handleToggle}
              >
                <Menu />
              </IconButton>
            {/*</Hidden>*/}
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {title}
            </Typography>
            <Hidden xsDown>
              <LinkBar
                linkList={[
                  { label: "Hallo iedereen", url: "http://mijnwebsite.be" }
                ]}
              />
            </Hidden>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default withStyles(styles)(HeaderComponent);
