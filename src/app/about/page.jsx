'use client';

import React, { useRef, useState } from 'react';

export const dynamic = 'force-dynamic';
import { Box, Heading, Text, Image, VStack, Flex } from '@chakra-ui/react';
import Header from '../_components/layout/Header';
import Footer from '../_components/layout/Footer';
import TypewriterText from '../_components/ui/TypewriterText';
import Location from '../_components/layout/Location';
import aboutContent from '../_content/about';
import SocialIcons from '../_components/ui/SocialIcons';
import Masonry from '../_components/ui/Masonry';

export default function About() {
  const photosRef = useRef(null);
  const sectionIntro = useRef(null);
  const notifications = [];
  const [firstTextComplete, setFirstTextComplete] = useState(false);

  const scrollToSectionIntro = () => {
    sectionIntro.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const data = [
    { id: 1, image: '/images/about/about1.jpg', height: 800, title: 'Me' },
    { id: 2, image: '/images/about/about2.jpg', height: 400, title: 'Me' },
    { id: 3, image: '/images/about/about3.jpg', height: 800, title: 'Me' },
    { id: 4, image: '/images/about/about4.jpg', height: 300, title: 'Me' },
    { id: 5, image: '/images/about/about5.png', height: 300, title: 'Me' },
    { id: 6, image: '/images/about/about6.jpg', height: 300, title: 'Me' },
    { id: 7, image: '/images/about/about7.jpg', height: 200, title: 'Me' },
    { id: 8, image: '/images/about/about8.jpg', height: 300, title: 'Me' },
  ];

  return (
    <>
      <Header />
      <Location notifications={notifications} isNotificationsEnabled={true} />
      <Box className="max-w-7xl mx-auto">
        <Flex
          px={8}
          mb={{ base: '6rem', md: '4rem' }}
          height={{ base: 'auto', md: '90vh' }}
          alignItems="center"
          gap={8}
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          width="100%"
        >
          <Box
            alignSelf="flex-end"
            color="earth.100"
            textAlign="left"
            width={{ base: '100%', md: '50%' }}
          >
            <Heading as="h1" className="font-bold text-earth-300" mb={4}>
              ID Archive
            </Heading>
            <Text className="text-lg" mb={8}>
              Anabella Rizzi is a UX/UI designer with a strong background in
              graphic design and a decade of experience crafting visual systems,
              digital products, and experimental interfaces. She has taught
              design at FADU-UBA, prototyped in battlefields filled with
              stakeholders, and debugged emotions through carefully planned
              flows.
              <br />
              <br />
              She thrives in the trenches where strategy meets creativity,
              prefers clever design over complex ones, and firmly believes that
              the best tools are the ones that save time and headaches.
              <br />
              <br />
              Off duty? She's likely sketching ideas, crocheting tiny monsters,
              or organizing her Figma files like they were government files.
            </Text>
          </Box>
          <Box
            position="relative"
            onClick={scrollToSectionIntro}
            width={{ base: '100%', md: '40%' }}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignSelf="flex-start"
          >
            <Image
              src="/images/me.png"
              alt="About"
              width="100%"
              height="100%"
              objectFit="cover"
              marginBottom={{ base: '0', lg: '2rem' }}
            />
            <Box
              position="absolute"
              top={{ base: '-2.5%', md: '40%' }}
              left={{ base: '5%', md: '-50%' }}
              className="notes-container text-sm font-mono"
              color="earth.200"
            >
              <Box className="inner-content" px={4} py={2}>
                <TypewriterText
                  text="Yep, I'm breaking the grid again."
                  onComplete={() => setFirstTextComplete(true)}
                  speed={30}
                />
              </Box>
            </Box>
            <Box
              position="absolute"
              bottom={{ base: '5%', md: '10%' }}
              right={{ base: '10%', md: '-20%' }}
              className="notes-container text-sm font-mono"
              color="earth.200"
            >
              <Box className="inner-content" px={4} py={2}>
                {firstTextComplete && (
                  <TypewriterText
                    text="Relax, the responsive is ok."
                    speed={30}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Flex>
        <main className="content-padding mx-auto max-w-5xl w-full">
          {aboutContent.map((item, index) => (
            <Box key={index} p={4} mx="auto" mb={16}>
              <Heading as="h3" className="text-earth-300" fontSize="xl" mb={4}>
                {item.title}
              </Heading>
              <VStack align="start" spacing={2}>
                {item.description.map((paragraph, pIndex) => (
                  <Text key={pIndex} className="text-earth-100">
                    {paragraph}
                  </Text>
                ))}
              </VStack>
            </Box>
          ))}

          <Box ref={photosRef} py={40} mb={16} id="photos-grid">
            <Text className="text-earth-100 mb-8 text-center italic">
              The best ideas don't always start on a whiteboard. Sometimes they
              start with yarn, ink, or fabric scraps.
            </Text>
            <Masonry data={data} />
          </Box>

          <Box p={4} mx="auto" mb={16}>
            <Heading as="h3" className="text-earth-300" fontSize="xl" mb={4}>
              Last known coordinates
            </Heading>
            <Text className="text-earth-100 mb-4">
              If you'd like to follow, collaborate or just say hi:
            </Text>
            <SocialIcons size={20} gap={4} />
          </Box>

          <Box
            bg="whiteAlpha.100"
            borderRadius="md"
            className="text-earth-100 font-mono text-sm"
            p={8}
            mb={24}
            textAlign="center"
          >
            <TypewriterText text="This dossier will remain open until further notice." />
          </Box>
        </main>
      </Box>
      <Footer />
    </>
  );
}
