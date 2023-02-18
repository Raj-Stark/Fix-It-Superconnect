import {
    Container,
    Icon,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    styled,
    Typography,
  } from "@mui/material";
  import { Box, display, textAlign } from "@mui/system";
  import React from "react";
import { theme } from "../../Theme";
  

  const WhySuperConnect:React.FC = () => {
    const textContext = [
      "Quick And Easy Payments",
      "Social Media Integration",
      "Lead Generation",
    ];
  
    const MainBox = styled(Container)(({ theme }) => ({
      display: "flex",
  
      marginTop: "80px",
      gap: "80px",
  
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    }));
  
    const IconItem = styled("img")(({ src, theme }) => ({
      src: `url(${src})`,
    }));
  
    const ImageBox = styled("img")(({ src, theme }) => ({
      src: `url(${src})`,
      [theme.breakpoints.down("md")]: {
        height: "300px",
      },
    }));
  
    const HeroArrow = styled("img")(({ src, theme }) => ({
      src: `url(${src})`,
    }));
  
    return (
      <Box sx={{ textAlign: "center", marginTop: "35px" }}>
        <Typography variant="h3" color={theme.palette.error.main}>
          Why SuperConnects?
        </Typography>
        <MainBox disableGutters maxWidth="xl">
          <Box sx={{ flex: "1", padding: "0 60px" }}>
            <Paper
              sx={{
                maxWidth: "520px",
                padding: "20px",
                border: `1px solid  ${theme.palette.secondary.main} `,
                borderBottom: `3px solid ${theme.palette.secondary.main}`,
                borderRadius: "20px",
                marginBottom: "70px",
              }}
            >
              <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
                <Icon>
                  <IconItem src="/images/calender.svg"></IconItem>
                </Icon>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme.palette.secondary.main,
                    marginLeft: "10px",
                  }}
                >
                  Calender Synchronization
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{ marginTop: "15px", textAlign: "left" }}
              >
                Effortlessly synchronize your schedule with SuperConnect's
                Calendar Integration.
              </Typography>
            </Paper>
  
            {textContext.map((text) => {
              return (
                <ListItem>
                  <ListItemIcon>
                    <HeroArrow src="/images/hero_arrow.png"></HeroArrow>
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {text}
                    </Typography>
                  </ListItemText>
                </ListItem>
              );
            })}
          </Box>
          <Box sx={{ flex: "1" }}>
            <ImageBox src="/images/whysupperconnect.svg"></ImageBox>
          </Box>
        </MainBox>
      </Box>
    );
  };
  
  export default WhySuperConnect;
  