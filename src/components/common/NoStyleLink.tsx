import React, { ReactChild } from "react";
import { withStyles, createStyles, WithStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      background: "none",
      color: theme.palette.secondary.light,
      textDecoration: "none"
    }
  });

function NoStyleLinkComponent(props: any) {
  return (
    <Link
      to={props.to}
      className={`${props.classes.root} ${props.className}`}
      {...props}
    >
      {props.children}
    </Link>
  );
}

export default withStyles(styles)(NoStyleLinkComponent);
