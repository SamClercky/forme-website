import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";

export enum CardSizes {
  big = "big",
  small = "small"
}

export interface IShowcaseItemCardProps extends WithStyles<typeof styles> {
  className?: string;
  cardSize: CardSizes;
}

const styles = (theme: Theme) =>
  createStyles({
    card: {
      margin: "5px"
    },
    cardSmall: {
      maxWidth: 345,
      minWidth: 300,
    },
    cardBig: {
      maxWidth: "90vw",
      minWidth: "25vw"
    },
    [theme.breakpoints.between("xs", "md")]: {
      cardBig: {
        width: "75vw"
      }
    },
    [theme.breakpoints.between("md", "xl")]: {
      cardBig: {
        width: "50vw"
      }
    },
    [theme.breakpoints.up("xl")]: {
      cardBig: {
        width: "25vw"
      }
    },
    [theme.breakpoints.down("xs")]: {
      cardBig: {
        width: "90vw"
      }
    },
    media: {
      objectFit: "cover",
      height: "25vh"
    },
  });

class ShowcaseItemCardComponent extends React.Component<
  IShowcaseItemCardProps,
  {}
> {
  public render() {
    const { classes } = this.props;

    return (
      <Card
        className={`${classes.card} ${
          this.props.cardSize == CardSizes.big
            ? classes.cardBig
            : classes.cardSmall
        }`}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Img title"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(ShowcaseItemCardComponent);
