import { Box, Button, Container, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          VPN Automation Setup
        </Heading>
        <Text fontSize="xl">Easily set up and manage your VPN connections for point-to-point communications.</Text>
        <Image src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxWUE4lMjBuZXR3b3JrJTIwaWxsdXN0cmF0aW9ufGVufDB8fHx8MTcxNTA5MjQwNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="VPN Network Illustration" boxSize="300px" objectFit="cover" />

        <Box w="full">
          <Heading as="h2" size="lg" mb={4}>
            Download the VPN Client
          </Heading>
          <SimpleGrid columns={3} spacing={10}>
            <VStack>
              <Button leftIcon={<FaWindows />} colorScheme="teal" size="lg" onClick={() => window.open("https://example.com/download/windows", "_blank")}>
                Windows
              </Button>
              <Text>Version 1.0</Text>
            </VStack>
            <VStack>
              <Button leftIcon={<FaApple />} colorScheme="teal" size="lg" onClick={() => window.open("https://example.com/download/mac", "_blank")}>
                Mac
              </Button>
              <Text>Version 1.0</Text>
            </VStack>
            <VStack>
              <Button leftIcon={<FaLinux />} colorScheme="teal" size="lg" onClick={() => window.open("https://example.com/download/linux", "_blank")}>
                Linux
              </Button>
              <Text>Version 1.0</Text>
            </VStack>
          </SimpleGrid>
        </Box>

        <Box w="full">
          <Heading as="h2" size="lg" mb={4}>
            Manage Your Connections
          </Heading>
          <Text fontSize="md">Select different endpoints to change your location using the proxy capabilities of the diode CLI.</Text>
          {/* Additional UI components for managing connections can be added here */}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
