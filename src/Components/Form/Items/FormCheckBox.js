import React from "react";
import { Box, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

function FormCheckBox({ label }) {
  return (
    <FormControlLabel
      sx={{ m: "1rem 0" }}
      control={<Checkbox defaultChecked />}
      label={label}
    />
  );
}

export default FormCheckBox;
