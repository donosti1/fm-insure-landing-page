import React, {useEffect} from "react";
import {Stack} from "@chakra-ui/react";

import Hero from "./screens/Hero";
import Features from "./screens/Features";
import Banner from "./screens/Banner";
import Footer from "./screens/Footer";
import Header from "./screens/Header";

const App: React.FC = () => {
  useEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode");
  }, []);

  return (
    <Stack alignItems="center" spacing={0}>
      <Header />
      <Features />
      <Banner />
      <Footer />
    </Stack>
  );
};

export default App;
/* How we work Blog Account View plans      */
