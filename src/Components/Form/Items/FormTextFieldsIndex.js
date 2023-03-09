import React from "react";
import { Box, TextField } from "@mui/material";

function FormTextFieldsIndex({ size, variant, multiline, placeholder }) {
  return (
    <Box sx={{ mt: "0.5rem", mb: "0.5rem" }}>
      <TextField
        id="outlined-basic"
        label={placeholder}
        sx={{ background: "#F5F5F5" }}
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
