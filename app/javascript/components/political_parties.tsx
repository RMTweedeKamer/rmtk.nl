import React from "react";

import {
  ChakraProvider,
  Text,
  Stack
} from '@chakra-ui/react';

import PoliticalPartyCard from "../components/political_party_card";

type PoliticalParty = {
  _id: string
  name?: string,
  abbreviation?: string,
  body?: string,
  logo_data?: string,
  active: boolean,
}

type AppProps = {data: Array<PoliticalParty>};

const PoliticalParties = ({data}: AppProps) => {

  function isActive(party: PoliticalParty) {
    return party.active
  }

  const activeParties = data.filter(isActive);
  const listParties = activeParties.map((party) =>
      <PoliticalPartyCard key={party._id}
                          logo={party.logo_data}
                          name={party.name}
                          abbreviation={party.abbreviation}
                          body={party.body}
                          id={party._id}/>
  );

  return (
    <ChakraProvider>
    <Text>LMAO: \n oji </Text>
    <Stack>{listParties}</Stack>
    </ChakraProvider>
  );
}

export default PoliticalParties;


