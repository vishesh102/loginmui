import React from "react";
import { Box, TextField } from "@mui/material";

function FormTextFieldsIndex({ size, variant, multiline, placeholder }) {
  return (
    <Box sx={{ mt: "1rem", mb: "1rem" }}>
      <TextField
        id="outlined-basic"
        label={placeholder}
        sx={{ background: "#F9F9F9" }}
        variant={variant}
        size={size}
        fullWidth
        multiline={multiline}
        rows={6}
      />
    </Box>
  );
}

export default FormTextFieldsIndex;
