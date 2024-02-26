import { deepPurple } from "@mui/material/colors";
import { Box } from "@mui/system";
import {styled} from "@mui/system";

export const MainContainer = styled(Box)({
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: deepPurple[400],
})

export const StyledIconBox = styled(Box)({
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    top: "50%",
    transition: "top 0.5s ease-in-out",
  });

export const StyledImage = styled('img')({
    width: 80,
    height: 80,
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 10px 8px rgba(0, 0, 0, 0.1)",
})

export const StyledChatBox = styled(Box)({ 
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "50px 1fr 70px",
    gridRowGap: "10px",
    backgroundColor: "#D3CFE2",
    width: '60%',
    height: '80%',
    padding: '30px',
    borderRadius: '3rem',
    boxShadow: '0px 0px 17px 1px #888888',
    opacity: 0,
    transition: "opacity 1s ease-in-out",

    "@media (max-width: 800px)": {
      width: '80%',
    },
});

export const StyledChatBoxContainer = styled(Box)({
    height: '93%',
    padding: '5px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    msOverflowStyle: 'none', 
    scrollbarWidth: 'none',
})