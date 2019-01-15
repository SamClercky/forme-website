import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Paper,
  Typography
} from "@material-ui/core";
import Header, { ILinkList } from "../common/Header";
import Footer from "../common/Footer";
import ContactEntryContainer from "./ContactEntryContainer";
import Headline, { Text } from "../common/Headline";
import { IWebpage } from "../../redux/initialState";
import Helmet from "react-helmet";

export interface IContactProps extends WithStyles<typeof styles> {
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
        <Helmet>
          <title>Contacteer ons</title>
          <meta
            name="description"
            content="Hier kunnen jullie ons bereiken met alle nodige adressen aangegeven"
          />
          <meta
            name="keywords"
            content="forme, tshirts, t-shirts, vlajo, contact, problemen"
          />
        </Helmet>
        <Header title="Contacteer ons" linkList={this.state.linkList} />
        <Paper className={this.props.className + " " + classes.root}>
          <Text variant="h1">Contacteer ons</Text>
          <Text paragraph>
            Wij staan altijd klaar voor onze klanten en willen daarom ook altijd
            de beste service geven. Hiervoor kunt u ons altijd bereiken via
            ondestaande media.
          </Text>
          <Text paragraph>
            Voor algemene opmerkingen of vragen kunt u ons bereiken op{" "}
            <a href="mailto:info@forme-college.be">info@forme-college.be</a>
          </Text>
          <Headline variant="h2">Contactgegevens van specifieke werknemers</Headline>
          <ContactEntryContainer />
        </Paper>
        <Footer />
      </>
    );
  }
}

export default withStyles(styles)(ContactComponent);
