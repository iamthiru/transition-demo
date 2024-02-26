import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { TextBoxContainer,TextBox } from "./StylesFormContainer";

const FormContainer = () => {
  const btn = {
    backgroundColor: "#7e57c2",
    color: "#FFFFFF",
    textTransform: "none",
    boxShadow: "none !important",
    "&.Mui-disabled": {
      backgroundColor: "#a88fd4",
      color: "#cfcdcd",
    },
    "&:hover": {
      backgroundColor: "#7e57c2",
    },
    fontSize: "14px",
    fontWeight: 600,
  };
  const [value, setValue] = useState("");
  return (
    <TextBoxContainer>
      <TextBox>
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
                height: "10px",
              },
            },
          }}
        />
      </TextBox>
      <div className="">
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
    </TextBoxContainer>
  );
};

export default FormContainer;
