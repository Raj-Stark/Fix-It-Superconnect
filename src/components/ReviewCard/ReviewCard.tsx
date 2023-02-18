import { Divider, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { theme } from "../../Theme";

import CardBox from "./CardBox";

const ReviewCard:React.FC = () => {
  const CardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "100px",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "50px",
    },
  }));

  return (
    <Box>
      <Container maxWidth="xl" sx={{ marginTop: "90px" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", color: theme.palette.error.main }}
        >
          Here’s what other professionals say ! <br />
          about SuperConnects
        </Typography>

        <CardContainer>
          <CardBox></CardBox>

          <CardBox></CardBox>
          <CardBox></CardBox>
        </CardContainer>
        <Box
          sx={{
            height: "5px",
            background: theme.palette.error.main,
            marginTop: "30px",
          }}
        ></Box>
      </Container>
    </Box>
  );
};

export default ReviewCard;
