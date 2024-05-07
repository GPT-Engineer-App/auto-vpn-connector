import React from "react";
import { Box, Text, Select, Button } from "@chakra-ui/react";

function ManageConnections() {
  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>
        Manage VPN Connections
      </Text>
      <Select placeholder="Select endpoint" mb={4}>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="au">Australia</option>
      </Select>
      <Button colorScheme="blue">Connect</Button>
    </Box>
  );
}

export default ManageConnections;
