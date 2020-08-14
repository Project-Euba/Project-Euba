import React from "react";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import { HelpCircle } from "react-feather";

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
      <IconButton aria-label="help"  {...props}>
        <HelpCircle />
      </IconButton>
    </Tooltip>
  );
};

export default HelperTooltip;
