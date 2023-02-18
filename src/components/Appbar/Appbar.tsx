import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  ListItemText,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";


import  {theme}  from "../../Theme";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/system";

const pages = ["About Us", "Pricing", "Blog"];

const Appbar: React.FC = () => {
  const Logo = styled("img")<{ src: string }>(({ src, theme }) => ({
    src: `url(${src})`,
  }));
  const MobileLogo = styled("img")<{ src: string }>(({ src, theme }) => ({
    src: `url(${src})`,
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));

  const MenuItems = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    flexGrow: "2",
    maxWidth: "600px",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.down("md")]: {},
  }));

  const MiddleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flex: "2",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <AppBar
      sx={{ height: "80px", justifyContent: "center", top: "0" }}
      position="fixed"
    >
      <Container maxWidth="xl" sx={{ padding: "0px" }}>
        <CustomToolbar>
          <IconButton sx={{ display: { lg: "none", md: "block" } }}>
            <MenuIcon
              sx={{ fontSize: "28px", color: theme.palette.secondary.main }}
            ></MenuIcon>
          </IconButton>
          <MobileLogo src="/images/mainLogo.svg"></MobileLogo>
          <MiddleBox>
            <Logo src="/images/mainLogo.svg"></Logo>
            <MenuItems>
              {pages.map((page) => {
                return (
                  <ListItemText
                    key={page}
                    sx={{
                      textTransform: "Capitalize",
                      color: theme.palette.secondary.main,
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                  >
                    {page}
                  </ListItemText>
                );
              })}
            </MenuItems>
          </MiddleBox>

          <Stack direction="row" spacing={4} sx={{ justifySelf: "flex-end" }}>
            <Button
              sx={{
                color: theme.palette.secondary.main,
                fontSize: "18px",
                fontWeight: 400,
                textTransform: "capitalize",
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              disableElevation={true}
              sx={{
                borderRadius: "25px",
                background: theme.palette.secondary.main,
                textTransform: "capitalize",
                fontSize: "18px",
                color: "#fff",
                fontWeight: 400,
                display: { lg: "block", md: "none", xs: "none" },
              }}
            >
              Get Started
            </Button>
          </Stack>
        </CustomToolbar>
      </Container>
    </AppBar>
  );
};

export default Appbar