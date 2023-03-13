import React from "react";
import { Box, TextField } from "@mui/material";

function FormTextFieldsIndex({
  size,
  name,
  rows,
  refe,
  onChange,
  type,
  id,
  variant,
  multiline,
  placeholder,
}) {
  const handleChange = () => {};
  return (
    <Box sx={{ mt: "1rem", mb: "1rem" }}>
      <TextField
        onChange={onChange}
        id={id}
        label={placeholder}
        sx={{ background: "#F9F9F9" }}
        variant={variant}
        size={size}
        ref={refe}
        fullWidth
        name={name}
        multiline={multiline}
        rows={rows}
        type={type}
      />
    </Box>
  );
}

export default FormTextFieldsIndex;
