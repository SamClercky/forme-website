import React, { SyntheticEvent } from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Modal
} from "@material-ui/core";
import ShowcaseItemCard, { CardSizes } from "./ShowcaseItemCard";

export interface IShowcaseItemProps extends WithStyles<typeof styles> {
  className?: string;
  startOpen?: boolean;
  itemLabel: string;
  itemUrl: string;
  itemDescription: string;
  itemPrice: number;
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
        <div onClick={this.handleDialogOpen} className={this.props.className}>
          <ShowcaseItemCard
            cardSize={CardSizes.small}
            cardLabel={this.props.itemLabel}
            cardUrl={this.props.itemUrl}
            cardDescription={this.props.itemDescription}
            cardPrice={this.props.itemPrice}
          />
        </div>
        <Modal open={this.state.isDialogOpen} onClose={this.handleDialogClose}>
          <div className={classes.modal}>
            <ShowcaseItemCard
              cardSize={CardSizes.big}
              cardLabel={this.props.itemLabel}
              cardUrl={this.props.itemUrl}
              cardDescription={this.props.itemDescription}
              cardPrice={this.props.itemPrice}
              onRequestToClose={this.handleDialogClose}
            />
          </div>
        </Modal>
      </>
    );
  }
}

export default withStyles(styles)(ShowcaseItemComponent);
