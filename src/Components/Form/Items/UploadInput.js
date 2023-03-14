import React from "react";

import { Box } from "@mui/system";
import ButtonIndex from "../../Button/ButtonIndex";
import { Icon } from "@mui/material";

import { Image } from "@mui/icons-material";

function UploadInput() {
  const handleClick = () => {
    console.log("upload clicked");
  };
  return (
    <Box
      sx={{
        background: "#F9F9F9",
        border: "1px dashed gray",
        display: "flex",
        justifyContent: "space-between",
        p: "1rem",
        borderRadius: "0.3rem",
        m: "1rem 0",
      }}
    >
      <Icon>
        <Image sx={{ color: "primary.main" }} fontSize="6rem" />
      </Icon>
      Upload A Profile Picture. Max Size 2MB
      <ButtonIndex
        color="gray"
        background="white"
        variant="contained"
        handleClick={handleClick}
        text="upload"
        selectImg={<input hidden accept="image/*" multiple type="file" />}
      />
    </Box>
  );
}

export default UploadInput;
