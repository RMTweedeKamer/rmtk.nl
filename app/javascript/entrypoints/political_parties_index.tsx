import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import PoliticalParties from "../components/political_parties"

var political_parties = JSON.parse(document.getElementById('react-data-political_parties').getAttribute('data-political_parties'));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider>
    <PoliticalParties
     data={political_parties}/>
  </ChakraProvider>,
  rootElement
);
