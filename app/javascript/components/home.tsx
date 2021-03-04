import React from "react";
import ReactDOM from "react-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box padding={4}>
        <a>Hoi hoi</a>
        <Box height="40px" bg="tomato" />
        <Box height="40px" bg="green.300" />
      </Box>
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />,
  rootElement
);
