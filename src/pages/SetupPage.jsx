import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

function SetupPage() {
  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>
        Setup your application here.
      </Text>
      <Text fontSize="lg">Click the button below to install the open-source VPN application:</Text>
      <Button colorScheme="teal" onClick={() => window.open("https://diode.io/install.sh", "_blank")}>
        Install VPN
      </Button>
    </Box>
  );
}

export default SetupPage;
