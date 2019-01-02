import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Paper,
  Typography
} from "@material-ui/core";
import logo from "../../logo.svg";
import ShowcaseRow from "../showcase/ShowcaseRow";
import Headline from "../common/Headline";
import Header, { ILinkList } from "../common/Header";
import Footer from "../common/Footer";
import VendorMomentRow from "../vendormoments/VendorMomentRow";
import AboutContent from "../about/AboutContent";
import { IWebpage } from "../../redux/initialState";

interface IHomeProps extends WithStyles<typeof styles> {
  className?: string;
  linkList: {
    url: string;
    label: string;
  }[];
  paginas: IWebpage[]
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: "10px",
      overflow: "hidden"
    }
  });

interface IHomeState {
  linkList: ILinkList[]
}

class Home extends React.Component<IHomeProps, IHomeState> {

  public constructor(props: IHomeProps) {
    super(props)
  
    this.state = {
      linkList: props.linkList.map(e => { // transform a simple linklist to a ILinkList
        return {
          isActive: e.label == this.props.paginas[0].label,
          ...e
        } as ILinkList
      })
    }
  }

  public render() {
    const { classes } = this.props;

    return (
      <>
        <Header
          title="Welkom"
          linkList={this.state.linkList}
        />
        <Paper className={this.props.className + " " + classes.root}>
          <Typography variant="h1">Welkom bij Forme</Typography>
          <img src={logo} />
          <Typography variant="h3">Wij staan voor standvastigheid.</Typography>
          <Headline variant="h2" align="left">
            Onze Producten
          </Headline>
          <ShowcaseRow />
          <Headline variant="h2" align="left">
            Onze verkoopmomenten
          </Headline>
          <VendorMomentRow />
          <AboutContent />
        </Paper>
        <Footer />
      </>
    );
  }
}

export default withStyles(styles)(Home);
