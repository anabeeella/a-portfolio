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

export default function Inspiration() {
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
                <TypewriterText text="Inspiration" />
              </Heading>
            </Flex>

            <Text color={textColor} className="text-md" mb={8}>
              Collection of inspiring projects, designs, and creative works.
              Discover amazing creations that push the boundaries of design and
              technology.
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
            {/* Inspiration items will be listed here */}
          </Grid>
        </main>
      </Box>
      <Footer />
    </>
  );
}
