import React from "react";
import { Button, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { PhotoCamera } from "@mui/icons-material";
function ButtonIndex({ variant }) {
  return (
    <Box>
      <Button variant={variant} component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      {/* <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
       
      </IconButton> */}
    </Box>
  );
}

export default ButtonIndex;
