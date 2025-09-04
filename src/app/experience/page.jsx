'use client';

import React from 'react';

export const dynamic = 'force-dynamic';
import { Box, Heading, Text, Badge, HStack } from '@chakra-ui/react';
import Header from '../_components/layout/Header';
import Footer from '../_components/layout/Footer';
import Location from '../_components/layout/Location';
import experience from '../_content/experience';
import { FaLaptopCode } from 'react-icons/fa';

export default function Experience() {
  const notifications = [];

  return (
    <>
      <Header />
      <Location notifications={notifications} isNotificationsEnabled={true} />
      <main className="content-padding max-w-5xl w-full mx-auto">
        <Box className="center max-w-2xl mx-auto">
          <Box className="p-4" p={4} borderRadius="lg">
            <Heading
              as="h1"
              fontSize="5xl"
              textAlign="center"
              color="earth.300"
            >
              Field Ops
            </Heading>
          </Box>
        </Box>
        <Box className="max-w-7xl mx-auto my-24">
          {experience.map(experience => (
            <Box key={experience.id} mb={8}>
              <HStack spacing={2} justifyContent="space-between">
                <Heading as="h2" color="earth.300">
                  {experience.name} at {experience.company}
                </Heading>
                <Badge
                  colorScheme="earth"
                  py={1}
                  px={2}
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <FaLaptopCode /> {experience.modalities.join(', ')}
                </Badge>
              </HStack>
              <Text color="earth.300" mb={2}>
                {experience.date} · {experience.location}
              </Text>
              <Text>{experience.description}</Text>
            </Box>
          ))}
        </Box>
      </main>
      <Footer />
    </>
  );
}
