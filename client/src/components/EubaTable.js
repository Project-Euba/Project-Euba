import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import MaterialTable from "material-table";
import tableIcons from "../theme/TableIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  }
}));

const TemplateView = ({ style, options, title, ...props }) => {
  return (
    <MaterialTable
        style={{borderRadius: "0px", ...style}}
        icons={tableIcons}
        title={<Typography variant="h4">{title}</Typography>}
        options={{
          rowStyle: {
            fontFamily: "Roboto"
          },
          ...options
        }}
        {...props}
      />
  )
}

export default TemplateView;
