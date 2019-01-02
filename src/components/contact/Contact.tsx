import React from "react";
import { withStyles, createStyles, WithStyles, Theme, Paper, Typography } from "@material-ui/core";
import Header, { ILinkList } from "../common/Header";
import Footer from "../common/Footer";
import ContactEntryContainer from "./ContactEntryContainer";
import Headline from "../common/Headline";
import { IWebpage } from "../../redux/initialState";

export interface IContactProps extends WithStyles<typeof styles> {
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

interface IContactState {
  linkList: ILinkList[];
}

class ContactComponent extends React.Component<IContactProps, IContactState> {
  public constructor(props: IContactProps) {
    super(props);

    this.state = {
      linkList: props.linkList.map(e => {
        // transform a simple linklist to a ILinkList
        return {
          isActive: e.label == this.props.paginas[3].label,
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
          title="Contacteer ons"
          linkList={this.state.linkList}
        />
        <Paper className={this.props.className + " " + classes.root}>
          <Typography variant="h1">
            Contacteer ons
          </Typography>
          <Typography>
              Wij staan altijd klaar voor onze klanten en willen daarom ook altijd
              de beste service geven. Hiervoor kunt u altijd ons bereiken via ondestaande
              media.
          </Typography>
          <Typography>
              Voor algemene opmerkingen of vragen kunt u ons bereiken op <a href="mailto:info@forme.be">info@forme.be</a>
          </Typography>
          <Headline variant="h2">
              Contact met specifieke werknemers
          </Headline>
          <ContactEntryContainer />
        </Paper>
        <Footer />
      </>
    );
  }
}

export default withStyles(styles)(ContactComponent);
