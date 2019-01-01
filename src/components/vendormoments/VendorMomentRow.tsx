import React from "react"
import { withStyles, createStyles, WithStyles, Theme } from '@material-ui/core'
import { resources } from "../../resources";
import VendorMomentItem from "./VendorMomentItem";

export interface IVendorMomentRowProps extends WithStyles<typeof styles> {
    className?: string
}

const styles = (theme: Theme) => createStyles({})

class VendorMomentRowComponent extends React.Component<IVendorMomentRowProps, {}> {
    public render() {
        return (
            <ul>
                {resources.vendorMoments.map(vm => {
                    return (
                        <VendorMomentItem vendorMoment={vm} key={vm.label} />
                    )
                })}
            </ul>
        )
    }
}

export default withStyles(styles)(VendorMomentRowComponent)