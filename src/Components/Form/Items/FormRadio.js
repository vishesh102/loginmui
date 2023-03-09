import React from "react";
import { FormControlLabel, RadioGroup } from "@mui/material";
import Radio from "@mui/material/Radio";

function FormRadio({ radio1, radio2 }) {
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value={radio1} control={<Radio />} label={radio1} />
        <FormControlLabel value={radio2} control={<Radio />} label={radio2} />
      </RadioGroup>
    </div>
  );
}

export default FormRadio;
