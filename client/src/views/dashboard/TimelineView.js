import React from "react";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { makeStyles, Paper } from "@material-ui/core";
import {
  Scheduler,
  Toolbar,
  ViewSwitcher,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  DateNavigator,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import Page from "../../components/Page";
import useWindowResize from "../../util/useWindowResize";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "100%",
  },
}));

const schedulerData = [
  {
    startDate: "2020-08-01T09:45",
    endDate: "2020-08-01T11:00",
    title: "Finish Robot",
  },
  {
    startDate: "2020-08-02T12:00",
    endDate: "2020-08-02T13:30",
    title: "Big Match or Whatever",
  },
];

const TimeTableCell = (props) => {
  const { height } = useWindowResize();
  console.log(height);
  const schedulerHeaderHeight = 91; // height of default toolbar + D.O.W. bar
  const schedulerHeight = height - 68;
  return (
    <MonthView.TimeTableCell
      {...props}
      style={{ height: `${(schedulerHeight - schedulerHeaderHeight) / 6}px` }}
    />
  );
};

const TimelineView = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Timeline">
      <Scheduler data={schedulerData}>
        <ViewState defaultCurrentViewName="Month" />

        <DayView startDayHour={9} endDayHour={18} />

        <WeekView startDayHour={10} endDayHour={19} />

        <MonthView timeTableCellComponent={TimeTableCell} />

        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />

        <Appointments />
        <AppointmentTooltip showCloseButton showOpenButton />
      </Scheduler>
    </Page>
  );
};

export default TimelineView;
