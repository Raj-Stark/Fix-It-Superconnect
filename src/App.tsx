import { ThemeProvider } from "@mui/system";


import Appbar from "./components/Appbar/Appbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import WhySuperConnect from "./components/WhySuperConnect/WhySuperConnect";
import Signup from "./components/Signup/Signup";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import { theme } from "./Theme";

import Footer from "./components/Footer/Footer";





function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Appbar></Appbar>
      <Hero></Hero>
      <Categories></Categories>
      <WhySuperConnect></WhySuperConnect>
      <Signup></Signup>
      <ReviewCard></ReviewCard>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;