import React from "react";
import { Box, styled } from "@mui/material";
import logo from "../assets/logo.png";
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;
export const CrudApplication = () => {
  return (
    <Container>
      <Box>
        <h1>Welcome  my Suhora's Users</h1>
      </Box>
      <Box>
        <img src={logo} alt="logo" />
      </Box>
    </Container>
  );
};
