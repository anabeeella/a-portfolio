import React from 'react';
import { Box, Container, VStack } from '@chakra-ui/react';
import TypewriterScreen from '../_components/features/TypewriterScreen';
import fs from 'fs';
import path from 'path';

// Server-side function to read the intro.md file
function getIntroContent() {
  const filePath = path.join(process.cwd(), 'src/app/_content/intro.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent;
}

export default function IntroPage() {
  const introContent = getIntroContent();
  return (
    <Box
      minH="100vh"
      bg="grisMetal.800"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      <Container centerContent minW="5xl">
        <VStack spacing={8} w="full">
          <Box
            w="full"
            bg="whiteAlpha.100"
            borderRadius="lg"
            border="1px"
            borderColor="whiteAlpha.300"
            p={6}
            boxShadow="xl"
          >
            <TypewriterScreen content={introContent} />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
