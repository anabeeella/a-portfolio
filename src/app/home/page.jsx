'use client';

import React from 'react';

export const dynamic = 'force-dynamic';
import { Heading, Grid, Text, Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import sections from '../_config/sections.json';
import Header from '../_components/layout/Header';
import Footer from '../_components/layout/Footer';
import Location from '../_components/layout/Location';
import { FaCheckCircle } from 'react-icons/fa';
import Squares from '../_components/ui/Squares';
import SectionCard from '../_components/ui/SectionCard';

export default function Home() {
  const router = useRouter();
  const filteredSections = sections.sections.filter(
    section => section.id !== '#0'
  );
  const getCurrentDate = () => {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString('en-US', options);
  };
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
      <main className="content-padding max-w-4xl md:max-w-7xl w-full mx-auto">
        <Heading as="h1" className="hidden">
          Welcome to Control Center
        </Heading>
        <Box
          className="flex justify-between items-center pb-4 px-2 font-mono"
          fontSize="sm"
          color="earth.300"
        >
          <Text className="leading-relaxed">{getCurrentDate()}</Text>
          <Text gap={2} className="flex items-center leading-relaxed">
            <FaCheckCircle />
            Access granted
          </Text>
        </Box>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          maxW="7xl"
          gap={6}
          justifyContent="center"
          w="full"
        >
          {filteredSections.map((section, index) => (
            <SectionCard
              key={section.title}
              id={section.id}
              link={section.link}
              title={section.title}
              description={section.description}
              tags={section.tags}
              onClick={() => router.push(section.link)}
              tooltip={section.tooltip}
              index={index}
            />
          ))}
        </Grid>
      </main>
      <Footer />
    </>
  );
}
