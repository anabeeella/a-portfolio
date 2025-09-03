'use client';

import React from 'react';

export const dynamic = 'force-dynamic';
import {
  Box,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import Header from '../../_components/layout/Header';
import Footer from '../../_components/layout/Footer';
import Location from '../../_components/layout/Location';
import TypewriterText from '../../_components/ui/TypewriterText';
import { useRouter } from 'next/navigation';
import posts from '../../_content/blog/posts';

export default function Posts() {
  const router = useRouter();
  const headingColor = useColorModeValue('earth.600', 'earth.300');
  const textColor = useColorModeValue('earth.600', 'earth.100');
  const bodyTextColor = useColorModeValue('earth.600', 'earth.100');
  const mutedTextColor = useColorModeValue('earth.600', 'earth.200');

  const formatDate = dateString => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <Location />
      <Header />
      <main className="max-w-5xl w-full mx-auto px-4">
        <Box color={textColor} py={8}>
          <Heading
            color={headingColor}
            className="text-4xl font-bold"
            mb={4}
            mr={4}
          >
            <TypewriterText text="Posts" />
          </Heading>
          <Text color={textColor} className="text-md max-w-xl" mb={8}>
            Latest articles and insights about design, development, and
            technology.
            <br />
            Here you'll find in-depth analysis, tutorials, and thoughts from the
            field.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {posts.map(post => (
            <Link
              key={post.id}
              onClick={() => router.push(`/blog/posts/${post.slug}`)}
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                p={6}
                border="1px solid"
                borderColor="earth.300"
                borderRadius="4px"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  borderColor: 'earth.200',
                }}
              >
                <Text
                  fontSize="xs"
                  fontFamily="mono"
                  color={mutedTextColor}
                  mb={2}
                >
                  {formatDate(post.date)}
                </Text>
                <Heading as="h3" color={headingColor} fontSize="xl" mb={2}>
                  {post.title}
                </Heading>
                <Text color={bodyTextColor} fontSize="sm" mb={4}>
                  {post.excerpt}
                </Text>
                <Text fontSize="xs" fontFamily="mono" color={mutedTextColor}>
                  {post.category}
                </Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </main>
      <Footer />
    </>
  );
}
