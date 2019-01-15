import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme
} from "@material-ui/core";
import Headline, { Text } from "../common/Headline";
import ContactEntryContainer from "../contact/ContactEntryContainer";
import LazyLoad from "react-lazyload";
import Placeholder from "../../placeholder.svg"
import SplashScreen from "../../logo_splashscreen.svg"

export interface IAboutContentProps extends WithStyles<typeof styles> {
  className?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: "5px"
    },
    groepsfoto: {
      margin: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "100%",
      width: "default",
      maxHeight: "40vh",
    },
    text: {
      // textAlign: "justify"
    },
    citaat: {
      textAlign: "center",
      marginTop: "3rem",
      marginBottom: "3rem",
    }
  });

class AboutContentComponent extends React.Component<IAboutContentProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <LazyLoad height="15vh" placeholder={<img src={Placeholder} alt="Onze groepsfoto" />}>
          <img
            src={SplashScreen}
            title="Onze groepsfoto"
            alt="Onze groepsfoto"
            className={classes.groepsfoto}
          />
        </LazyLoad>
        <Text variant="body1" className={classes.text} paragraph>
          <strong>Wij zijn Forme.</strong><br />
          Elke dag zijn we hoe de lokale economie het steeds meer moet opnemen
          tegen de grote multinationals die steeds weer de overhand nemen.
          Dat willen wij graag proberen te verhelpen door producten te verkopen, gemaakt
          door lokale bedrijfjes. Dus is een t-shirt bij ons een grote hulp voor die kleine
          bedrijfjes.
        </Text>
        <Text variant="h6" className={classes.citaat}>Dus is een t-shirt bij ons een grote hulp voor die kleine
          bedrijfjes.</Text>
        <Text variant="body1" className={classes.text} paragraph>
          Natuurlijk weten wij ook dat wij alleen nooit alle bedrijfjes kunnen helpen, maar we
          willen meer een statement geven waar anderen een voorbeeld in kunnen zien.
          Vandaar dat we ook de mier hebben als logo; als kleine mier alleen, ben je zwak
          en hulpeloos, maar als groep ben je sterker en weerbaarder. Samen kunnen - net als een
          kolonie - voor een betere toekomst zorgen.<br /><br />
          Wij zijn een bedrijf opgestart door een hand vol leerlingen als een soort eindproject.
          Velen in onze groep wouden een sociaal project organiseren en hebben er dan voor
          gekozen om dit in deze vorm als lokale economie booster te doen.
          <br />
          Dit proberen wij als een leervolle ervaring via Vlajo te doen. Vlajo
          is een organisatie die jongeren zoals wij een juridisch veilig kader
          geeft om als leerling te ondernemen. Meer info kan worden gevonden op hun site:{" "}
          <a href="https://www.vlajo.org/">www.vlajo.org</a>
        </Text>
        <Headline variant="h3" align="left">
          Wie is wie
        </Headline>
        <ContactEntryContainer />
      </section>
    );
  }
}

export default withStyles(styles)(AboutContentComponent);
