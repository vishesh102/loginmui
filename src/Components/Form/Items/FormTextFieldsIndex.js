import React from "react";
import { Box, TextField } from "@mui/material";

function FormTextFieldsIndex({
  size,
  name,
  onChange,
  type,
  variant,
  multiline,
  placeholder,
}) {
  const handleChange = () => {};
  return (
    <Box sx={{ mt: "1rem", mb: "1rem" }}>
      <TextField
        onChange={onChange}
        id="outlined-basic"
        label={placeholder}
        sx={{ background: "#F9F9F9" }}
        variant={variant}
        size={size}
        fullWidth
        name={name}
        multiline={multiline}
        rows={6}
        type={type}
      />
    </Box>
  );
}

export default FormTextFieldsIndex;
