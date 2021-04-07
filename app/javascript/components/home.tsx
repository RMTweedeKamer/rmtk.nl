import React from "react";
import { ChakraProvider, Image } from "@chakra-ui/react";


import Hero from "../components/hero";
import AboutUs from "../components/about_us";

class Home extends React.Component<any> {

  render() {
    return (
      <ChakraProvider>
        <Image
        w={"auto"}
        minHeight={"15vh"}

      objectFit={"cover"}
      src={
        '/images/banner.png'
      }></Image>

      <Hero />
      <AboutUs />
      </ChakraProvider>
    );
  }
}

export default Home;
