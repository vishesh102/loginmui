import React from "react";
import { Button, Box } from "@mui/material";

function ButtonIndex({
  variant,
  selectImg,
  text,

  color,
  background,
}) {
  return (
    <Box>
      <Button
        sx={{
          color: color,
          borderColor: color,
          backgroundColor: { background },
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
