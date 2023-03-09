import React from "react";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material";

function FormSelectIndex() {
  return (
    <div>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    </div>
  );
}

export default FormSelectIndex;
