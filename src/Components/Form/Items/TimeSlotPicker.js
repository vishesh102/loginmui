import * as React from "react";

import { Input, TextField } from "@mui/material";
import { Label } from "@mui/icons-material";

function TimeSlotPicker({ label, onChange, name }) {
  return (
    <>
      <label style={{ margin: " 0 4rem" }}>{label}</label>
      <Input type="time" name={name} onChange={onChange} />
    </>
  );
}
export default TimeSlotPicker;
