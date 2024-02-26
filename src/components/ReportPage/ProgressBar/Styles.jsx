import { Box } from "@mui/material";
import { styled } from "@mui/system";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const ProgressBarContainer = styled(Box)({
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

  "@media (max-width: 800px)": {
    width: "140px",
    gridTemplateColumns: "1fr 30px",
  },
  "@media (max-width: 500px)": {
    width: "120px",
  },
  "@media (max-width: 450px)": {
    width: "100px",
  },
});

export const ProgressValue = styled(Box)({
  fontSize: "16px",
  fontWeight: 600,
  "@media (max-width: 500px)": {
    fontSize: "14px",
  },
});

export const BorderLinearProgress = styled(LinearProgress)({
  height: 10,
  borderRadius: 10,
  width: "80%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#e9eaeb",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: "#75FD71",
  },
});
