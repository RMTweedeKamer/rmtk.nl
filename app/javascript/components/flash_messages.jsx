import React from "react";
import ReactDOM from "react-dom";

import {
  Stack,
  ChakraProvider
} from '@chakra-ui/react';

import RailsAlert from "./rails_alert";

class FlashMessages extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: props.messages };
  }

  render () {
    return(
      <div>
        <ChakraProvider>
        <Stack spacing={3}>
        { this.state.messages.map( (message) =>
          <RailsAlert key={ message.id } message={ message } /> ) }
        </Stack>
        </ChakraProvider>
      </div>
    );
  }
}

// interface FlashMessagesProps {
//   messages: {
//     id: String,
//     type: String,
//     text: String
//   }
// }

export default FlashMessages;
