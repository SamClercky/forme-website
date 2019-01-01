import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Typography
} from "@material-ui/core";
import Headline from "../common/Headline";
import ContactEntryContainer from "../contact/ContactEntryContainer";

export interface IAboutContentProps extends WithStyles<typeof styles> {
  className?: string;
}

const styles = (theme: Theme) => createStyles({
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
        width: "default"
    },
    text: {
        textAlign: "justify",
    }
});

class AboutContentComponent extends React.Component<IAboutContentProps, {}> {
  public render() {
    const {classes} = this.props;

    return (
      <section className={classes.root}>
        <Headline variant="h2" align="left">
          Over ons
        </Headline>
        <img
          src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="groepsfoto"
          alt="groepsfoto"
          className={classes.groepsfoto}
        />
        <Typography variant="body1" className={classes.text}>
          Wij zijn een bedrijf opgestart door een hand vol leerlingen die graag eens wouden zien
          hoe moeilijk het nou zou zijn om een bedrijf op te starten.
          <br />
            Dit proberen wij als een leervolle ervaring via Vlajo te doen. Vlajo is een organisatie die
            jongeren zoals wij een juridisch veilig kader geeft om als leerling te ondernemen.
        </Typography>
        <Typography variant="h3" align="left">
          Wie is wie
        </Typography>
        <ContactEntryContainer />
      </section>
    );
  }
}

export default withStyles(styles)(AboutContentComponent);