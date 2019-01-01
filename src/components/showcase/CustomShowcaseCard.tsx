import { withStyles, Theme, createStyles, Card } from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        height: "100%"
    }
})

export default withStyles(styles)(Card);