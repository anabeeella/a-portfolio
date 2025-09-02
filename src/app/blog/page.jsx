'use client';

import React from 'react';

export const dynamic = 'force-dynamic';
import { Box, Heading, Text, Grid, Link, Icon, useColorModeValue } from '@chakra-ui/react';
import Header from '../_components/layout/Header';
import Footer from '../_components/layout/Footer';
import Location from '../_components/layout/Location';
import TypewriterText from '../_components/ui/TypewriterText';
import NextLink from 'next/link';
import sections from '../_config/sections.json';

export default function Blog() {
  const headingColor = useColorModeValue('earth.600', 'earth.300');
  const textColor = useColorModeValue('earth.600', 'earth.100');
  const bodyTextColor = useColorModeValue('earth.600', 'earth.50');

  return (
    <>
      <Location />
      <Header />
      <Box>
        <main className="content-padding max-w-5xl w-full mx-auto">
          <Box color={textColor} className="section-intro">
              <Heading color={headingColor} className="text-4xl font-bold" mb={4} mr={4}>
                <TypewriterText text="Field Notes"/>
              </Heading>

            <Text color={textColor} className="text-lg" mb={8}>
              A collection of thoughts, resources, and inspiration from the field.
              Here you'll find articles about design, development, and technology,
              along with curated resources and inspiring works.
            </Text>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={6}
            maxW="7xl"
            mx="auto"
          >
            {sections.sections.find(section => section.link === '/blog').subsections.map((section) => (
              <Link
                key={section.title}
                as={NextLink}
                href={`/blog/${section.link}`}
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  className="transform transition-all duration-300"
                  bg="whiteAlpha.100"
                  border="1px"
                  borderColor="whiteAlpha.300"
                  p={6}
                  borderRadius="md"
                  _hover={{
                    bg: "whiteAlpha.200",
                    borderColor: "whiteAlpha.400",
                  }}
                >
                  <Heading as="h3" size="md" color={headingColor} mb={2}>
                    <Icon as={section.icon} mr={2} /> {section.title} (2)
                  </Heading>
                  <Text color={bodyTextColor} fontSize="sm">
                    {section.description}
                  </Text>
                </Box>
              </Link>
            ))}
          </Grid>
          </Box>
        </main>
      </Box>
      <Footer />
    </>
  );
} 