import React from "react";
import {
  withStyles,
  createStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  WithStyles,
  Theme,
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
  theme: Theme;
}

interface IHeaderState {
  isDrawerOpen: boolean;
  isMobileRes: boolean;
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
      marginRight: 20
    }
  });

class HeaderComponent extends React.Component<IHeaderProps, IHeaderState> {
  state: IHeaderState = {
    isDrawerOpen: false,
    isMobileRes: false
  };

  constructor(props: IHeaderProps) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  handleToggle() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  }

  handleResize() {
    if (window.innerWidth < this.props.theme.breakpoints.values.sm) {
      // mobileRes == true
      if (this.state.isMobileRes == false) {
        // only change when needed
        this.setState({
          isMobileRes: true
        });
      }
    } else {
      // mobileRes == false (desktopRes)
      if (this.state.isMobileRes == true) {
        // only change when needed
        this.setState({
          isMobileRes: false
        });
      }
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    // first window risement
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  // TODO: isDrawerUpdate reset after window changes
  render() {
    const { classes, title } = this.props;

    return (
      <header>
        {this.state.isMobileRes ? ( // mobile only
          <SideBar
            linkList={this.props.linkList}
            isOpen={this.state.isDrawerOpen}
            onClose={this.handleToggle}
          />
        ) : null}
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            {this.state.isMobileRes ? ( // mobile only
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.handleToggle}
              >
                <Menu />
              </IconButton>
            ) : null}

            <Typography variant="h6" color="inherit" className={classes.grow}>
              {title}
            </Typography>

            {!this.state.isMobileRes ? ( // desktop only
              <LinkBar
                linkList={this.props.linkList}
              />
            ) : null}
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default withStyles(styles, { withTheme: true })(HeaderComponent);
