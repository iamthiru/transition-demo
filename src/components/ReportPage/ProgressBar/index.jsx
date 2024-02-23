import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(() => ({
  ProgressBarContainer: {
    width: "30%",
    height: "10px",
    padding: "10px",
    backgroundColor: "lightslategrey",
    borderRadius: "20px",
  },
}));

const BorderLinearProgress = withStyles(() => ({
  root: {
    height: 10,
    borderRadius: 10,
  },
  colorPrimary: {
    backgroundColor: "#e9eaeb",
  },
  bar: {
    borderRadius: 10,
    backgroundColor: "#75FD71",
  },
}))(LinearProgress);

const ProgressBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.ProgressBarContainer}>
      <BorderLinearProgress variant="determinate" value={45} />
      <spa> 45% </spa>
    </div>
  );
};

export default ProgressBar;
