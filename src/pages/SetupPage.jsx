import React from "react";
import { Box, Text } from "@chakra-ui/react";

function SetupPage() {
  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>
        Setup your application here.
      </Text>
      <Text fontSize="lg">To install the open-source VPN application, use the following command:</Text>
      <Text as="pre" p={3} bg="gray.100" borderRadius="md">
        curl -Ssf https://diode.io/install.sh | bash
      </Text>
    </Box>
  );
}

export default SetupPage;
