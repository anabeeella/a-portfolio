// Centralized color configuration
export const colors = {
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
    50: '#faf6f1', // Muy claro, casi blanco
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
};

// Theme-aware color mappings
export const themeColors = {
  // Text colors following the rule: earth.200 (dark) → earth.600 (light)
  text: {
    primary: { light: 'earth.600', dark: 'earth.200' },
    secondary: { light: 'earth.600', dark: 'earth.300' },
    body: { light: 'earth.600', dark: 'earth.100' },
    muted: { light: 'earth.600', dark: 'earth.500' },
  },
  // Background colors
  background: {
    primary: { light: 'grisMetal.50', dark: 'grisMetal.800' },
    secondary: { light: 'grisMetal.100', dark: 'grisMetal.900' },
    card: { light: 'whiteAlpha.200', dark: 'whiteAlpha.100' },
  },
  // Border colors
  border: {
    primary: { light: 'earth.200', dark: 'whiteAlpha.300' },
    hover: { light: 'earth.300', dark: 'whiteAlpha.500' },
  },
};
