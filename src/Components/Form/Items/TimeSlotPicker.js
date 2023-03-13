import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { Input, TextField } from "@mui/material";

function TimeSlotPicker({ label, onChange, name }) {
  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <DemoContainer
    //     components={[
    //       "TimePicker",
    //       "MobileTimePicker",
    //       "DesktopTimePicker",
    //       "StaticTimePicker",
    //     ]}
    //   >
    //     <DemoItem label={label}>
    //       <MobileTimePicker
    //         // name={name}
    //         // onChange={onChange}
    //         defaultValue={dayjs("2022-04-17T15:30")}
    //       />
    //     </DemoItem>
    //   </DemoContainer>
    // </LocalizationProvider>
    <div>
      <Input type="date-time" />
    </div>
  );
}
export default TimeSlotPicker;
