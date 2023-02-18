import { Button, Container, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


import  {theme}  from "../../Theme";


const Categories = () => {
  const CategoriesBox = styled(Box)(({ theme }) => ({
    marginTop: "30px",
    width: "100%",
    height: "150px",
    background: "yellow",
  }));

  const buttonItems = [
    {
      id: 1,
      label: "Button 1",
    },
    {
      id: 2,
      label: "Button 2",
    },
    {
      id: 3,
      label: "Button 3",
    },
  ];


  return (
    <Box sx={{ marginTop: "105px", textAlign: "center" }}>
      <Typography variant="h3" color={theme.palette.error.main}>
        SuperConnects is for everyone
      </Typography>
      <CategoriesBox>
        Raj
      </CategoriesBox>
    </Box>
  );
};

export default Categories;


