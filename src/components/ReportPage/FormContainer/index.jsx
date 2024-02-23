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
    "& .MuiOutlinedInput-root": {
        borderRadius: "10px"
    },
    "& .MuiTextField-root": {
        margin: 0
    }
  },
  btn: {},
}));

const FormContainer = () => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  return (
    <div className={classes.container}>
      <div className={classes.textbox}>
        <TextField
          id="outlined-basic"
          margin="normal"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
      <div className={classes.btn}>
        <Button
          variant="contained"
          size="small"
          onClick={() => console.log({ value })}
          disabled={value.length === 0}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default FormContainer;
