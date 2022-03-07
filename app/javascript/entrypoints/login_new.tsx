import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Login from "../components/login"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider>
    <Login />
  </ChakraProvider>,
  rootElement
);
