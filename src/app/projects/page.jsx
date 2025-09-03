'use client';

import React from 'react';

export const dynamic = 'force-dynamic';
import { Box, Heading, Text } from '@chakra-ui/react';
import Header from '../_components/layout/Header';
import ProjectCard from '../_components/ui/ProjectCard';
import projects from '../_content/projects';
import Footer from '../_components/layout/Footer';
import Location from '../_components/layout/Location';

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
          <Heading as="h1" fontSize="2xl">
            I think, therefore I design
          </Heading>
          <Text className="text-earth-200 mt-8 text-center" fontSize="lg">
            A selection of UX/UI and frontend projects—from playful experiments
            to real-world solutions—highlighting my approach to digital design,
            user insight, and thoughtful development
          </Text>
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
