import React from "react";
import {
  withStyles,
  createStyles,
  Button,
  WithStyles,
  Theme,
  Fab
} from "@material-ui/core";
import NoStyleLink from "./NoStyleLink";
import { ILinkList } from "./Header";

export interface ILinkBarProps extends WithStyles<typeof styles> {
  linkList?: ILinkList[];
  theme?: Theme;
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
    },
    [theme.breakpoints.down("sm")]: {
      tussenschot: {
        display: "none",
      },
    },
    fab: {
      margin: "2px",
    },
  });

class LinkBarComponent extends React.Component<ILinkBarProps, {}> {
  render() {
    const links = this.props.linkList || [];
    let shortView = true;
    if (this.props.theme != undefined) {
      shortView = window.innerWidth <= this.props.theme.breakpoints.values.md;
    }

    return (
      <nav>
        {links.filter(e => e.showMinimized || !shortView).map((e, i) => {
          return (
            <React.Fragment key={e.url}>
              <NoStyleLink to={e.url}>
                {
                  shortView ?
                  (!e.isActive?
                  <Fab size="small" color="primary" className={this.props.classes.fab}>{e.iconName}</Fab> : null
                  ) :
                  <Button
                  variant={e.isActive ? "outlined" : "text"}
                  color="inherit"
                >
                  <div style={{marginRight: "10px"}}>{e.iconName}</div>
                  {e.label}
                </Button>
                }
              </NoStyleLink>
              <div className={this.props.classes.tussenschot} />
            </React.Fragment>
          );
        })}
      </nav>
    );
  }
}

export default withStyles(styles, {withTheme: true})(LinkBarComponent);
