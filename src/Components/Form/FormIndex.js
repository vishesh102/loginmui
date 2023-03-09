import { Box, display } from "@mui/system";
import React from "react";
import ButtonIndex from "../Button/ButtonIndex";

import FormSelect from "./Items/FormSelect";
import FormTextFieldsIndex from "./Items/FormTextFieldsIndex";
import UploadInput from "./Items/UploadInput";

function FormIndex() {
  const state = ["up", "uk", "punjab"];
  const city = ["modinagar", "chandigarh", "ghaziabd"];
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ mb: "2rem" }}>
        <h1>Create an account</h1>
        <p>Describe yourself as clearly so that there is no mistake</p>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "48%" }}>
          <FormTextFieldsIndex
            variant="outlined"
            size="small"
            placeholder="Enter Your First Name"
          />
        </Box>
        <Box sx={{ width: "48%" }}>
          <FormTextFieldsIndex
            variant="outlined"
            size="small"
            placeholder="Enter Your Last Name"
          />
        </Box>
      </Box>
      <Box>
        <FormTextFieldsIndex
          variant="outlined"
          size="small"
          placeholder="Enter Your Email Id Name"
        />
      </Box>
      <Box>
        <FormTextFieldsIndex
          placeholder="Additional Message"
          multiline={true}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "48%" }}>
          <FormSelect menuItem={state} placeholder="chose your state" />
        </Box>
        <Box sx={{ width: "48%" }}>
          <FormSelect menuItem={city} placeholder="chose your city" />
        </Box>
      </Box>
      <UploadInput placeholder="Upload A Profile Picture. Max Size 2MB" />
    </Box>
  );
}

export default FormIndex;
