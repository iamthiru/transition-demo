import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#e9eaeb",
    borderRadius: "20px",
  },
  textbox: {
    width: "80%",
    "& .MuiOutlinedInput-root": {
        borderRadius: "10px"
    },
    "& .MuiTextField-root": {
        margin: 0
    }
  },
  btnContainer: {},
  customBtn: {
  },
}));

const FormContainer = () => {
  const classes = useStyles();
  const btn = {
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
  }
  const [value, setValue] = useState("");
  return (
    <div className={classes.container}>
      <div className={classes.textbox}>
        <TextField
          id="outlined-basic"
          margin="normal"
          variant="outlined"
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="this is placeholder"
          InputProps={{
            inputProps: {
              style: {
                fontSize: 16,
                fontWeight: 500,
                width: "250px",
                height: "10px",
              },
            },
          }}
        />
      </div>
      <div className={classes.btnContainer}>
        <Button
          variant="contained"
          size="small"
          onClick={() => console.log({ value })}
          disabled={value.length === 0}
          sx={btn}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default FormContainer;
