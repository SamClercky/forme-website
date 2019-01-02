import React, { ReactElement } from "react";
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  IconButton,
  Tooltip,
  Popper,
  Fade,
  Paper,
  Popover,
  Collapse,
  CardContent
} from "@material-ui/core";
import { Share } from "@material-ui/icons";
import {
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton
} from "react-share";

export interface IShareButtonProps extends WithStyles<typeof styles> {
  className?: string;
  id: string;
  sharableUrl: string;
}

const styles = (theme: Theme) => createStyles({});

interface IShareButtonState {
  open: boolean;
}

class ShareButtonComponent extends React.Component<
  IShareButtonProps,
  IShareButtonState
> {
  state = {
    open: false
  };

  public constructor(props: IShareButtonProps) {
      super(props)
  
      // bind all eventListeners
      this.onHover = this.onHover.bind(this)
  }

  onHover(e: React.MouseEvent) {
      e.stopPropagation()
      e.preventDefault()
      this.setState(state => ({
          open: !state.open
      }))
  }

  public render() {
    const id = this.state.open ? "shareBtnPopper" + this.props.id : undefined;

    return (
      <>
        <IconButton onClick={this.onHover}>
          <Share />
        </IconButton>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <CardContent>
            <FacebookShareButton url={this.props.sharableUrl} />
            <LinkedinShareButton url={this.props.sharableUrl} />
            <TwitterShareButton url={this.props.sharableUrl} />
            <WhatsappShareButton url={this.props.sharableUrl} />
            {/* <PinterestShareButton url={this.props.sharableUrl} /> */}
            <EmailShareButton url={this.props.sharableUrl} />
          </CardContent>
        </Collapse>
      </>
    );
  }
}

export default withStyles(styles)(ShareButtonComponent);
