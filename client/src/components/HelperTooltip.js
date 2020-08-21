import React from "react";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import HelpOutlineOutlined from "@material-ui/icons/HelpOutlineOutlined";

const HelperTooltip = ({ header, body, ...props }) => {
  return (
    <Tooltip
      title={
        <React.Fragment>
          <Typography variant="h6">{header}</Typography>
          <Typography variant="caption">{body}</Typography>
        </React.Fragment>
      }
      arrow={true}
      interactive={true}
      enterDelay={300}
      leaveDelay={50}
    >
      {/* <IconButton aria-label="help" disableRipple={true} disableFocusRipple={true} {...props}> */}
        <HelpOutlineOutlined {...props}/>
      {/* </IconButton> */}
    </Tooltip>
  );
};

export default HelperTooltip;
