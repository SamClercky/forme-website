import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  IconButton,
  Paper,
  Tooltip
} from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { Link } from "react-router-dom";

export interface IGoToShowcaseArrowProps extends WithStyles<typeof styles> {
  className?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    roundPaper: {
      borderRadius: "100%"
    }
  });

class GoToShowcaseArrowComponent extends React.Component<
  IGoToShowcaseArrowProps,
  {}
> {
  public render() {
    const { classes } = this.props;
    return (
      <Link to="/showcase" className={this.props.className}>
        <Tooltip title="Ga naar de hele collectie">
          <Paper className={classes.roundPaper}>
            <IconButton component="div">
              <ArrowForwardIos />
            </IconButton>
          </Paper>
        </Tooltip>
      </Link>
    );
  }
}

export default withStyles(styles)(GoToShowcaseArrowComponent);
