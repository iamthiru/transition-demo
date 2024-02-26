import { Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { styled } from "@mui/system";

export const Wrapper = styled(Box)({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  backgroundColor: deepPurple[400],
});

export const Icon = styled(Box)({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  transition: "top 0.5s ease-in-out",
});

export const Image = styled("img")({
  width: 80,
  height: 80,
  borderRadius: "10px",
  backgroundColor: "#fff",
  boxShadow: "0px 10px 8px rgba(0, 0, 0, 0.1)",

  "@media (max-width: 800px)": {
    width: 70,
    height: 70,
  },
});

export const ChatBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "50px 1fr 70px",
  gridRowGap: "10px",

  backgroundColor: "#D3CFE2",
  width: "60%",
  height: "80%",
  padding: "30px",
  borderRadius: "3rem",
  boxShadow: "0px 0px 17px 1px #888888",
  opacity: 0,
  transition: "opacity 1s ease-in-out",

  "@media (max-width: 800px)": {
    width: "80%",
  },
  "@media (max-width: 600px)": {
    width: "90%",
  },
});

export const ChatItems = styled(Box)({
  height: "93%",
  padding: "5px",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none",
  "scrollbar-width": "none",
});
