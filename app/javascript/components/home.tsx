import React from "react";
import ReactDOM from "react-dom";
import { Box, ChakraProvider, Image ,Flex, Divider } from "@chakra-ui/react";
import { FaBoxes } from "react-icons/fa";

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

        {/* <Box padding={4}>
          <a>Hoi hoi</a>
          <Box height="40px" bg="tomato" />
          <Box height="40px" bg="green.300" />
        </Box> */}
      </ChakraProvider>
    );
  }
}

export default Home;
