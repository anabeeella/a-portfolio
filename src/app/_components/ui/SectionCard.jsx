import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Flex,
  Box,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const SectionCard = ({
  id,
  link,
  title,
  description,
  tags = [],
  onClick,
  minWidth = '320px',
  className = '',
  index = 0,
  isComingSoon = '',
  variant = 'default',
}) => {
  const isDisabled = Boolean(isComingSoon) || variant === 'disabled';

  const handleClick = e => {
    if (isDisabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  // Estilos específicos por variante
  const getVariantStyles = () => {
    switch (variant) {
      case 'hover':
        return {
          bg: 'whiteAlpha.200',
          borderColor: 'whiteAlpha.400',
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        };
      case 'focus':
        return {
          bg: 'whiteAlpha.100',
          borderColor: 'earth.300',
          boxShadow: '0 0 0 2px rgba(255, 200, 89, 0.2)',
          outline: 'none',
        };
      case 'disabled':
        return {
          bg: 'whiteAlpha.50',
          borderColor: 'whiteAlpha.200',
          opacity: 0.3,
          cursor: 'not-allowed',
        };
      default:
        return {
          bg: 'whiteAlpha.100',
          borderColor: 'whiteAlpha.300',
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <MotionCard
      className={`transform transition-all duration-300 ${!isDisabled ? 'hover:shadow-xl' : ''} bg-opacity-70 ${className} ${isDisabled ? 'opacity-10 cursor-not-allowed' : 'cursor-pointer'}`}
      bg={variantStyles.bg}
      border="1px"
      borderColor={variantStyles.borderColor}
      display="flex"
      flexDirection="column"
      height="100%"
      minW={minWidth}
      onClick={handleClick}
      title={isDisabled ? 'Coming Soon' : title}
      _hover={
        isDisabled || variant === 'disabled'
          ? {}
          : { bg: 'whiteAlpha.200', borderColor: 'whiteAlpha.400' }
      }
      _focus={
        variant === 'focus'
          ? { boxShadow: '0 0 0 2px rgba(255, 200, 89, 0.2)' }
          : {}
      }
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0, 1],
      }}
      transition={{
        duration: 1,
        delay: index * 0.15,
        times: [0, 0.3, 1],
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <CardHeader borderBottom="1px" borderColor="whiteAlpha.300">
        <Flex
          justifyContent="space-between"
          fontFamily="mono"
          fontSize="sm"
          lineHeight="relaxed"
          color={isDisabled ? 'grisMetal.600' : 'earth.500'}
        >
          <Text>{id}</Text>
          <Text>{link}</Text>
        </Flex>
        <Heading
          as="h2"
          fontFamily="heading"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          gap={2}
          color={isDisabled ? 'grisMetal.600' : 'earth.300'}
          fontSize={{ base: 'xl', md: '3xl' }}
        >
          <span className="relative">{title}</span>
        </Heading>
      </CardHeader>
      <CardBody display="flex" flexDirection="column" flex="1">
        <Text
          fontSize="md"
          lineHeight="relaxed"
          mb={4}
          color={isDisabled ? 'grisMetal.600' : 'earth.50'}
        >
          {description}
        </Text>
        <Box mt="auto">
          <HStack spacing={2} wrap="wrap">
            {tags &&
              tags.map(tag => (
                <Text
                  key={tag}
                  color={isDisabled ? 'grisMetal.600' : 'earth.200'}
                  fontFamily="mono"
                  fontSize="xs"
                  lineHeight="relaxed"
                >
                  #{tag}
                </Text>
              ))}
          </HStack>
        </Box>
      </CardBody>
    </MotionCard>
  );
};

export default SectionCard;
