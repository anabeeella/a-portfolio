/** @type { import('@storybook/nextjs-vite').Preview } */

import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme.js';
import '../src/app/globals.css';

export const decorators = [
  Story => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
