import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Paper
} from "@material-ui/core";
import { IWebpage, IAppState, ICollectionItem } from "../../redux/initialState";
import Header, { ILinkList } from "../common/Header";
import Footer from "../common/Footer";
import { connect } from "react-redux";
import ShowcaseItem from "./ShowcaseItem";
import { Text } from "../common/Headline";
import ScrollToTop from "../common/ScrollToTop";
import Helmet from "react-helmet";

export interface IShowcaseProps extends WithStyles<typeof styles> {
  className?: string;
  linkList: {
    url: string;
    label: string;
  }[];
  paginas: IWebpage[];
  collection?: ICollectionItem[];
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: "10px",
      overflow: "hidden"
    },
    grid: {
      display: "grid",
      // gridTemplateRows: "repeat(auto-fill, minmax(max-content, 1fr))",
      gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
      // gridAutoRows: "max-content",
      // gridAutoFlow: "dense",
      gridGap: "10px",
      width: "100%"
    },
    gridItem: {
      width: "100%",
      "& > div": {
        margin: "auto"
      }
    }
  });

interface IShowcaseState {
  linkList: ILinkList[];
}

class ShowcaseComponent extends React.Component<
  IShowcaseProps,
  IShowcaseState
> {
  public constructor(props: IShowcaseProps) {
    super(props);

    this.state = {
      linkList: props.linkList.map(e => {
        // transform a simple linklist to a ILinkList
        return {
          isActive: e.label == this.props.paginas[1].label,
          ...e
        } as ILinkList;
      })
    };
  }
  public render() {
    const { classes } = this.props;
    const collection =
      this.props.collection != undefined ? this.props.collection : [];

    return (
      <>
        <Helmet>
          <title>Onze collectie</title>
          <meta
            name="description"
            content="Hier vinden jullie al onze producten"
          />
          <meta
            name="keywords"
            content="forme, tshirts, t-shirts, vlajo, collectie"
          />
        </Helmet>
        <Header title="Onze collectie" linkList={this.state.linkList} />
        <Paper className={this.props.className + " " + classes.root}>
          <Text variant="h1">Onze collectie</Text>
          <div className={classes.grid}>
            {collection.map(e => (
              <ShowcaseItem
                key={e.url}
                itemLabel={e.label}
                itemDescription={e.description}
                itemUrl={e.url}
                itemPrice={e.price}
                className={classes.gridItem}
              />
            ))}
          </div>
        </Paper>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state: IAppState, props: IShowcaseProps) => {
  return {
    collection: state.collection
  };
};

export default withStyles(styles)(connect(mapStateToProps)(ShowcaseComponent));
