import React from "react";
import {
  withStyles,
  createStyles,
  Button,
  WithStyles,
  Theme
} from "@material-ui/core";
import { Link } from "react-router-dom";
import NoStyleLink from "./NoStyleLink";
import { ILinkList } from "./Header";

export interface ILinkBarProps extends WithStyles<typeof styles> {
  linkList?: ILinkList[];
}

const styles = (theme: Theme) =>
  createStyles({
    tussenschot: {
      display: "inline",
      background: "white",
      width: "2px",
      height: "100%",
      borderRight: "solid white 2px",
      marginLeft: "10px",
      marginRight: "10px",

      "&:last-child": {
        display: "none"
      }
    }
  });

class LinkBarComponent extends React.Component<ILinkBarProps, {}> {
  render() {
    const links = this.props.linkList || [];

    return (
      <nav>
        {links.map((e, i) => {
          return (
            <React.Fragment key={e.url}>
              <NoStyleLink
                to={e.url}
              >
                <Button
                  variant={e.isActive ? "outlined" : "text"}
                  color="inherit"
                >
                  {e.label}
                </Button>
              </NoStyleLink>
              <div className={this.props.classes.tussenschot} />
            </React.Fragment>
          );
        })}
      </nav>
    );
  }
}

export default withStyles(styles)(LinkBarComponent);
