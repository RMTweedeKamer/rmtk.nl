import {
    Box,
    chakra,
    Container,
    Link,
    Image,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    ChakraProvider
} from '@chakra-ui/react';

import { FaInstagram, FaTwitter, FaReddit } from 'react-icons/fa';
import { ReactNode } from 'react';
import React from 'react';

var logo = require('../images/logo.jpg');

const Logo = (props: any) => {
    return (
      <Image
  borderRadius="full"
  w={10}
  h={10}
  src={ logo }
  alt="RMTK logo"
/>

    );
};

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function SmallWithLogoLeft() {
    return (
      <ChakraProvider>
        <Box id="footer"
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Logo />
                <Text>Reddit Model Tweede Kamer</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/rmtkamer'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/rmtkamer/'}>
                        <FaInstagram />
                    </SocialButton>
                    <SocialButton label={'Reddit'} href={'https://www.reddit.com/r/RMTK/'}>
                        <FaReddit />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
      </ChakraProvider>
    );
}
