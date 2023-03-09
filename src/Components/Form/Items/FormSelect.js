import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

function FormSelect({ menuItem, placeholder }) {
  const [item, setItem] = React.useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <Box sx={{ m: "0.5rem 0" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
        <Select
          size="small"
          sx={{ background: "#F5F5F5" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          label="Age"
          onChange={handleChange}
        >
          {menuItem.map((item, i) => {
            return (
              <MenuItem key={i} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default FormSelect;
