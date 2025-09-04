import React from 'react';
import { Box, Container, VStack } from '@chakra-ui/react';
import TypewriterScreen from '../_components/features/TypewriterScreen';
import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'A-Portfolio | Field Report',
  description:
    'A-Portfolio: Field Report from the design frontline. Insights from Anabella Rizzi — UX/UI & Product Designer — on building digital products end-to-end, design systems, and the art of making things work (and look) better.',
  keywords: [
    'UX Design',
    'UI Design',
    'Product Design',
    'Design Systems',
    'Frontend Development',
    'Portfolio',
    'Case Studies',
    'Anabella Rizzi',
  ],
  authors: [
    {
      name: 'Anabella Rizzi',
      url: 'https://www.linkedin.com/in/anabella-rizzi',
    },
  ],
  openGraph: {
    title: 'A-Portfolio | Field Report',
    description:
      'Field Report from the design frontline. Case studies, experiments, and reflections by Anabella Rizzi — exploring UX, UI, frontend, and creative process.',
    url: 'https://pajarita.netlify.app/intro',
    siteName: 'A-Portfolio',
    images: [
      {
        url: '/images/me.png',
        width: 1200,
        height: 630,
        alt: 'Anabella Rizzi - UX/UI & Product Designer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A-Portfolio | Field Report',
    description:
      'Design stories, process, and case studies by Anabella Rizzi. A UX/UI designer’s perspective on building products end-to-end.',
    images: ['/images/me.png'],
    creator: '@anabeeella', // if you have Twitter handle
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Server-side function to read the intro.md file
function getIntroContent() {
  const filePath = path.join(process.cwd(), 'src/app/_content/intro.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent;
}

export default function IntroPage() {
  const introContent = getIntroContent();
  return (
    <Box
      minH="100vh"
      bg="grisMetal.800"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      <Container centerContent minW="5xl">
        <VStack spacing={8} w="full">
          <Box
            w="full"
            bg="whiteAlpha.100"
            borderRadius="lg"
            border="1px"
            borderColor="whiteAlpha.300"
            p={6}
            boxShadow="xl"
          >
            <TypewriterScreen content={introContent} />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
