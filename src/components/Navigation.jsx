import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" p={4} justifyContent="space-between" bg="blue.500" color="white">
      <Link to="/">
        <Button colorScheme="teal">Home</Button>
      </Link>
      <Link to="/setup">
        <Button colorScheme="teal">Setup VPN</Button>
      </Link>
    </Flex>
  );
};

export default Navigation;
