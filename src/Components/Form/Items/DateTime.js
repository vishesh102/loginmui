import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";
function DateTime() {
  return (
    <Box sx={{ width: "100%", display: "flex", m: "1rem 0" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker sx={{ width: "48%" }} />
      </LocalizationProvider>
    </Box>
  );
}

export default DateTime;
