import * as React from "react";
import {
  createStyles,
  Hidden,
  Drawer,
  Theme,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  WithStyles
} from "@material-ui/core";
import { Mail } from "@material-ui/icons";
import NoStyleLink from "./NoStyleLink";
import { ILinkList } from "./Header";

export interface ISideBarProps extends WithStyles<typeof styles> {
  linkList?: ILinkList[];
  theme: Theme;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    drawer: {
      width: 0,
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolBar: theme.mixins.toolbar
  });

class SideBarComponent extends React.Component<ISideBarProps> {
  public render() {
    const { classes, theme } = this.props;
    const list = this.props.linkList || ([] as ILinkList[]);

    console.log(theme.breakpoints.up("sm"));

    const drawer = (
      <div className={this.props.className}>
        <div className={classes.toolBar} />
        <Divider />
        <List>
          {list.map(e => {
            return (
              <NoStyleLink to={e.url} key={e.url}>
                <ListItem button selected={e.isActive}>
                  <ListItemIcon>
                    {
                      e.iconName
                    }
                  </ListItemIcon>
                  <ListItemText primary={e.label} />
                </ListItem>
              </NoStyleLink>
            );
          })}
        </List>
      </div>
    );

    return (
      <nav className={classes.drawer + " " + this.props.className}>
        {/* Mobile point of view*/}
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={this.props.isOpen}
          onClose={this.props.onClose}
        >
          {drawer}
        </Drawer>
      </nav>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SideBarComponent);
