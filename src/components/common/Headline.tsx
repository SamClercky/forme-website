import { withStyles, Typography, Theme, createStyles } from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        borderBottom: `solid 1px ${theme.palette.secondary.contrastText}`
    }
})

export default withStyles(styles)(Typography);