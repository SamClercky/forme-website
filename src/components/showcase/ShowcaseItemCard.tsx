import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse
} from "@material-ui/core";
import CustomShowcaseCard from "./CustomShowcaseCard";
import LazyLoad from "react-lazyload";
import { Favorite, Share } from "@material-ui/icons";
import { Dispatch } from "redux";
import { IAppState } from "../../redux/initialState";
import { connect } from "react-redux";
import {
  AppActions
} from "../../redux/actions";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share";

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
  removeFavorite?: () => void;
  addFavorite?: () => void;
  starCount?: number;
  stared?: boolean;
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
    },
    socialCollapse: {
      display: "flex",
      alignContent: "center",
      justifyContent: "space-evenly",
      backgroundColor: theme.palette.primary.main,
    }
  });

interface IShowcaseItemCardState {
  open: boolean;
}

class ShowcaseItemCardComponent extends React.Component<
  IShowcaseItemCardProps,
  IShowcaseItemCardState
> {
  state = {
    open: false
  };
  public constructor(props: IShowcaseItemCardProps) {
    super(props);

    // bind all eventListeners
    this.onFavoriteClick = this.onFavoriteClick.bind(this);
    this.onShareToggle = this.onShareToggle.bind(this);
  }

  onFavoriteClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (
      this.props.starCount != undefined &&
      this.props.stared != undefined &&
      this.props.removeFavorite != undefined &&
      this.props.addFavorite != undefined
    ) {
      if (this.props.stared) {
        this.props.removeFavorite();
      } else {
        this.props.addFavorite();
      }
    } else {
      console.error("1 van de props komende uit de store zijn undefined");
    }
  }

  onShareToggle(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.setState(state => ({
      open: !state.open
    }));
  }

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
            <IconButton
              color={this.props.stared ? "primary" : "default"}
              onClick={this.onFavoriteClick}
            >
              <Favorite />
            </IconButton>
            <IconButton onClick={this.onShareToggle}>
              <Share />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <CardContent className={classes.socialCollapse}>
              <FacebookShareButton
                url={this.props.cardUrl}
                quote={"Check dit eens uit: " + this.props.cardLabel}
              >
                <FacebookIcon round size={32} />
              </FacebookShareButton>
              <LinkedinShareButton
                url={this.props.cardUrl}
                description={this.props.cardDescription}
                title={"Check dit eens uit: " + this.props.cardLabel}
              >
                <LinkedinIcon round size={32} />
              </LinkedinShareButton>
              <TwitterShareButton
                url={this.props.cardUrl}
                title={"Check dit eens uit: " + this.props.cardLabel}
              >
                <TwitterIcon round size={32} />
              </TwitterShareButton>
              <WhatsappShareButton
                url={this.props.cardUrl}
                title={"Check dit eens uit: " + this.props.cardLabel}
              >
                <WhatsappIcon round size={32} />
              </WhatsappShareButton>
              {/* <PinterestShareButton url={this.props.sharableUrl} /> */}
              <EmailShareButton
                url={this.props.cardUrl}
                body={"Check dit eens uit: " + this.props.cardLabel}
              >
                <EmailIcon round size={32} />
              </EmailShareButton>
            </CardContent>
          </Collapse>
        </CardActionArea>
      </CustomShowcaseCard>
    );
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<AppActions>,
  props: IShowcaseItemCardProps
) => {
  return {
    removeFavorite: () => {
      dispatch({
        type: "remove_favorite",
        urlFavorite: props.cardUrl
      });
    },
    addFavorite: () => {
      dispatch({
        type: "add_favorite",
        urlFavorite: props.cardUrl
      });
    }
  };
};

const mapStateToProps = (state: IAppState, props: IShowcaseItemCardProps) => {
  return {
    starCount: state.collection.filter(c => {
      // retrive current starcount
      return c.url == props.cardUrl;
    })[0].stars,
    stared: state.collection.filter(c => {
      // retrive current starcount
      return c.url == props.cardUrl;
    })[0].stared
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowcaseItemCardComponent)
);
