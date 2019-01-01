import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  GridList,
  GridListTile
} from "@material-ui/core";
import ShowcaseItem from "./ShowcaseItem";
import { IAppState, ICollectionItem } from "../../redux/initialState";
import { connect } from "react-redux";

export interface IShowcaseRowProps extends WithStyles<typeof styles> {
  className?: string;
  collection?: ICollectionItem[]
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
    }
  });

class ShowcaseRowComponent extends React.Component<IShowcaseRowProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {
          this.props.collection != undefined ? this.props.collection.map(e => {
            return (
              <ShowcaseItem 
                itemLabel={e.label}
                itemUrl={e.url}
                itemDescription={e.description}
                key={e.url}
              />
            )
          }) : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState, props: IShowcaseRowProps) => {
  return {
    collection: state.collection
  }
}

export default withStyles(styles)(connect(mapStateToProps)(ShowcaseRowComponent));
