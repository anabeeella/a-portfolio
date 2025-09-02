'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Box, Container, Heading, Text, Image, VStack, HStack, Tag, Spinner, Center, useColorModeValue } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import posts from '@/app/_content/blog/posts';
import Header from '@/app/_components/layout/Header';
import Footer from '@/app/_components/layout/Footer';
import Location from '@/app/_components/layout/Location';

export default function BlogPost() {
    const params = useParams();
    const [post, setPost] = useState(null);
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const headingColor = useColorModeValue('earth.600', 'earth.300');
    const textColor = useColorModeValue('earth.600', 'earth.200');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const currentPost = posts.find(p => p.slug === params.slug);
                if (!currentPost) {
                    throw new Error('Post not found');
                }
                setPost(currentPost);

                console.log('Fetching content from:', currentPost.content);
                const response = await fetch(currentPost.content);
                if (!response.ok) {
                    throw new Error(`Failed to load content: ${response.statusText}`);
                }
                const text = await response.text();
                console.log('Content loaded:', text.substring(0, 100) + '...');
                setContent(text);
            } catch (err) {
                console.error('Error loading content:', err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchContent();
    }, [params.slug]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    if (isLoading) {
        return (
            <Center minH="50vh">
                <Spinner size="xl" color="brand.500" />
            </Center>
        );
    }

    if (error) {
        return (
            <Container maxW="container.md" py={8}>
                <Text color="red.500">Error: {error}</Text>
            </Container>
        );
    }

    if (!post) {
        return (
            <Container maxW="container.md" py={8}>
                <Text>Post not found</Text>
            </Container>
        );
    }

    return (
        <>
        <Location />
            <Header />
            <main className="max-w-3xl w-full mx-auto px-4 py-40">
                <VStack spacing={8} align="stretch">
                    {post.coverImage && (
                        <>
                        <VStack spacing={4} align="stretch" mb={8}>
                          <Heading as="h1" size="2xl" fontFamily="heading" color={headingColor}>
                             {post.title}
                            </Heading>
                            <HStack spacing={4}>
                              <Text fontSize="md" fontFamily="mono" color={textColor}>
                                {formatDate(post.date)}
                              </Text>
                              <Tag size="sm" variant="outline" colorScheme="brand" textTransform="capitalize">
                                {post.category}
                              </Tag>
                              </HStack>
                              </VStack>
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            w="full"
                            h="400px"
                            objectFit="cover"
                            borderRadius="lg"
                        />
                        </>
                    )}

                    <Box className="prose prose-invert max-w-none">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </Box>
                </VStack>
            </main>
            <Footer />
        </>
    );
}