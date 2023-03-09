import React from "react";
import FormTextFieldsIndex from "./FormTextFieldsIndex";
import { Box } from "@mui/system";
import ButtonIndex from "../../Button/ButtonIndex";
import { Stack, TextField, Button, Icon } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Image } from "@mui/icons-material";

function UploadInput() {
  return (
    <Box>
      <Box
        sx={{
          background: "#F5F5F5",
          border: "1px solid gray",
          display: "flex",
          justifyContent: "space-between",
          p: "1rem",
          borderRadius: "0.3rem",
          color: "gray",
        }}
        fullWidth
      >
        <Icon>
          <Image fontSize="6rem" />
        </Icon>
        Upload A Profile Picture. Max Size 2MB
        <ButtonIndex variant="outlined" />
      </Box>
    </Box>
  );
}

export default UploadInput;
