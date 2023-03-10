import { Box } from "@mui/material";
import { color } from "@mui/system";
import React from "react";
import ButtonIndex from "../../Components/Button/ButtonIndex";

function HeaderIndex() {
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
          hColor="white"
        />
      </Box>
    </Box>
  );
}

export default HeaderIndex;
