import React from "react";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

function FormCheckBox() {
  return (
    <div>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    </div>
  );
}

export default FormCheckBox;
