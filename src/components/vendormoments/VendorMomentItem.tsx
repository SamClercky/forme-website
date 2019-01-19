import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Paper,
  Grid,
  Avatar
} from "@material-ui/core";
import { IVendorMoment } from "../../redux/initialState";
import { Text } from "../common/Headline";
import LazyLoad from 'react-lazyload';

export interface IVendorMomentItemProps extends WithStyles<typeof styles> {
  className?: string;
  vendorMoment: IVendorMoment;
}

const styles = (theme: Theme) => createStyles({
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

class VendorMomentItemComponent extends React.Component<
  IVendorMomentItemProps,
  {}
  > {

  constructor(props: IVendorMomentItemProps) {
    super(props);

    this.getImage = this.getImage.bind(this);
    this.getInitials = this.getInitials.bind(this);
  }

  private getInitials(name: string): string {
    return name
      .split(" ")
      .map(s => s.substr(0, 1))
      .reduce((prev, curr) => `${prev}${curr}`)
      .toUpperCase();
  }

  private getImage(): any {
    if (this.props.vendorMoment.image == undefined) {
      return this.getInitials(this.props.vendorMoment.label);
    } else {
      const description = `Profielfoto van ${this.props.vendorMoment.image}`;
      return (
        <LazyLoad height="60">
          <img
            src={this.props.vendorMoment.image}
            alt={description}
            title={description}
          />
        </LazyLoad>
      );
    }
  }
  public render() {
    const { vendorMoment } = this.props;
    return (
      // <li>
      //   <Text variant="body1">
      //     {vendorMoment.label}:{" "} 
      //     {vendorMoment.date.map((d, i, array) => {
      //       let result = d.toLocaleDateString();
      //       if (array.length > i + 2) {
      //         result += ", ";
      //       } else if (array.length == i + 2) {
      //           result += " en "
      //       }
      //       return result;
      //     })}
      //   </Text>
      // </li>
      <Paper
        className={
          this.props.classes.paper + " " + (this.props.className || "")
        }
      >
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar className={this.props.classes.avatar}>
              {this.getImage()}
            </Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Text variant="h6">{vendorMoment.label}</Text>
            <Text>{vendorMoment.description}</Text>
            <ul>
              {vendorMoment.date.map((d, i, array) => {
                let result = d.toLocaleDateString();
                return (<li key={result}>{result}</li>);
              })}
            </ul>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(VendorMomentItemComponent);
