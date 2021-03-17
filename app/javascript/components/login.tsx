import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  ChakraProvider,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import React from 'react';

export default function SimpleCard() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <ChakraProvider>
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log in op uw account</Heading>
          </Stack>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
            <form action="/user_sessions" acceptCharset="UTF-8" data-remote="true" method="post">
            <Stack spacing={4}>
              <FormControl id="username" isRequired>
                <FormLabel>Gebruikersnaam</FormLabel>
                <Input name="username" type="username" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Wachtwoord</FormLabel>
                <InputGroup size="md">
                  <Input
                    name="password"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <br />
                <Input
                  as={'button'}
                  type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Aanmelden
              </Input>
              </Stack>
            </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}
