import { withStyles, Typography, Theme, createStyles } from "@material-ui/core";

const HeadlineUnderlineStyles = (theme: Theme) =>
  createStyles({
    root: {
      borderBottom: `solid 1px ${theme.palette.secondary.contrastText}`,
      color: "inherit",
      marginBottom: theme.spacing.unit,
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
  });

const TextStyle = (theme: Theme) =>
  createStyles({
    root: {
      color: "inherit",
      margin: theme.spacing.unit,
    },
    h1: {
      fontSize: "4rem"
    },
    h2: {
      fontSize: "3rem"
    },
    h3: {
      fontSize: "2.5rem"
    },
    h4: {
      fontSize: "2rem"
    },
    paragraph: {
      fontSize: "1rem",
      textAlign: "justify"
    }
  });

export const HeadlineUnderline = withStyles(HeadlineUnderlineStyles)(
  Typography
);
export const Text = withStyles(TextStyle)(Typography);

/**
 * @deprecated use the specific HeadlineUnderline instead
 */
export default HeadlineUnderline; // for compatibility
