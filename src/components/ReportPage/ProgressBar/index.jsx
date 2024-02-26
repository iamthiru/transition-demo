/* eslint-disable react/prop-types */
import {
  BorderLinearProgress,
  ProgressBarContainer,
  ProgressValue,
} from "./Styles";

const ProgressBar = ({ progressValue }) => {
  return (
    <ProgressBarContainer>
      <BorderLinearProgress variant="determinate" value={progressValue} />
      <ProgressValue> {`${progressValue}%`} </ProgressValue>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
