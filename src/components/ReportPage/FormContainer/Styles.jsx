import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled(Box)({
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#e9eaeb",
    borderRadius: "20px",
})

export const TextBox = styled(Box)({
    width: "80%",
    "& .MuiOutlinedInput-root": {
        borderRadius: "10px"
    },
    "& .MuiTextField-root": {
        margin: 0
    },
    "@media (max-width: 800px)": {
      width: "70%",
    },
    "@media (max-width: 450px)": {
      width: "60%",
    },
})

export const CustomButton = styled(Button)({
    backgroundColor: "#7e57c2",
    color: "#FFFFFF",
    textTransform: 'none',
    boxShadow: 'none !important',
    '&.Mui-disabled': {
      backgroundColor: "#a88fd4",
      color: "#cfcdcd",
    },
    '&:hover': {
      backgroundColor: "#7e57c2",
    },
    fontSize: "14px",
    fontWeight: 600
})