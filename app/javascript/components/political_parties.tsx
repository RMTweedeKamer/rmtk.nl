import React from "react";

import {
  ChakraProvider,
  Text,
  SimpleGrid,
  Box,
  Heading,
  Center
} from '@chakra-ui/react';

import PoliticalPartyCard from "../components/political_party_card";

type LogoData = {
  id: string,
  storage: string,
  metadata: {
    filename: string,
    size: number,
    mimetype: string,
    width: number,
    height: number
  }
}

type PoliticalParty = {
  _id: string,
  name?: string,
  abbreviation?: string,
  slogan?: string,
  logo_data?: string,
  logo_url?: string,
  active: boolean
}

type AppProps = { data: Array<PoliticalParty> };

const PoliticalParties = ({ data }: AppProps) => {

  function isActive(party: PoliticalParty) {
    return party.active
  }

  let politicalParties = data.map(party => {

    if (party.logo_data == undefined) {
      return party;
    }
    let lj: LogoData = JSON.parse(party.logo_data);
    party.logo_url = "uploads/" + lj.id;

    return party;
  }
  );

  const activeParties = politicalParties.filter(isActive);
  const listParties = activeParties.map((party) =>
    <PoliticalPartyCard key={party._id}
      logo={party.logo_url}
      name={party.name}
      abbreviation={party.abbreviation}
      slogan={party.slogan}
      id={party._id} />
  );

  return (
    <ChakraProvider>
      <Center pt={12}>
        <Heading>Alle politieke partijen:</Heading>
      </Center>
      <SimpleGrid mx={10} columns={[1, 2, 3]} spacing="40px">
        {listParties}
      </SimpleGrid>
      <Box></Box>
    </ChakraProvider>
  );
}

export default PoliticalParties;


