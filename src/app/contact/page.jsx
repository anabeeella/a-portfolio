'use client';

import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  Container,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Header from '../_components/layout/Header';
import Footer from '../_components/layout/Footer';
import Location from '../_components/layout/Location';
import Squares from '../_components/ui/Squares';

export default function Contact() {
  const textColor = useColorModeValue('earth.600', 'earth.200');
  const mutedColor = useColorModeValue('earth.500', 'earth.400');
  const borderColor = useColorModeValue('earth.200', 'whiteAlpha.300');

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'anabeeella.r@gmail.com',
      href: 'mailto:anabeeella.r@gmail.com',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anabella-rizzi/',
      href: 'https://www.linkedin.com/in/anabella-rizzi/',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/anabeeella',
      href: 'https://github.com/anabeeella',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Barcelona, Spain',
      href: null,
    },
  ];

  return (
    <>
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="rgba(255, 255, 255, 0.1)"
        hoverFillColor="rgba(34, 34, 34, 0.1)"
      />
      <Header />
      <Location />
      <main
        className="content-padding max-w-4xl w-full mx-auto"
        style={{ marginBottom: '120px' }}
      >
        <Container maxW="container.md" py={16} id="contact">
          <VStack spacing={12} align="stretch">
            {/* Header */}
            <VStack spacing={6} align="center" textAlign="center" py={8}>
              <Heading
                as="h1"
                fontSize={{ base: '4xl', md: '5xl' }}
                fontWeight="bold"
                color={textColor}
                fontFamily="heading"
              >
                Contact
              </Heading>
              <Text
                fontSize="lg"
                color={mutedColor}
                maxW="2xl"
                lineHeight="relaxed"
              >
                Anabella is currently deployed on the design frontline —
                crafting systems, testing strategies, and pushing pixels into
                formation. If you’re looking for a collaborator to join your
                mission, send a signal. The comms are open for new projects,
                unexpected alliances, or simply a hello from another soldier in
                the field.
              </Text>
            </VStack>

            <Divider borderColor={borderColor} />

            {/* Contact Methods */}
            <VStack spacing={8} align="stretch">
              <VStack spacing={4} align="stretch">
                {contactInfo.map((contact, index) => (
                  <Box
                    key={index}
                    p={6}
                    border="1px"
                    borderColor={borderColor}
                    borderRadius="md"
                    bg="whiteAlpha.50"
                    _hover={{
                      bg: 'whiteAlpha.100',
                      borderColor: 'whiteAlpha.400',
                    }}
                    transition="all 0.2s"
                  >
                    <HStack spacing={4} align="center">
                      <Icon as={contact.icon} w={6} h={6} color={mutedColor} />
                      <VStack align="start" spacing={1} flex="1">
                        <Text
                          fontSize="sm"
                          fontWeight="medium"
                          color={mutedColor}
                          fontFamily="mono"
                        >
                          {contact.label}
                        </Text>
                        {contact.href ? (
                          <Link
                            href={contact.href}
                            color={textColor}
                            fontSize="lg"
                            _hover={{
                              color: 'earth.300',
                              textDecoration: 'none',
                            }}
                            isExternal={contact.href.startsWith('http')}
                          >
                            {contact.value}
                          </Link>
                        ) : (
                          <Text color={textColor} fontSize="lg">
                            {contact.value}
                          </Text>
                        )}
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </VStack>

            {/* Additional Info */}
            <Box
              p={6}
              border="1px"
              borderColor={borderColor}
              borderRadius="md"
              bg="whiteAlpha.50"
              textAlign="center"
            >
              <Text color={mutedColor} fontSize="sm" lineHeight="relaxed">
                I typically respond within 24 hours. For urgent matters, feel
                free to reach out via email or LinkedIn.
              </Text>
            </Box>
          </VStack>
        </Container>
      </main>
      <Footer />
    </>
  );
}
