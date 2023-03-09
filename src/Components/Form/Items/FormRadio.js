import React from "react";
import { FormControlLabel, RadioGroup } from "@mui/material";
import Radio from "@mui/material/Radio";

function FormRadio() {
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </div>
  );
}

export default FormRadio;
