import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Heading, 
  Text, 
  Flex, 
  Box, 
  HStack 
} from "@chakra-ui/react";
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const SectionCard = ({
  id,
  link,
  title,
  description,
  tags = [],
  onClick,
  tooltip,
  minWidth = "320px",
  className = "",
  index = 0,
}) => {
  return (
    <MotionCard 
      className={`transform transition-all duration-300 hover:shadow-xl bg-opacity-70 ${className}`}
      bg="whiteAlpha.100"
      border="1px"
      borderColor="whiteAlpha.300"
      display="flex"
      flexDirection="column"
      cursor="pointer"
      height="100%"
      minW={minWidth}
      onClick={onClick}
      title={tooltip}
      _hover={{ bg: "whiteAlpha.200", borderColor: "whiteAlpha.400" }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 0, 1]
      }}
      transition={{ 
        duration: 1,
        delay: index * 0.15,
        times: [0, 0.3, 1],
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <CardHeader borderBottom="1px" borderColor="whiteAlpha.300">
        <Flex justifyContent="space-between" className="text-earth-500 font-mono text-sm leading-relaxed">
          <Text>{id}</Text>
          <Text>{link}</Text>
        </Flex>
        <Heading 
          as="h2" 
          className="text-earth-300 font-global font-bold flex items-center gap-2"
          fontSize={{ base: "xl", md: "3xl" }}
        >
          <span className="relative">
            {title}
          </span>
        </Heading>
      </CardHeader>
      <CardBody display="flex" flexDirection="column" flex="1">
        <Text className="text-earth-50 text-md leading-relaxed mb-4">
          {description}
        </Text>
        <Box mt="auto">
          <HStack spacing={2} wrap="wrap">
            {tags.map((tag) => (
              <Text key={tag} className="text-earth-500 font-mono text-xs leading-relaxed">
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