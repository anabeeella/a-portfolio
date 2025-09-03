'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Image,
  Tag,
  Flex,
  Box,
  Badge,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function ProjectCard({
  id,
  date,
  name,
  description,
  image,
  role,
  tools,
  tags,
  client,
  isComingSoon,
  link,
}) {
  const router = useRouter();

  // Function to convert project name to URL-friendly slug
  const createSlug = projectName => {
    return projectName
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, '') // Remove special characters except hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  };

  const handleClick = () => {
    if (!isComingSoon) {
      const slug = createSlug(name);
      router.push(`/projects/${slug}`);
    }
  };
  return (
    <Card
      onClick={handleClick}
      cursor={isComingSoon ? 'default' : 'pointer'}
      overflow="hidden"
      key={id}
      className="transform transition-all duration-300 bg-opacity-70"
      bg="whiteAlpha.100"
      border="1px"
      borderColor="whiteAlpha.300"
      display="flex"
      flexDirection="column"
      height="100%"
      _hover={
        !isComingSoon
          ? {
              borderColor: 'whiteAlpha.500',
              '& .project-image': {
                filter: 'none',
              },
            }
          : {}
      }
    >
      <Box className="relative">
        {!isComingSoon && (
          <Image
            objectFit="cover"
            src={image}
            alt={name}
            className="project-image w-full h-full object-cover transition-all duration-500"
            minHeight="380px"
            maxHeight="400px"
            height="100%"
            width="100%"
          />
        )}
        {isComingSoon && (
          <Image
            src={image}
            alt={name}
            className="project-image w-full h-full object-cover transition-all duration-500"
            minHeight="160px"
            maxHeight="200px"
            filter="blur(10px)"
          />
        )}
        <Flex position="absolute" bottom={2} right={2} gap={2}>
          {tags &&
            tags.map(tag => (
              <Badge
                colorScheme="earth"
                variant="subtle"
                px={3}
                py={1}
                fontSize="sm"
                fontFamily="mono"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
        </Flex>
      </Box>
      <CardHeader borderBottom="1px" borderColor="whiteAlpha.300">
        <Heading
          as="h2"
          fontWeight="bold"
          color="earth.300"
          display="flex"
          alignItems="center"
          gap={2}
          mb={1}
          className="font-global"
          fontSize={{ base: '2xl', md: '3xl' }}
        >
          {name}
        </Heading>
        {isComingSoon && (
          <Text
            className="text-sm font-mono leading-relaxed text-center"
            color="earth.300"
          >
            Coming Soon
          </Text>
        )}
        {!isComingSoon && (
          <Text className="text-md leading-relaxed" color="earth.200">
            {description}
          </Text>
        )}
      </CardHeader>
      <CardBody fontSize="sm">
        <Box
          className="font-mono text-sm"
          color="earth.300"
          textTransform="uppercase"
        >
          <Text mb={1}>
            Role: <span>{role}</span>
          </Text>
          {client && (
            <Text>
              Client: <span>{client}</span>
            </Text>
          )}
        </Box>
      </CardBody>
    </Card>
  );
}
