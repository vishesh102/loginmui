import React from "react";

import { Box } from "@mui/system";
import ButtonIndex from "../../Button/ButtonIndex";
import { Icon } from "@mui/material";

import { Image } from "@mui/icons-material";

function UploadInput() {
  return (
    <Box>
      <Box
        sx={{
          background: "#F5F5F5",
          border: "1px dashed gray",
          display: "flex",
          justifyContent: "space-between",
          p: "1rem",
          borderRadius: "0.3rem",
          m: "0.5rem 0",
        }}
        fullWidth
      >
        <Icon>
          <Image fontSize="6rem" />
        </Icon>
        Upload A Profile Picture. Max Size 2MB
        <ButtonIndex
          color="gray"
          background="white"
          variant="outlined"
          text="Upload"
          selectImg={<input hidden accept="image/*" multiple type="file" />}
        />
      </Box>
    </Box>
  );
}

export default UploadInput;
