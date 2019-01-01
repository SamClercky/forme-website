import React from "react"
import { withStyles, createStyles, WithStyles, Theme } from '@material-ui/core'
import VendorMomentItem from "./VendorMomentItem";
import { IAppState, IVendorMoment } from "../../redux/initialState";
import { connect } from "react-redux";

export interface IVendorMomentRowProps extends WithStyles<typeof styles> {
    className?: string,
    vendorMoments?: IVendorMoment[]
}

const styles = (theme: Theme) => createStyles({})

class VendorMomentRowComponent extends React.Component<IVendorMomentRowProps, {}> {
    public render() {
        return (
            <ul>
                {this.props.vendorMoments != undefined ? this.props.vendorMoments.map(vm => {
                    return (
                        <VendorMomentItem vendorMoment={vm} key={vm.label} />
                    )
                }): null}
            </ul>
        )
    }
}

const mapStateToProps = (state: IAppState, props: IVendorMomentRowProps) => {
    return {
        vendorMoments: state.vendorMoments
    }
}

export default withStyles(styles)(connect(mapStateToProps)(VendorMomentRowComponent))