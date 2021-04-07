import React from "react";
import ReactDOM from "react-dom";

import {
  Alert,
  AlertIcon,
  CloseButton,
  ChakraProvider
} from '@chakra-ui/react';
import { string } from "prop-types";

type AppProps = {message: Message};

const RailsAlert = ({message}: AppProps) => {

  const alertClass = (type: string) => {
    let classes: any = {
      error: 'error',
      alert: 'warning',
      notice: 'info',
      success: 'success'
    };
    return classes[type] || classes.success;
  }

  return (
    <Alert status={alertClass(message.type)}>
      <AlertIcon />
      { message.text}
    </Alert>
  );

}

export default RailsAlert;
