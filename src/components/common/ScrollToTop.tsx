import React, { ReactNode, ReactNodeArray } from "react";
import { RouteComponentProps, withRouter } from "react-router";

export interface IScrollToTopProps extends RouteComponentProps<any> {
  children: ReactNode;
}

class ScrollToTop extends React.Component<IScrollToTopProps, {}> {
  componentDidUpdate(prevProps: IScrollToTopProps) {
    console.log("Updated!!!");
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
