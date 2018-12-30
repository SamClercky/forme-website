import React from "react"
import { withStyles, createStyles, WithStyles, Theme, Paper, Typography, Grid, Avatar } from "@material-ui/core";
import logo from "../../logo.svg"
import ShowcaseRow from "../showcase/ShowcaseRow";
import Headline from "../common/Headline";
import ContactEntry from "../contact/ContactEntry";
import ContactEntryContainer from "../contact/ContactEntryContainer";

interface IHomeProps extends WithStyles<typeof styles> {
    className?: string
}

const styles = (theme: Theme) => createStyles({
    root: {
        padding: "10px",
        overflow: "hidden"
    },
    avatar: {
        margin: 10,
        width: 60,
        height: 60
    }
})

class Home extends React.Component<IHomeProps, {}> {
    public render() {
        const {classes} = this.props

        return (
            <Paper className={this.props.className + " " + classes.root}>
                <Typography variant="h1">Welkom bij Forme</Typography>
                <img src={logo} />
                <Typography variant="h3">
                    Wij staan voor standvastigheid.
                </Typography>
                <Headline variant="h2" align="left">
                    Onze Producten
                </Headline>
                <ShowcaseRow />
                <Headline variant="h2" align="left">
                    Onze verkoopmomenten
                </Headline>
                <ul>
                    <li>blablabla - 01/01/1999</li>
                    <li>blablabla - 02/01/1999</li>
                    <li>blablabla - 03/01/1999</li>
                    <li>blablabla - 04/01/1999</li>
                    <li>blablabla - 05/01/1999</li>
                    <li>blablabla - 06/01/1999</li>
                </ul>
                <Headline variant="h2" align="left">
                    Over ons
                </Headline>
                <img
                    src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                    title="groepsfoto"
                    alt="groepsfoto" />
                <Typography variant="body1">
                    Uitleg over wat en waarom we dit bedrijf hebben gemaakt. Blablablablablablablablablabla
                    blablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                    blablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                    blablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                    blablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                    blablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                    blablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                    blablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                    blablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                    blablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                </Typography>
                <Typography variant="h3" align="left">
                    Wie is wie
                </Typography>
                <ContactEntryContainer />
            </Paper>
        )
    }
}

export default withStyles(styles)(Home);