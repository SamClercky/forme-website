import React from "react"
import { withStyles, createStyles, WithStyles, Theme } from '@material-ui/core'
import ContactEntry from "./ContactEntry";

export interface IContactEntryContainerProps extends WithStyles<typeof styles> {
    className?: string
}

const styles = (theme: Theme) => createStyles({
    root: {
        //display: "flex",
        flexGrow: 1,
        padding: `0 ${theme.spacing.unit * 3}px`
    }
})

class ContactEntryContainerComponent extends React.Component<IContactEntryContainerProps, {}> {
    public render() {
        return (
            <div className={this.props.classes.root + " " + (this.props.className || "")}>
                <ContactEntry />
                <ContactEntry />
                <ContactEntry />
                <ContactEntry />
                <ContactEntry />
                <ContactEntry />
                <ContactEntry />
                <ContactEntry />
                <ContactEntry />
                <ContactEntry />
            </div>
        )
    }
}

export default withStyles(styles)(ContactEntryContainerComponent)