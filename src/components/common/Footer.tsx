import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Paper,
  Button
} from "@material-ui/core";
import vlajo from "../../Mini_logo_RGB.jpg";
import { Text } from "./Headline";
import NoStyleLink from "./NoStyleLink";
import LazyLoad from "react-lazyload";

export interface IFooterComponentProps extends WithStyles<typeof styles> {
  className?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: theme.palette.primary.dark,
      paddingTop: "10px",
      paddingBottom: "10px",
      color: theme.palette.secondary.light + " !important"
    },
    gridLayout: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr",
      gridTemplateAreas: "'image weblinks legal' 'image social .'",
      gridGap: "10px",
      width: "80vw",
      margin: "auto"
    },
    [theme.breakpoints.down("md")]: {
      gridLayout: {
        width: "max-content",
        marginLeft: "auto",
        marginRight: "auto",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "repeat(3, auto)",
        gridTemplateAreas: "'weblinks' 'legal' 'social' 'image'"
      },
      webLinksSection: { width: "100%" },
      legalSection: { width: "100%" },
      socialSection: { width: "100%" }
    },
    [theme.breakpoints.down("sm")]: {
    },
    vlajoFoto: {
      gridArea: "image",
      marginLeft: "auto",
      marginRight: "auto",
    },
    webLinksSection: {
      gridArea: "weblinks",
      marginLeft: "auto",
      marginRight: "auto",
    },
    legalSection: {
      gridArea: "legal",
      marginLeft: "auto",
      marginRight: "auto",
    },
    socialSection: {
      gridArea: "social",
      marginLeft: "auto",
      marginRight: "auto",
    },
  });

class FooterComponentComponent extends React.Component<
  IFooterComponentProps,
  {}
  > {
  public render() {
    const { classes } = this.props;
    return (
      <footer>
        <Paper className={classes.paper}>
          <div className={classes.gridLayout}>
            <LazyLoad height={305}>
              <img className={classes.vlajoFoto} src={vlajo} />
            </LazyLoad>
            <div className={classes.webLinksSection}>
              <Text variant="h6">Weblinks</Text>
              <ul>
                <li>
                  <Button component="div" color="inherit">
                    <NoStyleLink to="/">Home</NoStyleLink>
                  </Button>
                </li>
                <li>
                  <Button component="div" color="inherit">
                    <NoStyleLink to="/store">Onze collectie</NoStyleLink>
                  </Button>
                </li>
                <li>
                  <Button component="div" color="inherit">
                    <NoStyleLink to="/over-ons">Over ons</NoStyleLink>
                  </Button>
                </li>
                <li>
                  <Button component="div" color="inherit">
                    <NoStyleLink to="/contact">Contacteer ons</NoStyleLink>
                  </Button>
                </li>
              </ul>
            </div>
            <div className={classes.legalSection}>
              <Text variant="h6">Externe bronnen</Text>
              <ul>
                <li>
                  <Button component="div" color="inherit">
                    <NoStyleLink normallink="true" to="https://www.vlajo.org/">Vlajo</NoStyleLink>
                  </Button>
                </li>
              </ul>
            </div>
            <div className={classes.socialSection}>
              <Text variant="h6">Sociale media</Text>
              <ul>
                <li>
                  <Button component="div" color="inherit">
                    <NoStyleLink normallink="true" to="https://m.facebook.com/FormeCollege-980023255519496/">Facebook</NoStyleLink>
                  </Button>
                </li>
                <li>
                  <Button component="div" color="inherit">
                    <NoStyleLink normallink="true" to="https://www.instagram.com/formevilvoorde/?utm_source=ig_profile_share&igshid=5sc0i5f8xjnd&fbclid=IwAR2gVBJQeZl8kKQX_9sJ_trnkhFSYF5vmf1Canly_mmHdW0Bg8kPqOtoBAk">Instagram</NoStyleLink>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </Paper>
      </footer>
    );
  }
}

export default withStyles(styles)(FooterComponentComponent);
