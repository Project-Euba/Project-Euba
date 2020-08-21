import React, { useState } from "react";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import { makeStyles, colors } from "@material-ui/core";
import {
  Scheduler,
  Toolbar,
  ViewSwitcher,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  AppointmentForm,
  DateNavigator,
  AppointmentTooltip,
  Resources,
  DragDropProvider
} from "@devexpress/dx-react-scheduler-material-ui";
import Page from "../../components/Page";
import useWindowResize from "../../util/useWindowResize";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "100%",
  },
  addButton: {
    position: "absolute",
    bottom: theme.spacing(1) * 3,
    right: theme.spacing(1) * 4,
  },
}));

const TimeTableCell = (props) => {
  const schedulerHeaderHeight = 91; // height of default toolbar + D.O.W. bar
  const schedulerHeight = window.innerHeight - 68;
  return (
    <MonthView.TimeTableCell
      {...props}
      style={{ height: `${(schedulerHeight - schedulerHeaderHeight) / 6}px` }}
    />
  );
};

const TimelineView = () => {
  const classes = useStyles();

  // Stores the currently selected date, used for querying specific milestones
  // from the mongodb server through GraphQL and Apollo
  const [currentDate, setCurrentDate] = useState(new Date());

  // Stores all of the milestones for the given timerange in currentDate
  const [milestones, setMilestones] = useState([
    {
      id: 0,
      startDate: new Date(2020, 7, 3, 9, 45),
      endDate: new Date(2020, 7, 3, 13, 0),
      title: "Finish Robot Design",
      divisions: [4]
    },
    {
      id: 1,
      startDate: new Date(2020, 7, 10, 9, 45),
      endDate: new Date(2020, 7, 10, 13, 0),
      title: "Complete Build Finished",
      divisions: [3]
    },
    {
      id: 2,
      startDate: new Date(2020, 7, 13, 9, 45),
      endDate: new Date(2020, 7, 13, 13, 0),
      title: "Finish Wiring",
      divisions: [1]
    },
    {
      id: 3,
      startDate: new Date(2020, 7, 13, 9, 45),
      endDate: new Date(2020, 7, 13, 13, 0),
      title: "Finalize Programming",
      divisions: [2]
    },
    {
      id: 4,
      startDate: new Date(2020, 7, 19, 12, 0),
      endDate: new Date(2020, 7, 19, 13, 30),
      title: "Qualifier Match!",
      divisions: [5]
    },
    {
      id: 4,
      startDate: new Date(2020, 7, 30, 12, 0),
      endDate: new Date(2020, 7, 30, 13, 30),
      title: "Final Match!",
      divisions: [5]
    },
    {
      id: 6,
      startDate: new Date(2020, 8, 5, 12, 0),
      endDate: new Date(2020, 8, 5, 13, 30),
      title: "Fire Mitch and Euan",
      divisions: [2]
    }
  ]);

  // Stores the resource types for the timeline
  const colorIntensity = 600;
  const [resources, setResources] = useState([
    {
      fieldName: "divisions",
      title: "Division",
      allowMultiple: true,
      instances: [
        {
          text: "Electrical",
          id: 1,
          color: colors.purple[colorIntensity],
        },
        {
          text: "Programming",
          id: 2,
          color: colors.cyan[colorIntensity],
        },
        {
          text: "Build",
          id: 3,
          color: colors.green[colorIntensity],
        },
        {
          text: "3D Design",
          id: 4,
          color: colors.pink[colorIntensity],
        },
        {
          text: "Team Event",
          id: 5,
          color: colors.red[colorIntensity]
        },
        {
          text: "None",
          id: 0,
          color: colors.grey[colorIntensity],
        },
      ],
    },
  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    // Sees whether it's an add, change, or delete action and
    // edits the state accordingly
    setMilestones((prevState) => {
      let modifiedMilestones = prevState;
      if (added) {
        // Adds the new milestone to the array with a sequential ID
        const startingAddedId =
          prevState.length > 0
            ? modifiedMilestones[modifiedMilestones.length - 1].id + 1
            : 0;
        modifiedMilestones = [
          ...modifiedMilestones,
          { id: startingAddedId, ...added },
        ];
      } else if (changed) {
        // Goes through each milestone and modifies it with the changes
        modifiedMilestones = modifiedMilestones.map((milestone) =>
          changed[milestone.id]
            ? { ...milestone, ...changed[milestone.id] }
            : milestone
        );
      } else if (deleted !== undefined) {
        // Filters out the deleted milestone from the array
        modifiedMilestones = modifiedMilestones.filter(
          (milestone) => milestone.id !== deleted
        );
      }
      console.log(modifiedMilestones);
      return modifiedMilestones;
    });
  };
  return (
    <Page className={classes.root} title="Timeline">
      <Scheduler data={milestones}>
        <ViewState
          defaultCurrentViewName="Month"
          defaultCurrentDate={currentDate}
          onCurrentDateChange={setCurrentDate}
        />

        <EditingState onCommitChanges={commitChanges} />

        <IntegratedEditing />

        <DayView startDayHour={9} endDayHour={18} />

        <WeekView startDayHour={10} endDayHour={19} />

        <MonthView timeTableCellComponent={TimeTableCell} />

        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />

        <Appointments />
        <AppointmentTooltip showDeleteButton showOpenButton />
        <AppointmentForm />

        <DragDropProvider />

        <Resources data={resources} mainResourceName="divisions"/>
      </Scheduler>
    </Page>
  );
};

export default TimelineView;
