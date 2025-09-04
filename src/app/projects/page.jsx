'use client';

import React from 'react';

export const dynamic = 'force-dynamic';
import { Box, Heading, Text, Icon, Link } from '@chakra-ui/react';
import Header from '../_components/layout/Header';
import ProjectCard from '../_components/ui/ProjectCard';
import projects from './projects';
import Footer from '../_components/layout/Footer';
import Location from '../_components/layout/Location';
import { FaChevronDown } from 'react-icons/fa';

export default function Projects() {
  const notifications = [];

  // Function to determine item height based on index
  const getItemHeight = index => {
    const heights = ['tall', 'medium', 'short'];
    return heights[index % heights.length];
  };

  return (
    <>
      <Header />
      <Location notifications={notifications} isNotificationsEnabled={true} />
      <main className="content-padding max-w-7xl w-full mx-auto">
        <Box className="section-intro center max-w-2xl mx-auto">
          <Box
            className="p-4 rounded-lg shadow-lg"
            p={4}
            borderRadius="lg"
            shadow="lg"
          >
            <Heading
              as="h1"
              fontSize="5xl"
              textAlign="center"
              color="earth.300"
            >
              Mission Briefings
            </Heading>
          </Box>
          <Text className="mt-8 text-center" fontSize="lg" mb={8}>
            A selection of UX/UI and frontend projects—from playful experiments
            to real-world solutions—highlighting my approach to digital design,
            user insight, and thoughtful development
          </Text>
          <Text className="text-center" fontSize="md" mb={2} color="red.300">
            This section is still under construction. More projects will be
            added soon.
          </Text>
          <Link
            href="https://anabeeella.myportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              className="text-center"
              fontSize="md"
              mb={4}
              color="earth.300"
            >
              Check my previous portfolio
            </Text>
          </Link>
          <Icon
            cursor="pointer"
            display="flex"
            alignSelf="center"
            justifyContent="center"
            as={FaChevronDown}
            className="mt-8"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              });
            }}
            color="earth.300"
            size={20}
            animation="bounce 2s infinite"
            _hover={{
              color: 'earth.100',
              transform: 'scale(1.1)',
            }}
            transition="all 0.3s ease"
          />
        </Box>
        <Box
          maxW="6xl"
          mx="auto"
          sx={{
            columnCount: {
              base: 1, // Mobile: 1 column
              lg: 2, // Large screens: 2 columns
            },
            columnGap: {
              base: '1rem',
              lg: '1.5rem',
            },
            '& .masonry-item': {
              breakInside: 'avoid',
              marginBottom: {
                base: '1rem',
                lg: '1.5rem',
              },
              height: {
                base: '100%', // Fixed height on mobile
                lg: 'auto', // Variable height on larger screens
              },
              '&.tall': {
                height: {
                  base: '100%',
                  lg: 'auto',
                },
              },
              '&.medium': {
                height: {
                  base: '100%',
                  lg: 'auto',
                },
              },
              '&.short': {
                height: {
                  base: '100%',
                  lg: 'auto',
                },
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={project.id}
              className={`masonry-item ${getItemHeight(index)}`}
            >
              <ProjectCard {...project} />
            </Box>
          ))}
        </Box>
      </main>
      <Footer />
    </>
  );
}
