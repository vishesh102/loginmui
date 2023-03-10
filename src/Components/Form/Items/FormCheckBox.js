import React from "react";
import { Box, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

function FormCheckBox({ label }) {
  return (
    <Box sx={{ m: "1rem 0" }}>
      <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
    </Box>
  );
}

export default FormCheckBox;
