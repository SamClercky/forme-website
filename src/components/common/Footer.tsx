import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Paper
} from "@material-ui/core";
import logo from "../../logo.svg";

export interface IFooterComponentProps extends WithStyles<typeof styles> {
  className?: string;
}

const styles = (theme: Theme) => createStyles({
  paper: {
    backgroundColor: theme.palette.primary.dark
  }
});

class FooterComponentComponent extends React.Component<
  IFooterComponentProps,
  {}
> {
  public render() {
    const {classes} = this.props;
    return (
      <footer>
        <Paper className={classes.paper}>
          <img src={logo} />
        </Paper>
      </footer>
    );
  }
}

export default withStyles(styles)(FooterComponentComponent);
