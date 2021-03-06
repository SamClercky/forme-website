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
import { IVendorMoment } from '../../redux/initialState';
import { Text } from "../common/Headline";
import LazyLoad from 'react-lazyload';
import { IGoToShowcaseArrowProps } from '../showcase/GoToShowcaseArrow';
import { DateDiff } from '../../utils/DateDiff';
import { any } from "prop-types";

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

interface IVendorMomentItemState {
  showCountDown: boolean,
  interval: NodeJS.Timeout | undefined, // setInterval return type
  newTime: Date,
}

class VendorMomentItemComponent extends React.Component<
  IVendorMomentItemProps,
  IVendorMomentItemState
  > {

  state: IVendorMomentItemState = {
    showCountDown: false,
    interval: undefined,
    newTime: new Date(),
  }

  constructor(props: IVendorMomentItemProps) {
    super(props);

    this.getImage = this.getImage.bind(this);
    this.getInitials = this.getInitials.bind(this);
    // this.onNewSecond = this.onNewSecond.bind(this);
  }

  componentWillMount() {
    const now = new Date(Date.now());
    const weeksToGo = DateDiff.inWeeks(now, this.props.vendorMoment.date[0])
    // console.log(weeksToGo);

    if (weeksToGo < 1 && weeksToGo >= 0) {
      // const interval: NodeJS.Timeout = setInterval(this.onNewSecond, 1000);
      this.setState({
        showCountDown: true,
        newTime: now,
        // interval: interval
      })
    }
  }

  // componentWillUnmount() {
  //   if (this.state.interval != undefined) {
  //     clearInterval(this.state.interval);
  //   }
  // }

  // onNewSecond() {
  //   this.setState({
  //     newTime: new Date(Date.now())
  //   })
  // }

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

  countDownMessage(date: Date) {
    let result = "Nog ";
    const nu = new Date(Date.now());
    const refTime = new Date();
    refTime.setHours(24, 60, 60, 1000);
    const aantalDagen = DateDiff.inDays(
      nu,
      date);
    // const aantalUur = DateDiff.inHours(
    //   refTime, nu
    // );
    // const aantalMinuten = DateDiff.inMinutes(
    //   refTime, nu
    // );
    // const aantalSeconten = DateDiff.inSeconds(
    //   refTime, nu
    // );

    result += aantalDagen;

    if (aantalDagen == 1) {
      result += " dag, "
    } else {
      result += " dagen, "
    }

    // result += `${aantalUur}u ${aantalMinuten}min ${aantalSeconten}s `

    result += "wachten ...";

    return result;
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
            {
              (this.state.showCountDown) ?
                <Text>{this.countDownMessage(
                  this.props.vendorMoment.date[0]
                )}</Text>:
                null
            }
            <Text>{vendorMoment.description}</Text>
            <ul>
              {vendorMoment.date.map((d, i, array) => {
                let result = d.toLocaleDateString();
                return (<li key={result}><Text>{result}</Text></li>);
              })}
            </ul>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(VendorMomentItemComponent);
