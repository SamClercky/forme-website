import React from "react";
import { withStyles, createStyles, Button } from "@material-ui/core";

export interface ILinkBarProps {
  classes: {};
  linkList?: {
    url: string;
    label: string;
  }[];
}

const styles = createStyles({});

class LinkBarComponent extends React.Component<ILinkBarProps, {}> {

    render() {
        const links = this.props.linkList || []

        return (
            <nav>
                {links.map(e =>{
                    return (<Button color="inherit" key={e.url}>{e.label}</Button>)
                })}
            </nav>
        )
    }
}

export default withStyles(styles)(LinkBarComponent);
