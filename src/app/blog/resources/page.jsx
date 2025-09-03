'use client';

import React from 'react';

export const dynamic = 'force-dynamic';
import {
  Box,
  Heading,
  Text,
  Flex,
  Grid,
  useColorModeValue,
} from '@chakra-ui/react';
import Header from '../../_components/layout/Header';
import Footer from '../../_components/layout/Footer';
import Location from '../../_components/layout/Location';
import TypewriterText from '../../_components/ui/TypewriterText';

export default function Resources() {
  const headingColor = useColorModeValue('earth.600', 'earth.300');
  const textColor = useColorModeValue('earth.600', 'earth.100');

  return (
    <>
      <Location />
      <Header />
      <Box>
        <main className="content-padding max-w-5xl w-full">
          <Box color={textColor} className="section-intro">
            <Flex
              alignItems="center"
              w="100%"
              justifyContent="space-between"
              mb={4}
            >
              <Heading
                color={headingColor}
                className="text-4xl font-bold"
                mb={4}
                mr={4}
              >
                <TypewriterText text="Resources" />
              </Heading>
            </Flex>

            <Text color={textColor} className="text-md" mb={8}>
              Curated tools, libraries, and materials for designers and
              developers. A collection of useful resources to help you in your
              creative journey.
            </Text>
          </Box>

          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={6}
            maxW="7xl"
            mx="auto"
          >
            {/* Resources will be listed here */}
          </Grid>
        </main>
      </Box>
      <Footer />
    </>
  );
}
