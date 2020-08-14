import React, { useState } from "react";
import useWindowResize from "../../util/useWindowResize";
import moment from "moment";
import { makeStyles, Typography, Box, Container } from "@material-ui/core";
import Page from "../../components/Page";
import MTableToolbar from "material-table";
import EubaTable from "../../components/EubaTable";
import HelperTooltip from "../../components/HelperTooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
  },
  secondToolbar: {
    padding: "0px 10px",
    buttons: {
      height: 40,
      width: 40
    },
    leftContainer: {
      float: "left",
      height: "40",
      width: "50%",
      overflow: "auto"
    },
    rightContainer: {
      float: "right",
      height: 40,
      width: "50%",
      overflow: "auto"
    }
  }
}));

const TemplateView = () => {
  const classes = useStyles();
  const { height } = useWindowResize();
  const [tableData, setTableData] = useState([
    {
      name: "Capacitors",
      description:
        "rgesgresgresgregres100ohm Capacitors for RoboRIO hookup or something",
      division: {
        _id: 2,
        name: "Electrical",
      },
      quantity: 3,
      date_updated: new Date().toString(),
    },
    {
      name: "Laptop",
      description: "Lenovo laptops for programming",
      division: {
        _id: 1,
        name: "Programming",
      },
      quantity: 7,
      date_updated: new Date().toString(),
    },
    {
      name: "Metal Bars",
      description: "aluminum bars for robot frame",
      division: null,
      quantity: 1,
      date_updated: new Date().toString(),
    },
  ]);
  return (
    <Page className={classes.root} title="Inventory">
      <EubaTable
        title="Inventory Items"
        style={{ height: "100%" }}
        title={"Inventory"}
        detailPanel={
          rowData => <HelperTooltip header="Poggers" body="This is a test" />
        }
        options={{
          headerStyle: { position: "sticky", top: 0 },
          minBodyHeight: height - 181,
          maxBodyHeight: height - 181,
        }}
        className={classes.root}
        columns={[
          {
            title: "Item",
            field: "name",
            render: (rowData) => {
              return rowData.description ? (
                <React.Fragment>
                  <Typography variant="h5">{rowData.name}</Typography>
                  <Typography variant="caption">
                    {rowData.description}
                  </Typography>
                </React.Fragment>
              ) : (
                <Typography variant="h5">{rowData.name}</Typography>
              );
            },
          },
          {
            title: "Division",
            field: "division.name",
            sorting: false,
            align: "center",
            emptyValue: "None",
          },
          {
            title: "Quantity",
            field: "quantity",
            defaultSort: "desc",
            align: "center",
          },
          {
            title: "Last Updated",
            field: "date_updated",
            align: "right",
            render: (rowData) => moment(rowData.date_updated).fromNow(),
          },
        ]}
        // components={{
        //   Toolbar: props => (
        //     <React.Fragment>
        //       <MTableToolbar {...props}/>
        //         <Box className={classes.secondToolbar}>
                  
        //         </Box>
        //     </React.Fragment>
        //   )
        // }}
        data={tableData}
      />
    </Page>
  );
};

export default TemplateView;
