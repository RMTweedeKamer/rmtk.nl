import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import PoliticalParty from "../components/political_party"

var political_party = JSON.parse(document.getElementById('react-data-political-party-show').getAttribute('data-political-party'));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider>
    <PoliticalParty
      logo_url={political_party.logo_url}
      name={political_party.name}
      abbreviation={political_party.abbreviation}
      slogan={political_party.slogan}
      body={political_party.body}
      election_programme_url={political_party.election_programme_url}
  />
  </ChakraProvider>,
  rootElement
);
