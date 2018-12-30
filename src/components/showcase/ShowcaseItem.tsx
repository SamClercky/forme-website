import React, { SyntheticEvent } from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  CardContent,
  Dialog,
  Slide,
  Modal
} from "@material-ui/core";
import ShowcaseItemCard, { CardSizes } from "./ShowcaseItemCard";

export interface IShowcaseItemProps extends WithStyles<typeof styles> {
  className?: string;
  startOpen?: boolean;
}

interface IShowcaseItemState {
  isDialogOpen: boolean;
  prevPropsStartOpen?: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    modal: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      position: "absolute"
    }
  });

class ShowcaseItemComponent extends React.Component<
  IShowcaseItemProps,
  IShowcaseItemState
> {
  public constructor(props: IShowcaseItemProps) {
    super(props);

    this.state = {
      isDialogOpen:
        this.props.startOpen == undefined ? false : this.props.startOpen,
      prevPropsStartOpen: this.props.startOpen
    };
  }

  static getDerivedStateFromProps(
    props: IShowcaseItemProps,
    state: IShowcaseItemState
  ): IShowcaseItemState | null {
    if (props.startOpen == state.prevPropsStartOpen) {
      return null;
    } else {
      return {
        isDialogOpen: props.startOpen == undefined ? false : props.startOpen,
        prevPropsStartOpen: props.startOpen
      };
    }
  }

  handleDialogOpen = (e: SyntheticEvent) => {
    e.preventDefault();

    this.setState({
      isDialogOpen: true
    });
  };

  handleDialogClose = () => {
    this.setState({
      isDialogOpen: false
    });
  };

  public render() {
    const { classes } = this.props;

    return (
      <>
        <div onClick={this.handleDialogOpen}>
          <ShowcaseItemCard cardSize={CardSizes.small} />
        </div>
        <Modal
          open={this.state.isDialogOpen}
          onClose={this.handleDialogClose}>

          <div className={classes.modal}>
            <ShowcaseItemCard cardSize={CardSizes.big} />
          </div>
        </Modal>
      </>
    );
  }
}

function Transition(props: any) {
  return <Slide direction="up" {...props} />
}

export default withStyles(styles)(ShowcaseItemComponent);
