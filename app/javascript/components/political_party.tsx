import React from "react";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Divider,
  Image,
  ChakraProvider
} from '@chakra-ui/react';

import { DownloadIcon } from '@chakra-ui/icons'

type AppProps = {
  logo_url: string,
  name: string,
  abbreviation: string,
  slogan: string,
  body: string,
  election_programme_url: string
};

const ProductSimple = ({ logo_url, name, abbreviation, slogan, body, election_programme_url }: AppProps) => {
  return (
    <ChakraProvider>
      <Center py={12}>
        <Stack spacing={10}>
          <Center>
            <Heading size={'2xl'}>{name}</Heading>
          </Center>

          <SimpleGrid columns={[1, 2]} spacing={10}>
            <Box boxShadow={'2xl'} zIndex={1}>
              <Image
                borderRadius="2%"
                maxW={'330px'}
                src={logo_url}
                alt="logo"
              />
            </Box>
            <Box maxW={'330px'}>
              <Heading>{abbreviation}</Heading>
              <Text color={"gray.500"}>{slogan}</Text>
              <Divider my={5} orientation="horizontal" />
              <Text>{body}</Text>
            </Box>
          </SimpleGrid>
          {election_programme_url
            ?
            <Stack>
              <Divider my={5} orientation="horizontal" />
              <Text fontSize="lg" color={"gray.900"} as={'a'} href={election_programme_url} >
                <strong>Verkiezingsprogramma </strong><DownloadIcon color="Gray.900" />
              </Text>
            </Stack>
            :
            <h1></h1>
          }
        </Stack>
      </Center>
    </ChakraProvider>
  );
}

export default ProductSimple;
