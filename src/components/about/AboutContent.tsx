import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Button
} from "@material-ui/core";
import Headline, { Text } from "../common/Headline";
import ContactEntryContainer from "../contact/ContactEntryContainer";
import LazyLoad from "react-lazyload";
import Placeholder from "../../placeholder.png"
import { initialState } from '../../redux/initialState';
import NoStyleLink from "../common/NoStyleLink";

export interface IAboutContentProps extends WithStyles<typeof styles> {
  className?: string;
  shortVersion: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: "10px"
    },
    groepsfoto: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "100%",
      width: "default",
      maxHeight: "40vh",
      objectFit: "cover",
    },
    text: {
      // textAlign: "justify"
    },
    [theme.breakpoints.up("md")]: {
      smallRoot: {
        flexDirection: "row",
        "& > *": {
          marginLeft: "10px",
        },
      },
      groepsfoto: {
        minWidth: "30vw",
      },
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
      <section className={classes.root + " " + ((this.props.shortVersion) ? classes.smallRoot : "")}>
        <LazyLoad height="15vh" placeholder={<img src={Placeholder} alt="Onze groepsfoto" />}>
          <img
            src={initialState.resources.groepsfoto.url}
            title={initialState.resources.groepsfoto.title}
            alt={initialState.resources.groepsfoto.alt}
            className={classes.groepsfoto}
          />
        </LazyLoad>
        <div>

          <Text variant="body1" className={classes.text} paragraph>
            <strong>Wij zijn Forme.</strong><br />
            Elke dag zien we hoe de lokale economie het steeds meer moet opnemen
            tegen de grote multinationals die steeds weer de overhand nemen.
            Dat willen wij graag proberen te verhelpen door producten te verkopen, gemaakt
            door lokale bedrijfjes. Dus is een t-shirt bij ons is een grote hulp voor die kleine
            bedrijfjes.
        </Text>
          {
            (this.props.shortVersion) ?
              // @ts-ignore
              <Button component={NoStyleLink} to="/over-ons">Lees verder</Button>
              : null
          }
          {
            (!this.props.shortVersion) ?
              <>
                <Text variant="h6" component="q" className={classes.citaat}>Dus is een t-shirt bij ons is een grote hulp voor die kleine
          bedrijfjes.</Text>
                <Text variant="body1" className={classes.text} paragraph>
                  Natuurlijk weten wij ook dat wij alleen nooit alle bedrijfjes kunnen helpen, maar we
                  willen meer een statement geven waar anderen een voorbeeld in kunnen zien.
                  Vandaar dat we ook de mier hebben als logo; als kleine mier alleen, ben je zwak
                  en hulpeloos, maar als groep ben je sterker en weerbaarder. Samen kunnen we - net als een
          kolonie - samenwerken en voor een betere toekomst zorgen.<br /><br />
                  Wij zijn een bedrijf opgestart door een hand vol leerlingen als een soort eindproject.
                  Velen in onze groep wouden een sociaal project organiseren en hebben er dan voor
                  gekozen om dit in deze vorm als lokale economie booster te doen.
          <br />
                  Dit proberen wij als een leervolle ervaring via Vlajo te doen. Vlajo
                  is een organisatie die jongeren zoals wij een juridisch veilig kader
          geeft om als leerling te ondernemen. Meer info kan worden gevonden op hun site:{" "}
                  <a href="https://www.vlajo.org/">www.vlajo.org</a>
                </Text>
              </> : null
          }
        </div>

        {(!this.props.shortVersion) ? // only show this when on the about page
          <>
            <Headline variant="h3" align="left">
              Wie is wie
            </Headline>
            <ContactEntryContainer shortVersion={false} />
          </>
          : null}
      </section>
    );
  }
}

export default withStyles(styles)(AboutContentComponent);
