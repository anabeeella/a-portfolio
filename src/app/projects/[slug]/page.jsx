'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Box,
  Heading,
  Text,
  Image,
  Tag,
  Flex,
  Container,
  Button,
  VStack,
  HStack,
  Badge,
  Divider,
} from '@chakra-ui/react';

import Header from '../../_components/layout/Header';
import Footer from '../../_components/layout/Footer';
import Location from '../../_components/layout/Location';
import MarkdownRenderer from '../../_components/ui/MarkdownRenderer';
import projects from '../projects';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const notifications = [];
  const [markdownContent, setMarkdownContent] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  // Function to convert project name to URL-friendly slug (same as in ProjectCard)
  const createSlug = projectName => {
    return projectName
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, '') // Remove special characters except hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  };

  // Find the project that matches the slug
  const project = projects.find(p => createSlug(p.name) === params.slug);

  // If project not found, redirect to projects page
  if (!project) {
    router.push('/projects');
    return null;
  }

  // Load markdown content if available
  React.useEffect(() => {
    if (project.projectContent && project.projectContent.endsWith('.md')) {
      setIsLoading(true);
      fetch(`/projects/${project.projectContent}`)
        .then(response => response.text())
        .then(content => {
          setMarkdownContent(content);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error loading markdown:', error);
          setIsLoading(false);
        });
    }
  }, [project.projectContent]);

  const handleBackClick = () => {
    router.push('/projects');
  };

  return (
    <>
      <Header />
      <Location notifications={notifications} isNotificationsEnabled={true} />

      <Box
        as="main"
        className="content-padding max-w-7xl w-full mx-auto"
        mb="120px"
        pt={{ base: '120px', md: '120px' }}
      >
        <Box mb={8}>
          <Button
            variant="ghost"
            color="earth.300"
            _hover={{ bg: 'whiteAlpha.100' }}
            onClick={handleBackClick}
          >
            ← Back to Projects
          </Button>
        </Box>

        <Container maxW="4xl" px={0}>
          <VStack spacing={8} align="stretch">
            {/* Project Header */}
            <Box>
              <VStack spacing={4} align="start">
                <Heading
                  as="h1"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  color="earth.300"
                  fontWeight="bold"
                >
                  {project.name}
                </Heading>

                <HStack spacing={4} wrap="wrap">
                  <Badge
                    colorScheme="earth"
                    variant="subtle"
                    px={3}
                    py={1}
                    fontSize="sm"
                    fontFamily="mono"
                  >
                    {project.date}
                  </Badge>
                  <Badge
                    colorScheme="earth"
                    variant="subtle"
                    px={3}
                    py={1}
                    fontSize="sm"
                    fontFamily="mono"
                  >
                    {project.role}
                  </Badge>
                  {project.client && (
                    <Badge
                      colorScheme="earth"
                      variant="subtle"
                      px={3}
                      py={1}
                      fontSize="sm"
                      fontFamily="mono"
                    >
                      {project.client}
                    </Badge>
                  )}
                </HStack>
              </VStack>
            </Box>

            {/* Project Image */}
            <Box>
              <Image
                src={project.image}
                alt={project.name}
                borderRadius="lg"
                objectFit="cover"
                width="100%"
                height={{ base: '300px', md: '400px', lg: '500px' }}
                filter={project.isComingSoon ? 'blur(10px)' : 'none'}
              />
              {project.isComingSoon && (
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  bg="blackAlpha.700"
                  px={6}
                  py={3}
                  borderRadius="md"
                >
                  <Text color="white" fontFamily="mono" fontSize="lg">
                    Coming Soon
                  </Text>
                </Box>
              )}
            </Box>

            {/* Project Description */}
            <Box>
              <Heading as="h2" fontSize="2xl" color="earth.300" mb={4}>
                About this project
              </Heading>
              <Text fontSize="lg" color="earth.200" lineHeight="1.7">
                {project.description}
              </Text>
            </Box>

            <Divider borderColor="whiteAlpha.300" />

            {/* Project Details */}
            <Box>
              <VStack spacing={6} align="stretch">
                {/* Tools */}
                {project.tools && project.tools.length > 0 && (
                  <Box>
                    <Heading as="h3" fontSize="xl" color="earth.300" mb={3}>
                      Tools & Technologies
                    </Heading>
                    <Flex wrap="wrap" gap={2}>
                      {project.tools.map((tool, index) => (
                        <Tag
                          key={index}
                          colorScheme="earth"
                          variant="subtle"
                          px={3}
                          py={1}
                          fontFamily="mono"
                          fontSize="sm"
                        >
                          {tool}
                        </Tag>
                      ))}
                    </Flex>
                  </Box>
                )}

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <Box>
                    <Heading as="h3" fontSize="xl" color="earth.300" mb={3}>
                      Categories
                    </Heading>
                    <Flex wrap="wrap" gap={2}>
                      {project.tags.map((tag, index) => (
                        <Tag
                          key={index}
                          colorScheme="earth"
                          variant="outline"
                          px={3}
                          py={1}
                          fontFamily="mono"
                          fontSize="sm"
                        >
                          {tag}
                        </Tag>
                      ))}
                    </Flex>
                  </Box>
                )}
              </VStack>
            </Box>

            {/* Markdown Content */}
            {markdownContent && (
              <>
                <Divider borderColor="whiteAlpha.300" />
                <MarkdownRenderer content={markdownContent} />
              </>
            )}
            {isLoading && (
              <Box textAlign="center" py={8}>
                <Text fontSize="lg" color="earth.400" fontStyle="italic">
                  Loading project details...
                </Text>
              </Box>
            )}

            {/* Coming Soon Notice */}
            {project.isComingSoon && (
              <Box
                bg="whiteAlpha.100"
                border="1px"
                borderColor="whiteAlpha.300"
                borderRadius="lg"
                p={6}
                textAlign="center"
              >
                <Text color="earth.200" fontFamily="mono" fontSize="lg">
                  This project is currently in development. More details coming
                  soon!
                </Text>
              </Box>
            )}
          </VStack>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
