import React from "react";
import { FormControl, MenuItem, Box, TextField } from "@mui/material";

function FormSelect({ menuItem, placeholder, onChange, name, data, select }) {
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
          id="demo-simple-select"
          label={placeholder}
          name={name}
          onChange={onChange}
        >
          {menuItem.map((item, i) => {
            return (
              <MenuItem defaultValue={item} key={i}>
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
