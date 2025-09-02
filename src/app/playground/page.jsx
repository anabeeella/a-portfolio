'use client';

import React from 'react';

export const dynamic = 'force-dynamic';
import { Box, Text, Heading, Grid, Button, Image, Card, CardBody, CardHeader, Flex, ButtonGroup, Tag } from '@chakra-ui/react';
import Header from '../_components/layout/Header';
import Footer from '../_components/layout/Footer';
import Location from '../_components/layout/Location';
import FallingText from '../_components/ui/FallingText';
import games from '../_content/games';
import InfiniteMarquee from '../_components/ui/InfiniteMarquee';
import GameCard from '../_components/ui/GameCard';


export default function Playground() {
  const notifications = [];

  return (
    <>
      <Header />
      <Location 
        notifications={notifications}
        isNotificationsEnabled={true}
      />
        <main className="content-padding max-w-5xl w-full mx-auto">
          <Box className="section-intro center max-w-2xl mx-auto">
            <Box 
              className="border-2 border-whiteAlpha-300 p-4 rounded-lg shadow-lg" 
              bg="grisMetal.900" 
              borderColor="whiteAlpha.300" 
              p={4} 
              borderRadius="lg" 
              shadow="lg"
            >
              <InfiniteMarquee speed={5}>
                <Heading 
                  as="h1" 
                  fontFamily="screen"
                  fontSize="4xl"
                  fontWeight="bold"
                  color="green.300"
                  textAlign="center"
                  display="inline-block"
                  px={4}
                >
                  Welcome to the Test Zone - 
                </Heading>
              </InfiniteMarquee>
            </Box>
            <Text className="text-earth-200 mt-8 text-center" fontSize="lg">
              Here you'll find code experiments, playful interfaces, and the occasional rogue feature that broke something before it fixed something else.
            </Text>
          </Box>
          <Box className="max-w-2xl mx-auto py-40"
            title="A no-rules zone where ideas get messy, weird, and sometimes surprisingly useful">
            <FallingText
              text={`A no-rules zone where ideas get messy, weird, and sometimes surprisingly useful`}
              highlightWords={["messy", "weird", "useful"]}
              highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
            />
          </Box>
          <Box className="max-w-2xl mx-auto py-40">
            <Text className="text-earth-300 text-center">
              Explore at your own risk. Enjoy at your own pace.
            </Text>
          </Box>
          <Box className="max-w-7xl mx-auto my-24">
            <Grid 
              id="games-grid"
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} 
              gap={6} 
              justifyContent="center"
              w="full"
            >
              {games.map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </Grid>
                

            
          </Box>
        </main>
      <Footer />
    </>
  );
} 