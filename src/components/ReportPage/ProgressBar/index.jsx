/* eslint-disable react/prop-types */
import {
  ProgressBarContainer,
  ProgressBarValue,
  BorderLinearProgress,
} from "./StylesProgressBar";

const ProgressBar = ({ progressValue }) => {
  return (
    <ProgressBarContainer>
      <BorderLinearProgress variant="determinate" value={progressValue} />
      <ProgressBarValue> {`${progressValue}%`} </ProgressBarValue>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
