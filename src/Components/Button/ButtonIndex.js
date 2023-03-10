import React from "react";
import { Button, Box } from "@mui/material";

function ButtonIndex({
  handleClick,
  variant,
  selectImg,
  text,
  hColor,
  color,
  background,
}) {
  return (
    <Box>
      <Button
        onClick={handleClick}
        sx={{
          color: color,
          borderColor: color,
          backgroundColor: { background },
          ":hover": {
            backgroundColor: hColor,
          },
        }}
        variant={variant}
        component="label"
      >
        {text}
        {selectImg}
      </Button>
    </Box>
  );
}

export default ButtonIndex;
