import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    styled,
    Typography,
  } from "@mui/material";
  import React from "react";
  import  {theme}  from "../../Theme";
  
  const CardBox :React.FC = () => {
    const CardAvatar = styled("img")(({ src, theme }) => ({
      src: `url(${src})`,
      width: "100px",
      height: "100px",
      backgroundSize: "contain",
      backgroundPosition: "center",
      borderRadius: "50%",
    }));
    return (
      <Card
        sx={{
          maxWidth: "345px",
          textAlign: "center",
          background: theme.palette.secondary.main,
          color: "#fff",
          borderRadius: "25px",
          padding: "20px 10px",
        }}
      >
        <CardAvatar src="/images/boy.jpg"></CardAvatar>
  
        <CardContent>
          <Typography sx={{ fontSize: "28px", fontWeight: 400 }}>
            Jane Doe
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "20px", fontWeight: 400 }}
          >
            Entrepreneur & Financial Consultant{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", fontWeight: 200, mt: "20px" }}
          >
            As a personal coach, I was looking for a platform that would allow me
            to connect with clients across the globe. SuperConnects does just
            that.
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default CardBox;
  