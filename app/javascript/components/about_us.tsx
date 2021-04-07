import React from "react";
import ReactDOM from "react-dom";

import {
  IoLogoDiscord,
  IoLogoReddit,
  IoGlobeOutline,
  IoLogoTwitter,
  IoLogoInstagram
} from 'react-icons/io5';

import {
  BiSpreadsheet,
  BiMailSend,
} from 'react-icons/bi';


import { ReactNode, ReactElement } from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';

export default function StatsGridWithImage() {
  return (
    <><Box bg={'gray.800'} position={'relative'}>
      <Container maxW={'5xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 40 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                RMTK
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Over ons
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                                RMTK is een online groepering van politiek geinteresseerden di                            trachten de Nederlandse politiek met eigen inval te benadere                s 26
                mei 2015 is dit initiatief actief bezig met de eig                k op problemen
                waar de leden van de simulatie zich mee bezig houden.Kijk bij een van
                de onderstaande linkjes als je geintereseerd bent!
              </Text>
            </Box>

          </Stack>
          <Flex />
        </Stack>
        <Container
          maxW={'5xl'} py={120}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4} >
              <Heading color={"white"}>Onze platformen</Heading>
              <Text color={'gray.400'} fontSize={'xl'}>
                      Deze website is niet ons voornaamste platform, dus we rade                                zeerste aan eventuele vragen direct aan het moderatieteam te stellen,
                of op de subreddit te zoeken.
              </Text>
              <Stack
                spacing={4}
                divider={<StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')} />}>
                <Feature
                  icon={<Icon as={IoLogoDiscord} color={'purple.500'} w={5} h={5} />}
                  iconBg={'white'}
                  link={"https://discordapp.com/invite/59a6CBC"}
                  text={'Discord Server'} />
                <Feature
                  icon={<Icon as={IoLogoReddit} color={'orange.500'} w={5} h={5} />}
                  iconBg={'white'}
                  link={"https://www.reddit.com/r/RMTK/"}
                  text={'Subreddit'} />
                <Feature
                  icon={<Icon as={IoGlobeOutline} color={'green.500'} w={5} h={5} />}
                  iconBg={'white'}
                  link={"indienen.rmtk.nl"}
                  text={'indienen.rmtk.nl'} />
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={'/images/tklr.png'} />
            </Flex>
          </SimpleGrid>
        </Container>
      </Container>
    </Box>
    <Container
    py={100}
    maxW={'5xl'} zIndex={10}>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <SecondFeature
            icon={<Icon as={IoLogoTwitter} w={10} h={10} />}
            title={'RMTK Twitter'}
            link={'https://twitter.com/RMTKamer'}
            text={'Volg ons op Twitter'} />
          <SecondFeature
            icon={<Icon as={IoLogoInstagram} w={10} h={10} />}
            title={'RMTK Instagram'}
            link={'https://www.instagram.com/rmtkamer/'}
            text={'Volg ons op Instagram'} />
          <SecondFeature
            icon={<Icon as={BiMailSend} w={10} h={10} />}
            title={'Email'}
            link={'mailto:rmtweedekamer@gmail.com'}
            text={'Voor direct contact kan gemaild worden naar rmtweedekamer@gmail.com'} />
          <SecondFeature
            icon={<Icon as={IoLogoReddit} w={10} h={10} />}
            title={'Nieuwe Ledengids'}
            link={'https://www.reddit.com/r/RMTK/wiki/gids'}
            text={'De Officiële RMTK Gids. In deze gids proberen wij de belangrijkste concepten van RMTK aan jou uit te leggen.'} />
          <SecondFeature
            icon={<Icon as={BiSpreadsheet} w={10} h={10} />}
            title={'Masterspreadsheet'}
            link={'https://docs.google.com/spreadsheets/d/1ld92uaKfVgENCafId8HjWIWJ6HXc_Dl1lgz960pu-iI/edit?usp=sharing'}
            text={'De spreadsheet vol met alle actuele informatie over RMTK'} />
          <SecondFeature
            icon={<Icon as={IoLogoReddit} w={10} h={10} />}
            title={'RMTK Grondwet'}
            link={'https://www.reddit.com/r/RMTK/wiki/grondwet'}
            text={'Grondwet van de Reddit Model Tweede Kamer'} />
          <SecondFeature
            icon={<Icon as={IoGlobeOutline} w={10} h={10} />}
            title={'RMTK Stemwijzer'}
            link={''}
            text={'TBA'} />
        </SimpleGrid>
      </Box>
      </Container></>
  );
}

interface FeatureProps {
  text: string;
  iconBg: string;
  link:string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, link, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text
      as={'a'}
      href={link}
      color={"gray.400"}
      fontWeight={600}
      _hover={{
        color: 'white',
      }}>{text}</Text>
    </Stack>
  );
};

interface SecondFeatureProps {
  title: string;
  text: string;
  link: string;
  icon: ReactElement;
}

const SecondFeature = ({ title, text, link, icon }: SecondFeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'gray.500'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600} as={'a'} href={link}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};
