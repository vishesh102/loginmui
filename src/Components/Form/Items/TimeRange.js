import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MultiInputTimeRangeField } from "@mui/x-date-pickers-pro/MultiInputTimeRangeField";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro/SingleInputTimeRangeField";
import { LabelImportant } from "@mui/icons-material";
import { InputLabel } from "@mui/material";

function TimeRange() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["MultiInputTimeRangeField", "SingleInputTimeRangeField"]}
      >
        <InputLabel>Doctor Shift Timings</InputLabel>
        <MultiInputTimeRangeField
          slotProps={{
            textField: ({ position }) => ({
              label: position === "start" ? "From" : "To",
            }),
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
export default TimeRange;
