import { LinearProgress } from '@mui/material'
import {Box, styled} from '@mui/system'

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
})

export const ProgressBarValue = styled(Box)({
    fontSize: "16px",
    fontWeight: 600,
    "@media (max-width: 500px)": {
      fontSize: "14px",
    },
})

export const BorderLinearProgress = styled(LinearProgress)({
    height: "10px",
    borderRadius: "10px",
    width: "80%",
    backgroundColor: "#e9eaeb",
    "& .MuiLinearProgress-bar": {
      borderRadius: "10px",
      backgroundColor: "#75FD71",
    },
    "@media (max-width: 800px)": {
      width: "70%",
    },
    "@media (max-width: 500px)": {
      width: "60%",
    },
    "@media (max-width: 450px)": {
      width: "50%",
    },
})