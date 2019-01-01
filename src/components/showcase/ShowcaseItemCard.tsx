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
  Typography,
  CardActions,
  IconButton
} from "@material-ui/core";
import transitions from "@material-ui/core/styles/transitions";
import CustomShowcaseCard from "./CustomShowcaseCard";
import LazyLoad from "react-lazyload";
import { Favorite, Share } from "@material-ui/icons";

export enum CardSizes {
  big = "big",
  small = "small"
}

export interface IShowcaseItemCardProps extends WithStyles<typeof styles> {
  className?: string;
  cardSize: CardSizes;
  cardLabel: string;
  cardUrl: string;
  cardDescription: string;
}

const styles = (theme: Theme) =>
  createStyles({
    card: {
      transition: "opacity 2s"
    },
    cardSmall: {
      maxWidth: 345,
      minWidth: 300
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
      objectFit: "contain",
      height: "25vh"
    }
  });

class ShowcaseItemCardComponent extends React.Component<
  IShowcaseItemCardProps,
  {}
> {
  public render() {
    const { classes } = this.props;

    return (
      <CustomShowcaseCard
        className={`${classes.card} ${
          this.props.cardSize == CardSizes.big
            ? classes.cardBig
            : classes.cardSmall
        }`}
      >
        <CardActionArea>
          <LazyLoad height="25vh">
            <CardMedia
              component="img"
              className={classes.media}
              image={this.props.cardUrl}
              title={this.props.cardLabel}
            />
          </LazyLoad>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.cardLabel}
            </Typography>
            <Typography component="p">{this.props.cardDescription}</Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton>
              <Favorite />
            </IconButton>
            <IconButton>
              <Share />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </CustomShowcaseCard>
    );
  }
}

export default withStyles(styles)(ShowcaseItemCardComponent);
