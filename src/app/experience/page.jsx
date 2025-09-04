'use client';

import React from 'react';

export const dynamic = 'force-dynamic';
import { Box, Heading, Text, Badge, HStack } from '@chakra-ui/react';
import Header from '../_components/layout/Header';
import Footer from '../_components/layout/Footer';
import Location from '../_components/layout/Location';
import { experience, teaching } from '../_content/experience';
import { FaLaptopCode, FaIndustry } from 'react-icons/fa';

export default function Experience() {
  const notifications = [];

  return (
    <>
      <Header />
      <Location notifications={notifications} isNotificationsEnabled={true} />
      <main className="content-padding max-w-5xl w-full mx-auto">
        <Box className="center max-w-2xl mx-auto" mb={8}>
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
        <Box className="max-w-7xl mx-auto">
          <Heading as="h2" color="earth.300" mb={8}>
            Work Experience
          </Heading>
        </Box>
        <Box className="max-w-7xl" mb={10}>
          {experience.map(experience => (
            <Box key={experience.id} mb={16}>
              <HStack spacing={2} justifyContent="space-between">
                <Heading as="h2" color="earth.300" fontSize="2xl" mb={2}>
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
                  <FaIndustry /> {experience.industry}
                </Badge>
              </HStack>
              <Text color="earth.300" mb={2}>
                {experience.date} · {experience.location} ·{' '}
                {experience.modalities.join(', ')}
              </Text>
              <Text>{experience.description}</Text>
            </Box>
          ))}
        </Box>
        <Box className="max-w-7xl mx-auto" mb={8}>
          <Heading as="h2" color="earth.300">
            Teaching Experience
          </Heading>
        </Box>
        <Box className="max-w-7xl mx-auto">
          {teaching.map(teaching => (
            <Box key={teaching.id} mb={8}>
              <HStack spacing={2} justifyContent="space-between">
                <Heading as="h2" color="earth.300" fontSize="2xl" mb={2}>
                  {teaching.name} at {teaching.company}
                </Heading>
                <Badge
                  colorScheme="earth"
                  py={1}
                  px={2}
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <FaIndustry /> {teaching.industry}
                </Badge>
              </HStack>
              <Text color="earth.300" mb={2}>
                {teaching.date} · {teaching.location} ·{' '}
                {teaching.modalities.join(', ')}
              </Text>
              <Text>{teaching.description}</Text>
            </Box>
          ))}
        </Box>
      </main>
      <Footer />
    </>
  );
}
