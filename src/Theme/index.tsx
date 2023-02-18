import { createTheme} from "@mui/material/styles";






export const Colors = {
  content: "#579bb1",
  headlines: "#c58940",
  textHighlighted: "#DE6449",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  white: "#fff",
  black: "#000",
};


export const theme : any = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: Colors.content,
    },
     error: {
      main: Colors.headlines,
    },
  },
  
  typography: {
    fontFamily: "Poppins , sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: "64px",
      "@media (max-width:600px)": {
        fontSize: "56px",
        fontWeight: 800,
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: "56px",
      "@media (max-width:600px)": {
        fontSize: "44px",
        fontWeight: 700,
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: "48px",
      "@media (max-width:600px)": {
        fontSize: "28px",
        fontWeight: 600,
      },
    },
    subtitle1: {
      fontFamily: "Poppins , sans-serif",
      fontWeight: 600,
      fontSize: "20px",
    },
    button: {
      fontFamily: "Poppins , sans-serif",
      fontWeight: 600,
      fontSize: "20px",
      disableRipple: true,
      disableElevation: true,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});