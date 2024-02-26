import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { Container, CustomButton, TextBox } from "./Styles";

const FormContainer = () => {
  const [value, setValue] = useState("");
  return (
    <Container>
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
      <Box>
        <CustomButton
          variant="contained"
          size="small"
          onClick={() => console.log({ value })}
          disabled={value.length === 0}
        >
          Send
        </CustomButton>
      </Box>
    </Container>
  );
};

export default FormContainer;
