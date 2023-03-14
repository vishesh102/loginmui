import { Box } from "@mui/material";

import React from "react";
import ButtonIndex from "../../Components/Button/ButtonIndex";

function HeaderIndex() {
  const handleClick = () => {
    console.log("signup button clicked");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "6rem",
        mb: "2rem",
        backgroundColor: "primary.main",
      }}
    >
      <Box sx={{ m: "auto 1rem", color: "white" }}>Athan Care</Box>
      <Box sx={{ m: "auto 1rem" }}>
        <ButtonIndex
          background="white"
          color="primary.main"
          variant="contained"
          text="signup"
          handleClick={handleClick}
          hColor="white"
        />
      </Box>
    </Box>
  );
}

export default HeaderIndex;
