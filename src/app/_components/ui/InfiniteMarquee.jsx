'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';

const InfiniteMarquee = ({ children, speed = 15 }) => {
  return (
    <Box
      className="relative overflow-hidden whitespace-nowrap"
      width="100%"
    >
      <Box
        className="inline-block"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </Box>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
};

export default InfiniteMarquee; 