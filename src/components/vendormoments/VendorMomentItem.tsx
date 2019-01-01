import React from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Typography
} from "@material-ui/core";
import { IVendorMoment } from "../../redux/initialState";

export interface IVendorMomentItemProps extends WithStyles<typeof styles> {
  className?: string;
  vendorMoment: IVendorMoment;
}

const styles = (theme: Theme) => createStyles({});

class VendorMomentItemComponent extends React.Component<
  IVendorMomentItemProps,
  {}
> {
  public render() {
    const { vendorMoment } = this.props;
    return (
      <li>
        <Typography variant="body1">
          {vendorMoment.label}:{" "} 
          {vendorMoment.date.map((d, i, array) => {
            let result = d.toLocaleDateString();
            if (array.length > i + 2) {
              result += ", ";
            } else if (array.length == i + 2) {
                result += " en "
            }
            return result;
          })}
        </Typography>
      </li>
    );
  }
}

export default withStyles(styles)(VendorMomentItemComponent);
