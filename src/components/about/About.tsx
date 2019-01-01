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
import { resources } from "../../resources";

export interface IAboutProps extends WithStyles<typeof styles> {
  className?: string;
  linkList: {
    url: string;
    label: string;
  }[];
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
          isActive: e.label == resources.paginas[1].label,
          ...e
        } as ILinkList;
      })
    };
  }

  public render() {
    const { classes } = this.props;

    return (
      <>
        <Header
          title="Over ons"
          linkList={this.state.linkList}
        />
        <Paper className={this.props.className + " " + classes.root}>
          <AboutContent />
        </Paper>
        <Footer />
      </>
    );
  }
}

export default withStyles(styles)(AboutComponent);
