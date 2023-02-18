import { Box, Paper, styled, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import  {theme } from "../../Theme";

const Signup : React.FC = () => {
  const LinkedinBox = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
  }));
  const GoogleBox = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
  }));

  const DashedArrow = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
  }));

  const BigImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    marginTop: "-20px",
    width: "100%",
    height: "100%",
  }));

  const NumberBox = styled(Box)(() => ({
    background: theme.palette.secondary.main,
    color: "#fff",
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  const SocialCard = styled(Paper)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "30px",
    padding: "20px 50px",
    rowGap: "20px",
  }));

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          textAlign: "center",
          margin: "35px auto",
        }}
      >
        <Typography variant="h3" color={theme.palette.error.main}>
          Signup in 5 minutes !
        </Typography>

        <Stack
          direction="row"
          justifyContent={"center"}
          spacing={2}
          marginTop="75px"
        >
          <Box>
            <NumberBox sx={{ marginLeft: "-40px" }}>
              <Typography>1</Typography>
            </NumberBox>
            <SocialCard elevation={8}>
              <Typography variant="subtitle1">
                {" "}
                Connect Using Your Socials
              </Typography>
              <LinkedinBox src="/images/linkedin.svg"></LinkedinBox>
              <GoogleBox src="/images/google.svg"></GoogleBox>
            </SocialCard>
            <DashedArrow src="/images/dashedArrow.png"></DashedArrow>
          </Box>
        </Stack>
      </Container>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          marginTop="-60px"
          sx={{
            marginBottom: { xs: "20px" },
            marginTop: { xs: "0px", lg: "-60px" },
          }}
        >
          <NumberBox>
            <Typography>2</Typography>
          </NumberBox>
          <Typography variant="subtitle1">
            Start customizing your profile page
          </Typography>
        </Stack>
        <BigImage src="/images/bigImage.svg"></BigImage>
      </Container>
    </>
  );
};

export default Signup;
