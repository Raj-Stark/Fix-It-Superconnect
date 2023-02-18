import {
    Box,
    Button,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    styled,
    Typography,
  } from "@mui/material";
  import React from "react";
  import  {theme} from "../../Theme";
  
  const Hero : React.FC = () => {
    const textContext = [
      "Conduct 1:1 sessions",
      "Monetize the content in all forms  - newsletters , book, blog and more ",
      "Bring  all your work created at various platforms on one page",
      "Grow your community",
    ];
  
    const HeroBox = styled(Box)(({ theme }) => ({
      display: "flex",
      paddingTop: "127px",
  
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignContent: "center",
      },
    }));
  
    const HeroArrow = styled("img")(({ src, theme }) => ({
      src: `url(${src})`,
    }));
  
    const HeroImage = styled("img")(({ src, theme }) => ({
      src: `url(${src})`,
      position: "absolute",
      top: "-25px",
      [theme.breakpoints.down("md")]: {
        position: "static",
        width: "400px",
      },
    }));
  
    const HeroTextBox = styled(Box)(({ theme }) => ({
      [theme.breakpoints.down("md")]: {
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "50px",
      },
    }));
  
    const HeroImageBox = styled(Box)(({ theme }) => ({
      position: "relative",
      display: "flex",
      flexDirection: "column",
      flex: "1",
  
      justifyContent: "flex-end",
  
      [theme.breakpoints.down("md")]: {
        alignItems: "center",
      },
    }));
  
    const HeroButton = styled(Button)(({ theme}) => ({
      padding: "20px 40px",
      background: theme.palette.secondary.main,
      borderRadius: "50px",
      color: "#fff",
      textTransform: "capitalize",
      marginTop: "45px",
    }));
  
    return (
      <Box sx={{ height: "auto" }}>
        <Container
          disableGutters
          maxWidth="lg"
          sx={{ marginTop: "80px", height: "100%" }}
        >
          <HeroBox>
            <HeroTextBox>
              <Typography variant="h2" color={theme.palette.error.main}>
                Share your knowledge & <br /> experience, Impact Lives !
              </Typography>
              <List sx={{ marginTop: "90px", maxWidth: "680px" }}>
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
              </List>
              <HeroButton variant="contained">
                Start Your Journey
              </HeroButton>
            </HeroTextBox>
            <HeroImageBox>
              <HeroImage src="/images/main-girl.svg"></HeroImage>
              <HeroButton
                variant="contained"
                sx={{
                  border: `2px solid ${theme.palette.secondary.main}`,
  
                  alignSelf: "center",
                }}
              >
                Visit Laura's Profile
              </HeroButton>
            </HeroImageBox>
          </HeroBox>
        </Container>
      </Box>
    );
  };
  
  export default Hero;
  