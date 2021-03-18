import React from "react";
import ReactDOM from "react-dom";

import {
  Alert,
  AlertIcon,
  CloseButton,
  ChakraProvider
} from '@chakra-ui/react';

class RailsAlert extends React.Component {

  alertClass (type) {
    let classes = {
      error: 'error',
      alert: 'warning',
      notice: 'info',
      success: 'success'
    };
    return classes[type] || classes.success;
  }

  render() {
    const message = this.props.message;
    const alertClassName = `alert ${ this.alertClass(message.type) } fade in`;

    return(
      <Alert visibility={true} status={ this.alertClass(message.type) }>
        <AlertIcon />
        { message.text }
        {/* <CloseButton position="absolute" right="8px" top="8px" /> */}
      </Alert>
    );
  }
}

export default RailsAlert;
