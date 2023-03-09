import React from "react";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

function FormCheckBox({ label }) {
  return (
    <div>
      <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
    </div>
  );
}

export default FormCheckBox;
