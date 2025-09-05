'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
} from '@chakra-ui/react';
import { FaGithub, FaPlay } from 'react-icons/fa';

export default function GameCard({
  id,
  name,
  date,
  description,
  image,
  languages,
  playLink,
  githubLink,
  tags,
  isComingSoon,
}) {
  const isDisabled = Boolean(isComingSoon);

  return (
    <Card
      minWidth="300px"
      key={id}
      className={`transform transition-all duration-300 bg-opacity-70 ${isDisabled ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'}`}
      bg="whiteAlpha.100"
      border="1px"
      borderColor={isDisabled ? 'whiteAlpha.200' : 'whiteAlpha.300'}
      display="flex"
      flexDirection="column"
      height="100%"
      _hover={isDisabled ? {} : { borderColor: 'whiteAlpha.500' }}
    >
      <CardHeader borderBottom="1px" borderColor="whiteAlpha.300">
        <Flex justifyContent="space-between">
          <Text
            fontFamily="mono"
            fontSize="sm"
            color={isDisabled ? 'grisMetal.600' : 'earth.500'}
          >
            {date}
          </Text>
          <Text
            fontFamily="mono"
            fontSize="sm"
            color={isDisabled ? 'grisMetal.600' : 'earth.500'}
          >
            #{id}
          </Text>
        </Flex>
        <Heading
          as="h2"
          fontWeight="bold"
          color={isDisabled ? 'grisMetal.600' : 'earth.300'}
          display="flex"
          alignItems="center"
          gap={2}
          mb={1}
          className="font-global"
          fontSize={{ base: '2xl', md: '3xl' }}
        >
          {name}
        </Heading>
        <Text
          fontFamily="mono"
          fontSize="sm"
          color={isDisabled ? 'grisMetal.600' : 'earth.300'}
        >
          {languages}
        </Text>
      </CardHeader>
      <CardBody display="flex" flexDirection="column" flex="1">
        {isComingSoon ? (
          <></>
        ) : (
          <Box className="relative aspect-video mb-4 overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </Box>
        )}
        <Text
          fontSize="md"
          lineHeight="relaxed"
          mb={4}
          flex="1"
          color={isDisabled ? 'grisMetal.600' : 'earth.100'}
        >
          {description}
        </Text>
        {tags && tags.length > 0 && (
          <Box mb={4} display="flex" flexWrap="wrap" gap={2}>
            {tags.map(tag => (
              <Text
                key={tag}
                fontFamily="mono"
                fontSize="xs"
                color={isDisabled ? 'grisMetal.600' : 'earth.400'}
              >
                #{tag}
              </Text>
            ))}
          </Box>
        )}
        <Box mt="auto">
          {isComingSoon ? (
            <></>
          ) : (
            <ButtonGroup
              mt="auto"
              w="full"
              flexDirection={{ base: 'column', md: 'row' }}
              spacing={{ base: 0, md: 2 }}
            >
              {githubLink && (
                <Button
                  variant="outline"
                  className="bg-earth-300 hover:bg-earth-200 text-background"
                  onClick={() => window.open(githubLink, '_blank')}
                  size="md"
                  leftIcon={<FaGithub />}
                  w="full"
                >
                  GitHub
                </Button>
              )}
              {playLink && (
                <Button
                  variant="solid"
                  className="bg-earth-300 hover:bg-earth-200 text-background"
                  onClick={() => window.open(playLink, '_blank')}
                  size="md"
                  leftIcon={<FaPlay size={9} />}
                  w="full"
                >
                  Play Now
                </Button>
              )}
            </ButtonGroup>
          )}
        </Box>
      </CardBody>
    </Card>
  );
}
