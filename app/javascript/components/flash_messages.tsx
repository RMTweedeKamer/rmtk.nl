import React from "react";
import ReactDOM from "react-dom";

import {
  Stack,
  ChakraProvider
} from '@chakra-ui/react';

import RailsAlert from "./rails_alert";


type AppProps = {messages: Array<Message>};

const FlashMessages = ({messages}: AppProps) => {

    return(
      <div>
        <ChakraProvider>
        <Stack spacing={3}>
        { messages.map( (message: Message) =>
          <RailsAlert key={ message.id } message={ message } /> ) }
        </Stack>
        </ChakraProvider>
      </div>
    );
}

// interface FlashMessagesProps {
//   messages: {
//     id: String,
//     type: String,
//     text: String
//   }
// }

export default FlashMessages;
