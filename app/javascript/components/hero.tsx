import React from "react";
import ReactDOM from "react-dom";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Start je eigen{' '}
          <Text as={'span'} color={'blue.400'}>
            politieke partij
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Of meld je aan bij één van de bestaande partijen.
          Uitgebreide kennis van politiek of verstand van zaken over wat er in de wereld speelt is niet strikt noodzakelijk om deel te nemen, alhoewel kennis hiervan je zeker een lichte voorsprong zou geven.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            href={"https://www.reddit.com/r/RMTK/wiki/index"}
            as={'a'}
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'blue.400'}
            _hover={{ bg: 'blue.500' }}>
            Maak kennis
          </Button>
          <Button
            href={'/political_parties'}
            type={"submit"}
            as={'a'}
            rounded={'full'} px={6}>
            Zie bestaande partijen
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
