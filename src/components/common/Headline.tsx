import { withStyles, Typography, Theme, createStyles } from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        borderBottom: `solid 1px ${theme.palette.secondary.contrastText}`,
        margin: "10px"
    }
})

export default withStyles(styles)(Typography);