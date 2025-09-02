import { Box, VStack, Image, Text, Flex, HStack } from '@chakra-ui/react';

export default function IDcard() {
  return (
    <Flex transform="rotate(-2deg)"
      maxW="700px"
      mx="auto"
      p={4}
      bg="earth.300"
      color="gray.900"
      boxShadow="md"
      borderRadius="md"
    >
      <Box
              minW="20px"
              py={4}
              px={2}
              ml={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
>
  <Text
    className="font-calligraphic text-4xl mb-2"
    style={{
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)',
      textAlign: 'center',
      lineHeight: '0.2',
    }}
  >
    Anabella Rizzi
  </Text>
            </Box>
            <Box
  maxW="20px"
  display="flex"
  alignItems="center"
  justifyContent="center"
  borderLeft="1px solid"
  borderColor="gray.900"
  p={4}
>
  <Text
    className="text-xs font-mono uppercase"
    style={{
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)',
      textAlign: 'center',
    }}
    p={2}
    mb={2}
  >
    not valid as a digital signature
  </Text>
            </Box>

            {/* Main Content */}
            <VStack spacing={4} flex={1} align="stretch" px={4}>
              <HStack justifyContent="space-between">
                <Text fontFamily="mono" fontSize="xs" textAlign="center" textTransform="uppercase">the A-portfolio identifier</Text>
                <HStack gap={1}>
                  <Text fontFamily="mono" fontSize="xs" textAlign="center" textTransform="uppercase">date:</Text>
                  <Text fontFamily="typewriter" borderBottom="1px" borderColor="gray.900" fontSize="xl" textAlign="center">Jun. 2025</Text>
                </HStack>
              </HStack>
              <VStack w="100%" spacing={0}>
                <Text fontFamily="mono" fontSize="md" fontWeight="bold" textAlign="center" textTransform="uppercase" letterSpacing="widest">identification card</Text>
                <Text fontFamily="mono" fontSize="xs" textAlign="center" textTransform="uppercase">this is not an image</Text>
              </VStack>
              <HStack fontFamily="typewriter" align="center" borderBottom="1px" borderColor="gray.900" justifyContent="space-evenly">
                <Text fontSize="xl">Anabella Rizzi</Text>
                <Text fontSize="xl">UX UI Designer</Text>
              </HStack>
              <HStack spacing={6} height="12px" mt={-2} align="center" justifyContent="space-evenly">
                <Text fontFamily="mono" fontSize="xs" textTransform="uppercase">Name</Text>
                <Text fontFamily="mono" fontSize="xs" textTransform="uppercase">Role</Text>
              </HStack>
              <HStack fontFamily="typewriter" align="center" borderBottom="1px" borderColor="gray.900" justifyContent="space-evenly">
                <Text fontSize="xl">FADU UBA</Text>
                <Text fontSize="xl">Argentina</Text>
              </HStack>
              <HStack fontFamily="mono" fontSize="xs"  textTransform="uppercase" spacing={6} height="12px" mt={-2} align="center" justifyContent="space-evenly">
                <Text>University</Text>
                <Text>Nationality</Text>
              </HStack>
              <HStack spacing={4} align="center" py={2}>
                <Image src="/images/id.png" alt="facial image" width={160} borderRadius="sm" />
                <Text fontFamily="mono" fontSize="sm" textTransform="uppercase" lineHeight="2.8" letterSpacing="0.05em">
                  is authorized to edit the design, code and content of the A-portfolio during non-laboral hours upon presentation of this card
                </Text>
              </HStack>
            </VStack>
            </Flex>
  );
}