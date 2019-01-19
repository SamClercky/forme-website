import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Paper
} from "@material-ui/core";
import Header, { ILinkList } from "../common/Header";
import Footer from "../common/Footer";
import AboutContent from "./AboutContent";
import { IWebpage } from "../../redux/initialState";
import { Text } from "../common/Headline";
import Helmet from "react-helmet";

export interface IAboutProps extends WithStyles<typeof styles> {
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
      padding: "10px",
      overflow: "hidden"
    }
  });

interface IAboutState {
  linkList: ILinkList[];
}

class AboutComponent extends React.Component<IAboutProps, IAboutState> {
  public constructor(props: IAboutProps) {
    super(props);

    this.state = {
      linkList: props.linkList.map(e => {
        // transform a simple linklist to a ILinkList
        return {
          isActive: e.label == this.props.paginas[2].label,
          ...e
        } as ILinkList;
      })
    };
  }

  public render() {
    const { classes } = this.props;

    return (
      <>
        <Helmet>
          <title>Over ons</title>
          <meta
            name="description"
            content="Deze pagina gaat over ons als bedrijf"
          />
          <meta
            name="keywords"
            content="forme, tshirts, t-shirts, vlajo, overzicht, over ons, about us"
          />
        </Helmet>
        <Header title="Over ons" linkList={this.state.linkList} />
        <Paper className={this.props.className + " " + classes.root}>
          <Text variant="h1" align="left">
            Over ons
          </Text>
          <AboutContent shortVersion={false} />
        </Paper>
        <Footer />
      </>
    );
  }
}

export default withStyles(styles)(AboutComponent);
