import { Grid, List, styled } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { theme } from "../../Theme";
import ListGridItems from "./ListGridItems";

const Footer: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "50px",
          marginBottom: "50px",
          color: theme.palette.secondary.main,
        }}
      >
        <Grid item md={3} xs={6}>
          <ListGridItems
            title={"SuperConnect.co"}
            item1={"Home"}
            item2={"Experts"}
            item3={"Services"}
            item4={"About Us"}
            item5={"Contact Us"}
          ></ListGridItems>
        </Grid>
        <Grid item md={3} xs={6}>
          <ListGridItems
            title={"Legal Pages"}
            item1={"Terms & Conditions"}
            item2={"Privacy Policy"}
            item3={"Disclaimer"}
            item4={""}
            item5={""}
          ></ListGridItems>
        </Grid>
        <Grid item md={3} xs={6}>
          <ListGridItems
            title={"Social Media"}
            item1={"Facebook"}
            item2={"Twitter"}
            item3={"Linkedin"}
            item4={"Instagram"}
            item5={"YouTube"}
          ></ListGridItems>
        </Grid>
        <Grid item md={3} xs={6}>
          <ListGridItems
            title={"Contact Information"}
            item1={"Address: 123 Main St, Anytown, USA 12345"}
            item2={"Phone: (123) 456-7890"}
            item3={"Email: info@superconnect.co"}
            item4={""}
            item5={""}
          ></ListGridItems>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;