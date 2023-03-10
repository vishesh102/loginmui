import React from "react";
import {
  FormControl,
  InputLabel,
  select,
  MenuItem,
  Box,
  TextField,
} from "@mui/material";

function FormSelect({ menuItem, placeholder, select }) {
  const [item, setItem] = React.useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <Box sx={{ m: "1rem 0" }}>
      <FormControl fullWidth>
        {/* <InputLabel
          size="small"
          sx={{ p: "0 -2rem" }}
          id="demo-simple-select-label"
        >
          {placeholder}
        </InputLabel> */}
        <TextField
          select={select}
          size="small"
          sx={{ background: "#F9F9F9", margin: "dence" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          label={placeholder}
          onChange={handleChange}
        >
          {menuItem.map((item, i) => {
            return (
              <MenuItem key={i} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </TextField>
      </FormControl>
    </Box>
  );
}

export default FormSelect;
