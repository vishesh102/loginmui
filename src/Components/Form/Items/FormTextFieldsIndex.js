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
    <TextField
      sx={{ m: "1rem 0", background: "#F9F9F9" }}
      onChange={onChange}
      id={id}
      label={placeholder}
      variant={variant}
      size={size}
      ref={refe}
      name={name}
      fullWidth
      multiline={multiline}
      rows={rows}
      type={type}
    />
  );
}

export default FormTextFieldsIndex;
