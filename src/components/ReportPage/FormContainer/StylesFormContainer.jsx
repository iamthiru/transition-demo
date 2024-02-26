import { Box, styled } from "@mui/system";

export const TextBoxContainer = styled(Box)({
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#e9eaeb",
    borderRadius: "20px",
});

export const TextBox = styled(Box)({
    width: "80%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
    },
    "& .MuiTextField-root": {
      margin: 0,
    },
    "@media (max-width: 800px)": {
      width: "70%",
    },
    "@media (max-width: 450px)": {
      width: "60%",
    },
})

