import React from "react";
import { FormControl, MenuItem, Box, TextField } from "@mui/material";

function FormSelect({ menuItem, placeholder, onChange, name, select }) {
  return (
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
        sx={{ m: "1rem 0", background: "#F9F9F9", margin: "dence" }}
        id="demo-simple-select"
        label={placeholder}
        name={name}
        defaultValue=""
        onChange={onChange}
      >
        {menuItem.map((item, i) => {
          return (
            <MenuItem value={item} key={i}>
              {item}
            </MenuItem>
          );
        })}
      </TextField>
    </FormControl>
  );
}

export default FormSelect;
