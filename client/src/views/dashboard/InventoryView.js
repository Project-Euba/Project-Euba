import React, { useState } from "react";
import useWindowResize from "../../util/useWindowResize";
import moment from "moment";
import clsx from "clsx";
import {
  makeStyles,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
} from "@material-ui/core";
import Page from "../../components/Page";
import IconCard from "../../components/IconCard";
import EubaTable from "../../components/EubaTable";
import HelperTooltip from "../../components/HelperTooltip";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "100%",
    padding: 20,
  },
  gridItem: {
    flex: 1,
  },
  iconCard: {
    maxWidth: "300px"
  }
}));

const TemplateView = () => {
  const classes = useStyles();
  const { height } = useWindowResize();
  const [outOfStockItems, setOutOfStockItems] = useState(0);
  const [tableData, setTableData] = useState({
    data: [
      {
        name: "Capacitors",
        description:
          "rgesgresgresgregres100ohm Capacitors for RoboRIO hookup or something",
        division_id: 1,
        quantity: 3,
        date_updated: new Date().toString(),
      },
      {
        name: "Laptop",
        description: "Lenovo laptops for programming",
        division_id: 2,
        quantity: 7,
        date_updated: new Date().toString(),
      },
      {
        name: "Metal Bars",
        description: "aluminum bars for robot frame",
        division_id: 0,
        quantity: 1,
        date_updated: new Date().toString(),
      },
    ],
  });
  return (
    <Page className={classes.root} title="Inventory">
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="stretch"
        style={{height: "100%"}}
      >
        <Grid item className={classes.gridItem}>
          {/* <Paper> */}
            <Grid container direction="row" justify="space-evenly" alignItems="center">
              <Grid item className={clsx(classes.gridItem, classes.iconCard)}>
                <IconCard
                  icon={CancelOutlinedIcon}
                  value={outOfStockItems}
                  description="Out of Stock Items"
                />
              </Grid>
              <Grid item className={clsx(classes.gridItem, classes.iconCard)}>
                <IconCard
                  icon={SentimentVerySatisfiedOutlinedIcon}
                  value={tableData?.data.length}
                  description="Total Items"
                />
              </Grid>
            </Grid>
          {/* </Paper> */}
        </Grid>
        <Grid item className={classes.gridItem}>
          <EubaTable
            title="Inventory Items"
            style={{ borderRadius: "5px" }}
            title={"Inventory"}
            options={{
              headerStyle: { position: "sticky", top: 0 },
              minBodyHeight: height / 2,
              maxBodyHeight: height / 2,
            }}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setTableData((prevState) => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setTableData((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setTableData((prevState) => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return { ...prevState, data };
                    });
                  }, 1000);
                }),
            }}
            columns={[
              {
                title: "Item",
                field: "name",
                // render: (rowData) => {
                //   return rowData.description ? (
                //     <React.Fragment>
                //       <Typography variant="h5">{rowData.name}</Typography>
                //       <Typography variant="caption">
                //         {rowData.description}
                //       </Typography>
                //     </React.Fragment>
                //   ) : (
                //     <Typography variant="h5">{rowData.name}</Typography>
                //   );
                // },
              },
              {
                title: "Description",
                field: "description",
                sorting: false,
                align: "center",
              },
              {
                title: "Division",
                field: "division_id",
                sorting: false,
                align: "center",
                emptyValue: "None",
                lookup: {
                  1: "Electrical",
                  2: "Programming",
                  3: "Build",
                  4: "3D Design",
                  0: "None",
                },
              },
              {
                title: "Quantity",
                field: "quantity",
                defaultSort: "desc",
                align: "center",
                type: "numeric",
                validate: (rowData) => rowData.quantity >= 0,
              },
              {
                title: "Last Updated",
                field: "date_updated",
                align: "right",
                // editable: false,
                editComponent: ({ value, ...props }) => (
                  <Typography>{moment(value).fromNow()}</Typography>
                ),
                render: (rowData) => moment(rowData.date_updated).fromNow(),
              },
            ]}
            data={tableData.data}
            actions={[
              {
                icon: () => (
                  <HelperTooltip
                    header="Inventory Management"
                    body={`This panel allows you to easily manage inventory within your team. 
                Use the button to the right to add an inventory item, and edit inventory items using the row actions.`}
                  />
                ),
                isFreeAction: true,
              },
            ]}
            localization={{
              body: {
                emptyDataSourceMessage: "No Inventory Items!",
                addTooltip: "Add Item",
                deleteTooltip: "Delete Item",
                editTooltip: "Edit Item",
                editRow: {
                  deleteText: "Delete Inventory Item?",
                },
              },
            }}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

export default TemplateView;
