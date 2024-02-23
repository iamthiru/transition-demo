import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: "calc(100vh - 50px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: "10px",
  },
  icoon: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    top: "0%",
    transition: "top 1s ease-in-out",
  },
  chatbox: {
    width: 400,
    height: 400,
    borderRadius: "20px",
    position: "relative",
    border: "2px solid",
  },
  chatboxOpen: {
    opacity: 1,
  },
  transimageOpen: {
    top: "-50%",
  },
}));

export default useStyles;
