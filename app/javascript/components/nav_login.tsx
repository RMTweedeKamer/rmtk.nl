import * as React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Stack,
} from '@chakra-ui/react';

import ErrorBoundary from "../components/error_boundary";

class RegLogUs extends React.Component<any> {
  static propTypes: {
    isLoggedIn: PropTypes.Requireable<boolean>;
    id: PropTypes.Requireable<string>;
    username: PropTypes.Requireable<string>;
   };

  render() {
    console.log("logged: " + this.props.isLoggedIn);
    if (!this.props.isLoggedIn) {
      return (
        <>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'/login'}>
              Inloggen
            </Button>
            <Button
              href={'/signup'}
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'blue.400'}
              _hover={{
                bg: 'blue.300',
              }}>
              Registreren
            </Button>
          </Stack></>
      )
    }
    else {
      return (
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/users/' + this.props.id }>
            { this.props.username }
    </Button>
          <Button
            href={'/logout'}
            type="submit"
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.400'}
            _hover={{
              bg: 'blue.300',
            }}>
            Uitloggen
    </Button>
        </Stack>
      )
    }
  }
}

RegLogUs.propTypes = {
  isLoggedIn: PropTypes.bool,
  id: PropTypes.string,
  username: PropTypes.string
};

export default RegLogUs;
