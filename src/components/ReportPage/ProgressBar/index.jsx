/* eslint-disable react/prop-types */
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(() => ({
  ProgressBarContainer: {
    width: "170px",
    height: "30px",
    padding: "10px",
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",

    display: "grid",
    gridTemplateColumns: "1fr 50px",
    gridTemplateRows: "1fr",
    placeContent: "center",
    placeItems: "center",
  },
  progressValue: {
    fontSize: "16px",
    fontWeight: 600,
  }
}));

const BorderLinearProgress = withStyles(() => ({
  root: {
    height: 10,
    borderRadius: 10,
    width: "80%"
  },
  colorPrimary: {
    backgroundColor: "#e9eaeb",
  },
  bar: {
    borderRadius: 10,
    backgroundColor: "#75FD71",
  },
}))(LinearProgress);

const ProgressBar = ({progressValue}) => {
  const classes = useStyles();
  return (
    <div className={classes.ProgressBarContainer}>
      <BorderLinearProgress variant="determinate" value={progressValue} />
      <div className={classes.progressValue}> {`${progressValue}%`} </div>
    </div>
  );
};

export default ProgressBar;
