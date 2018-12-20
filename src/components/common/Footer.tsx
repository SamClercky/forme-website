import React from "react";
import {
  withStyles,
  createStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

export interface IHeaderProps {
  classes: {
    root: string;
    grow: string;
    menuButton: string;
  };
  title: string;
  linkList: {
    url: string;
    label: string;
  }[];
}

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    textAlign: "left"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class HeaderComponent extends React.Component<IHeaderProps, {}> {
  render() {
    const { classes, title } = this.props;

    return (
      <header className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {title}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default withStyles(styles)(HeaderComponent);
