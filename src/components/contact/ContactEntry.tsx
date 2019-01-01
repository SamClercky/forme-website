import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Paper,
  Grid,
  Avatar,
  Typography
} from "@material-ui/core";
import { IContactInfo } from "../../resources";

export interface IContactEntryProps extends WithStyles<typeof styles> {
  className?: string;
  contact: IContactInfo;
}

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing.unit}px auto`,
      padding: theme.spacing.unit * 2
    },
    avatar: {
      margin: 10,
      width: 60,
      height: 60
    }
  });

class ContactEntryComponent extends React.Component<IContactEntryProps, {}> {
  public constructor(props: IContactEntryProps) {
    super(props);

    // this.state = {}

    // bind all eventListeners
    this.getInitials = this.getInitials.bind(this);
    this.getImage = this.getImage.bind(this);
  }
  private getInitials(name: string): string {
    return name
      .split(" ")
      .map(s => s.substr(0, 1))
      .reduce((prev, curr) => `${prev}${curr}`);
  }

  private getImage(): any {
    if (this.props.contact.imageUrl == undefined) {
      return this.getInitials(this.props.contact.name);
    } else {
      const description = `Profielfoto van ${this.props.contact.name}`;
      return (
        <img
          src={this.props.contact.imageUrl}
          alt={description}
          title={description}
        />
      );
    }
  }

  public render() {
    const { contact } = this.props;

    return (
      <Paper
        className={
          this.props.classes.paper + " " + (this.props.className || "")
        }
      >
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar className={this.props.classes.avatar}>{this.getImage()}</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant="h6">{contact.function}</Typography>
            <Typography><strong>{contact.name}: </strong>{contact.description}</Typography>
            <ul>
              {contact.communication.map(comm => {
                return (
                  <li key={comm.type}>
                    <Typography>
                      {comm.label}:{" "}
                      <a href={`${comm.type}${comm.url}`}>{comm.adres}</a>
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(ContactEntryComponent);
