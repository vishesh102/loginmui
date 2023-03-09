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
      <TextField
        sx={{ background: "#F5F5F5" }}
        fullWidth
        multiline
        rows={2}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <Icon>
                <Image fontSize="6rem" />
              </Icon>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <ButtonIndex variant="outlined" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default UploadInput;
