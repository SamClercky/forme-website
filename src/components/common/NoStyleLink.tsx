import React from "react";
import { withStyles, createStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      background: "none",
      color: "inherit",
      textDecoration: "none"
    }
  });

function NoStyleLinkComponent(props: any) {
  return (
    <>
      {(props.normallink == true) ?
      <a
        href={props.to}
        className={`${props.classes.root} ${props.className}`}
        {...props}
      >
        {props.children}
      </a>
      :
      <Link
        to={props.to}
        className={`${props.classes.root} ${props.className}`}
        {...props}
      >
        {props.children}
      </Link>
      }
    </>
  );
}

export default withStyles(styles)(NoStyleLinkComponent);
