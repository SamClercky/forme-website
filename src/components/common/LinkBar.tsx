import React from "react";
import { withStyles, createStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import NoStyleLink from "./NoStyleLink";
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
                    return (<NoStyleLink to={e.url} key={e.url}><Button color="inherit">{e.label}</Button></NoStyleLink>)
                })}
            </nav>
        )
    }
}

export default withStyles(styles)(LinkBarComponent);
