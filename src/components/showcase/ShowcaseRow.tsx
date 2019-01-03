import React from "react";
import { withStyles, createStyles, WithStyles, Theme } from "@material-ui/core";
import ShowcaseItem from "./ShowcaseItem";
import { IAppState, ICollectionItem } from "../../redux/initialState";
import { connect } from "react-redux";
import GoToShowcaseArrow from "./GoToShowcaseArrow";

export interface IShowcaseRowProps extends WithStyles<typeof styles> {
  className?: string;
  collection?: ICollectionItem[];
  onlyHighlighted: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "auto",
      overflowX: "scroll",
      marginLeft: "10px",
      marginRight: "10px",
      display: "grid",
      gridAutoColumns: "max-content",
      gridAutoRows: "max-content",
      gridAutoFlow: "column",
      gridGap: "10px",
      padding: "10px"
    },
    showcaseArrow: {
      marginTop: "auto",
      marginBottom: "auto",
      marginRight: "20px",
      marginLeft: "20px"
    }
  });

class ShowcaseRowComponent extends React.Component<IShowcaseRowProps, {}> {
  getCollection(collection: ICollectionItem[], onlyHighlighted = false) {
    let result = onlyHighlighted
      ? collection.filter(e => e.highlighted)
      : collection;
    return result.map(e => {
      return (
        <ShowcaseItem
          itemLabel={e.label}
          itemUrl={e.url}
          itemDescription={e.description}
          itemPrice={e.price}
          key={e.url}
        />
      );
    });
  }

  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.props.collection != undefined
          ? this.getCollection(
              this.props.collection,
              this.props.onlyHighlighted
            )
          : null}
        <GoToShowcaseArrow className={classes.showcaseArrow} />
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState, props: IShowcaseRowProps) => {
  return {
    collection: state.collection
  };
};

export default withStyles(styles)(
  connect(mapStateToProps)(ShowcaseRowComponent)
);
