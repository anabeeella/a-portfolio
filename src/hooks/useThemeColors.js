import { useColorModeValue } from '@chakra-ui/react';

/**
 * Custom hook for consistent theme colors across the application
 * Follows the rule: earth.200 (dark) → earth.600 (light)
 */
export const useThemeColors = () => {
  return {
    // Text colors
    text: {
      primary: useColorModeValue('earth.600', 'earth.200'),
      secondary: useColorModeValue('earth.600', 'earth.300'),
      body: useColorModeValue('earth.600', 'earth.100'),
      muted: useColorModeValue('earth.600', 'earth.500'),
    },

    // Background colors
    background: {
      primary: useColorModeValue('grisMetal.50', 'grisMetal.800'),
      secondary: useColorModeValue('grisMetal.100', 'grisMetal.900'),
      card: useColorModeValue('whiteAlpha.200', 'whiteAlpha.100'),
      cardHover: useColorModeValue('whiteAlpha.300', 'whiteAlpha.200'),
    },

    // Border colors
    border: {
      primary: useColorModeValue('earth.200', 'whiteAlpha.300'),
      hover: useColorModeValue('earth.300', 'whiteAlpha.500'),
    },

    // Icon colors
    icon: {
      primary: useColorModeValue('earth.600', 'earth.300'),
      secondary: useColorModeValue('earth.600', 'earth.400'),
    },

    // Link colors
    link: {
      primary: useColorModeValue('earth.600', 'earth.200'),
      hover: useColorModeValue('earth.600', 'earth.300'),
    },

    // Tooltip colors
    tooltip: {
      background: useColorModeValue('grisMetal.100', 'blackAlpha.300'),
      text: useColorModeValue('earth.600', 'earth.200'),
    },
  };
};
