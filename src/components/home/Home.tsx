import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Paper,
  Typography
} from "@material-ui/core";
import logo from "../../logo_splashscreen.svg";
import ShowcaseRow from "../showcase/ShowcaseRow";
import Headline, { Text } from "../common/Headline";
import Header, { ILinkList } from "../common/Header";
import Footer from "../common/Footer";
import VendorMomentRow from "../vendormoments/VendorMomentRow";
import AboutContent from "../about/AboutContent";
import { IWebpage } from "../../redux/initialState";
import { Link } from "react-router-dom";
import NoStyleLink from "../common/NoStyleLink";
import ScrollToTop from "../common/ScrollToTop";

interface IHomeProps extends WithStyles<typeof styles> {
  className?: string;
  linkList: {
    url: string;
    label: string;
  }[];
  paginas: IWebpage[];
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // padding: "10px",
      overflow: "hidden",
      "& > *": {
        marginLeft: "10px",
        marginRight: "10px"
      }
    },
    title: {
      position: "absolute",
      top: "50vh",
      left: "50vw",

      transform: "translate(-50%, -50%)",
      margin: "0px",
      textAlign: "center",
      width: "100vw",
      overflow: "hidden",
      padding: "0px",

      "& > h1": {
        fontWeight: "bold",
        letterSpacing: "5vw",
        margin: "0px",
        marginRight: "-10vw"
      },
      "& > h3": {
        fontStyle: "italic"
      }
    },
    splashscreen: {
      position: "relative",
      top: "0px",
      left: "0px",
      right: "0px",
      margin: "0px",
      width: "100%",
      height: "60vh",
      objectFit: "cover"
    },
  });

interface IHomeState {
  linkList: ILinkList[];
}

class Home extends React.Component<IHomeProps, IHomeState> {
  public constructor(props: IHomeProps) {
    super(props);

    this.state = {
      linkList: props.linkList.map(e => {
        // transform a simple linklist to a ILinkList
        return {
          isActive: e.label == this.props.paginas[0].label,
          ...e
        } as ILinkList;
      })
    };
  }

  public render() {
    const { classes } = this.props;

    return (
      <>
        <Header title="Welkom" linkList={this.state.linkList} />
        <Paper className={this.props.className + " " + classes.root}>
          <img src={logo} className={classes.splashscreen} />
          <div className={classes.title}>
            <Text variant="h1" style={{ fontFamily: "'Bevan'" }}>
              Forme
            </Text>
            <Text variant="h3">Wij staan voor standvastigheid.</Text>
          </div>
          <Headline variant="h2" align="left">
            <NoStyleLink to="/showcase">Onze uitgelichte Producten</NoStyleLink>
          </Headline>
          <ShowcaseRow onlyHighlighted={true} />
          <Headline variant="h2" align="left">
            Onze verkoopmomenten
          </Headline>
          <VendorMomentRow />
          <Headline variant="h2" align="left">
            <NoStyleLink to="/over-ons">Over ons</NoStyleLink>
          </Headline>
          <AboutContent />
        </Paper>
        <Footer />
      </>
    );
  }
}

export default withStyles(styles)(Home);
