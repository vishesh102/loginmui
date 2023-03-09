import React from "react";
import { Button, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { PhotoCamera } from "@mui/icons-material";
function ButtonIndex({ variant, selectImg, text, color }) {
  return (
    <Box>
      <Button
        sx={{ color: color, borderColor: color }}
        variant={variant}
        component="label"
      >
        {text}
        {selectImg}
      </Button>
      {/* <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
       
      </IconButton> */}
    </Box>
  );
}

export default ButtonIndex;
