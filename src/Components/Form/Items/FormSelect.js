import React from "react";
import { FormControl, MenuItem, Box, TextField } from "@mui/material";

function FormSelect({ menuItem, placeholder, select, onChange, name }) {
  const [item, setItem] = React.useState("");

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
          name={name}
          label={placeholder}
          onChange={onChange}
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
