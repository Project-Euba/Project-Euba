import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { MTableEditRow, MTableEditField } from "material-table";
import MaterialTable from "material-table";
import tableIcons from "../theme/TableIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  roboto: {
    fontFamily: "Roboto"
  }
}));

const EubaTable = ({ style, options, title, ...props }) => {
  let classes = useStyles();
  return (
    <MaterialTable
      style={{ borderRadius: "0px", ...style }}
      icons={tableIcons}
      title={<Typography variant="h4">{title}</Typography>}
      options={{
        rowStyle: {
          fontFamily: "Roboto",
        },
        actionsColumnIndex: -1,
        ...options,
      }}
      components={{
        EditRow: (tableProps) => {
          return (
            <MTableEditRow
              {...{
                ...tableProps,
                onBulkEditRowChanged:
                  typeof tableProps.onBulkEditRowChanged === "function"
                    ? tableProps.onBulkEditRowChanged
                    : () => {},
              }}
            />
          );
        }
      }}
      {...props}
    />
  );
};

export default EubaTable;
