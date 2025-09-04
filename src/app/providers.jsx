'use client';

import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from '../theme';

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Box className="min-h-screen flex items-center justify-center">
        {children}
      </Box>
    </ChakraProvider>
  );
}
