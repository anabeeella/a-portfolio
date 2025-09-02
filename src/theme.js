import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'var(--font-global)',
    body: 'var(--font-text)',
    mono: 'var(--font-mono)',
    calligraphic: 'var(--font-calligraphic)',
    screen: 'var(--font-screen)',
    typewriter: 'var(--font-typewriter)',
  },
  colors: {
    grisMetal: {
      50: '#f4f4f5',
      100: '#e4e4e7',
      200: '#d4d4d8',
      300: '#a1a1aa',
      400: '#71717a',
      500: '#52525b',
      600: '#3f3f46',
      700: '#27272a',
      800: '#18181b',
      900: '#121214',
    },
    earth: {
      50: '#faf6f1',  // Muy claro, casi blanco
      100: '#f5ede3', // Crema claro
      200: '#e6d5c3', // Beige claro
      300: '#d4bda3', // Beige medio
      400: '#c2a583', // Beige oscuro
      500: '#b08d63', // Marrón claro
      600: '#8e6b43', // Marrón medio
      700: '#6d4c23', // Marrón oscuro
      800: '#4c2d03', // Marrón muy oscuro
      900: '#2b1a00', // Casi negro
    },
    gold: {
      50: '#fffbe6',
      100: '#fff3bf',
      200: '#ffe066',
      300: '#ffd43b',
      400: '#fcc419',
      500: '#fab005',
      600: '#f59f00',
      700: '#f08c00',
      800: '#e67700',
      900: '#d9480f',
    },
  },
  components: {
    Card: {
      baseStyle: {
        container: {
          bg: 'grisMetal.900',
          color: 'earth.50',
          position: 'relative',
        },
      },
    },
    Prose: {
      baseStyle: {
        color: 'earth.100',
      },
    },
    Button: {
      baseStyle: { 
        fontFamily: 'var(--font-global)',
        borderRadius: '0',
        _focusVisible: {
          boxShadow: '0 0 0 2px rgba(255, 200, 89, 0.2)',
        },
      },
      variants: {
        solid: {
          border: '.5px solid',
          borderColor: 'earth.300',
          borderRadius: '0', 
          color: 'earth.900',
          bg: 'earth.300',
          _hover: {
            bg: 'earth.700',
            borderColor: 'earth.700',
            color: 'earth.100',
          },
          _active: {
            bg: 'earth.800',
            borderColor: 'earth.800',
          },
        },
        outline: {
          border: '.5px solid',
          borderColor: 'earth.300',
          color: 'earth.300',
          bg: 'transparent',
          _hover: {
            bg: 'grisMetal.700',
            color: 'earth.100',
            borderColor: 'earth.100',
          },
          _active: {
            bg: 'grisMetal.800',
          },
        },
        ghost: {
          color: 'earth.300',
          bg: 'transparent',
          _hover: {
            bg: 'grisMetal.700',
          },
          _active: {
            bg: 'grisMetal.600',
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'grisMetal.800',
        color: 'earth.50',
      },
      '--chakra-colors-chakra-body-bg': 'grisMetal.800',
    },
  },
});

export default theme; 