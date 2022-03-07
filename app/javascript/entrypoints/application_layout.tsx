import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import NavBar from "../components/navbar"
import FlashMessages from "../components/flash_messages"
import Footer from "../components/footer"

var navbar_data = JSON.parse(document.getElementById('react-data-navbar').getAttribute('data-navbar'));
const navbarElement = document.getElementById("navbar");
ReactDOM.render(
  <ChakraProvider>
    <NavBar
    isLoggedIn={navbar_data.isLoggedIn}
    id={navbar_data.id}
    username={navbar_data.username} />
  </ChakraProvider>,
  navbarElement
);

var messages = JSON.parse(document.getElementById('react-data-flash_messages').getAttribute('data-messages'));
const flashMessagesElement = document.getElementById("flash_messages");
ReactDOM.render(
  <ChakraProvider>
    <FlashMessages
    messages={messages}/>
  </ChakraProvider>,
  flashMessagesElement
);

const footerElement = document.getElementById("footer");
ReactDOM.render(
  <ChakraProvider>
    <Footer />
  </ChakraProvider>,
  footerElement
);

componentDidMount () {
  this.setState({ mounted: true })
}
