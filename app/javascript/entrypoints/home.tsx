import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Home from "../components/home"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider>
    <Home />
  </ChakraProvider>,
  rootElement
);


