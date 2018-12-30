import React from "react"
import { withStyles, createStyles, WithStyles, Theme, Paper, Grid, Avatar, Typography } from '@material-ui/core'

export interface IContactEntryProps extends WithStyles<typeof styles> {
    className?: string
}

const styles = (theme: Theme) => createStyles({
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing.unit}px auto`,
        padding: theme.spacing.unit * 2
    }
})

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

class ContactEntryComponent extends React.Component<IContactEntryProps, {}> {
    public render() {
        return (
            <Paper className={this.props.classes.paper + " " + (this.props.className || "")}>
                <Grid container wrap="nowrap" spacing={16}>
                    <Grid item>
                        <Avatar>W</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography variant="h6">CEO</Typography>
                        <Typography>{message}</Typography>
                        <ul>
                            <li><Typography>email: <a href="mailto:ik@forme.be">ik@forme.be</a></Typography></li>
                            <li><Typography>tel: <a href="tel:022673333">02 134 567 89</a></Typography></li>
                            <li><Typography>@facebook</Typography></li>
                            <li><Typography>...</Typography></li>
                        </ul>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(ContactEntryComponent)