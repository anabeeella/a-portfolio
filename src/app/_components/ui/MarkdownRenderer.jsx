import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/navigation';
import { Box, Heading, Text, Image, Flex, Wrap } from '@chakra-ui/react';

export default function MarkdownRenderer({
  content,
  fontSize = 'lg',
  color = 'earth.200',
}) {
  const router = useRouter();
  return (
    <Box fontSize={fontSize} color={color} lineHeight="1.7">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <Heading as="h1" fontSize="2xl" color="earth.300" mb={3} mt={6}>
              {children}
            </Heading>
          ),
          h2: ({ children }) => (
            <Heading as="h2" fontSize="xl" color="earth.300" mb={3} mt={5}>
              {children}
            </Heading>
          ),
          h3: ({ children }) => (
            <Heading as="h3" fontSize="lg" color="earth.300" mb={2} mt={4}>
              {children}
            </Heading>
          ),
          h4: ({ children }) => (
            <Heading as="h4" fontSize="md" color="earth.300" mb={2} mt={3}>
              {children}
            </Heading>
          ),
          h5: ({ children }) => (
            <Heading as="h5" fontSize="sm" color="earth.300" mb={1} mt={3}>
              {children}
            </Heading>
          ),
          h6: ({ children }) => (
            <Heading as="h6" fontSize="xs" color="earth.300" mb={1} mt={2}>
              {children}
            </Heading>
          ),
          p: ({ children }) => <Text lineHeight="1.5">{children}</Text>,
          ul: ({ children }) => (
            <Box as="ul" pl={6} mb={6}>
              {children}
            </Box>
          ),
          ol: ({ children }) => (
            <Box as="ol" pl={6} mb={6}>
              {children}
            </Box>
          ),
          li: ({ children }) => (
            <Text as="li" listStyleType="disc" mb={1}>
              {children}
            </Text>
          ),
          strong: ({ children }) => (
            <Text as="span" fontWeight="bold" color="earth.100">
              {children}
            </Text>
          ),
          em: ({ children }) => (
            <Text as="span" fontStyle="italic" color="earth.150">
              {children}
            </Text>
          ),
          blockquote: ({ children }) => (
            <Box
              as="blockquote"
              borderLeft="4px"
              borderColor="earth.400"
              pl={4}
              py={2}
              my={4}
              bg="whiteAlpha.50"
              borderRadius="md"
            >
              {children}
            </Box>
          ),
          code: ({ children }) => (
            <Text
              as="code"
              bg="whiteAlpha.100"
              px={2}
              py={1}
              borderRadius="sm"
              fontFamily="mono"
              fontSize="sm"
              color="earth.100"
            >
              {children}
            </Text>
          ),
          pre: ({ children }) => (
            <Box
              as="pre"
              bg="whiteAlpha.100"
              p={4}
              borderRadius="md"
              overflow="auto"
              my={4}
              fontFamily="mono"
              fontSize="sm"
            >
              {children}
            </Box>
          ),
          hr: () => <Box as="hr" borderColor="whiteAlpha.300" my={6} />,
          img: ({ src, alt }) => (
            <Image
              src={src}
              alt={alt}
              maxW="100%"
              height="auto"
              borderRadius="md"
              mb={6}
              mt={6}
              mx="auto"
              display="inline-block"
            />
          ),
          a: ({ children, href }) => {
            const isInternalLink = href && href.startsWith('/');

            const handleClick = e => {
              if (isInternalLink) {
                e.preventDefault();
                router.push(href);
              }
            };

            return (
              <Text
                as="a"
                href={href}
                color="earth.200"
                textDecoration="underline"
                cursor="pointer"
                _hover={{
                  color: 'earth.100',
                  textDecoration: 'none',
                }}
                onClick={handleClick}
                target={isInternalLink ? undefined : '_blank'}
                rel={isInternalLink ? undefined : 'noopener noreferrer'}
              >
                {children}
              </Text>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
}
