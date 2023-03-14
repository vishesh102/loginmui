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
  const handleChange = () => {
    if (
      variant !== undefined &&
      (text !== undefined || typeof text === "string") &&
      handleClick !== undefined
    )
      return true;
  };

  if (handleChange) {
    return (
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
      >
        {text}
        {selectImg}
      </Button>
    );
  } else {
    alert("enter valid button props");
  }
}

export default ButtonIndex;
