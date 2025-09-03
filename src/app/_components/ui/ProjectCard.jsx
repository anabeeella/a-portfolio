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
} from '@chakra-ui/react';

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
  return (
    <Card
      onClick={() => !isComingSoon && window.open(link, '_blank')}
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
                filter: 'sepia(0%)',
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
            filter="sepia(50%)"
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
              <Tag
                key={tag}
                scheme="earth"
                fontFamily="mono"
                fontSize="xs"
                color="earth.700"
              >
                {tag}
              </Tag>
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
        <Box className="font-mono text-sm color-earth-500">
          <Text mb={1}>
            Role: <span className="text-earth-200">{role}</span>
          </Text>
          {client && (
            <Text>
              Client: <span className="text-earth-200">{client}</span>
            </Text>
          )}
        </Box>
      </CardHeader>
      <CardBody fontSize="sm" color="earth.400">
        {isComingSoon && (
          <Text className="text-earth-100 text-sm font-mono leading-relaxed text-center">
            Coming Soon
          </Text>
        )}
        {!isComingSoon && (
          <Text className="text-earth-100 text-md leading-relaxed">
            {description}
          </Text>
        )}
      </CardBody>
    </Card>
  );
}
