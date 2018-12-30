import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  GridList,
  GridListTile
} from "@material-ui/core";
import ShowcaseItem from "./ShowcaseItem";

export interface IShowcaseRowProps extends WithStyles<typeof styles> {
  className?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "auto",
      overflowX: "scroll",
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "flex-start",
      flexWrap: "nowrap",
      marginLeft: "10px",
      marginRight: "10px"
    }
  });

class ShowcaseRowComponent extends React.Component<IShowcaseRowProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
      </div>
    );
  }
}

export default withStyles(styles)(ShowcaseRowComponent);
