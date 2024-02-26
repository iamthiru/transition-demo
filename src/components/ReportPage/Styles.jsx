import { deepPurple } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: deepPurple[400],

  },
  image: {
    width: 80,
    height: 80,
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 10px 8px rgba(0, 0, 0, 0.1)",

    "@media (max-width: 800px)": {
      width: 70,
      height: 70,
    },
  },
  icoon: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "top 0.5s ease-in-out",
  },
  chatbox: {
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
      width: "80%",
    },
    "@media (max-width: 600px)": {
      width: "90%",
    },
  },
  openChatbox: {
    opacity: 2,
  },
  transimageOpen: {
    top: "10%",
  },
  chatboxContainer:{
    height: '93%',
    padding: '5px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none', 
    'scrollbar-width': 'none',
  },
}));

export default useStyles;
