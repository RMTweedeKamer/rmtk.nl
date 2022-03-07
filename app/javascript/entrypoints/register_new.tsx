import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Register from "../components/register"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider>
    <Register />
  </ChakraProvider>,
  rootElement
);
