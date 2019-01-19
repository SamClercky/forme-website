import React from "react"
import { withStyles, createStyles, WithStyles, Theme } from '@material-ui/core'
import ContactEntry from "./ContactEntry";
import { IAppState, IContactInfo } from "../../redux/initialState";
import { connect } from "react-redux";

export interface IContactEntryContainerProps extends WithStyles<typeof styles> {
    className?: string,
    contact?: IContactInfo[],
    shortVersion: boolean,
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
                {
                    this.props.contact != undefined ? this.props.contact
                        .filter(c => c.isImportant || !this.props.shortVersion)
                        .map(c => {
                            return (
                                <ContactEntry contact={c} key={c.name} />
                            )
                        }) : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state: IAppState, props: IContactEntryContainerProps) => {
    return {
        contact: state.contact
    }
}

export default withStyles(styles)(connect(mapStateToProps)(ContactEntryContainerComponent))