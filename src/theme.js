import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Press Start 2P', cursive",
    body: "system-ui, sans-serif",
  },
  colors: {
    primary: {
      light: '#4FD1C5',
      dark: '#81E6D9',
    },
    background: {
      light: '#FFFFFF',
      dark: '#1A202C',
    },
    text: {
      light: '#2D3748',
      dark: '#E2E8F0',
    },
    accent: {
      success: '#48BB78',
      warning: '#ECC94B',
      danger: '#F56565',
    },
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: "'Press Start 2P', cursive",
        fontWeight: 'normal',
      },
      variants: {
        primary: {
          bg: 'primary.light',
          color: 'white',
          _hover: {
            transform: 'scale(1.05)',
            bg: 'primary.dark',
          },
          transition: 'all 0.2s',
        },
        ghost: {
          _hover: {
            bg: 'rgba(79, 209, 197, 0.1)',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'background.light',
          _dark: {
            bg: 'background.dark',
          },
          borderRadius: 'lg',
          overflow: 'hidden',
          transition: 'all 0.2s',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: 'lg',
          },
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'text.light',
        _dark: {
          color: 'text.dark',
        },
      },
      sizes: {
        sm: {
          fontSize: ['xs', 'sm'],
          lineHeight: 'short',
        },
        md: {
          fontSize: ['sm', 'md'],
          lineHeight: 'base',
        },
        lg: {
          fontSize: ['md', 'lg'],
          lineHeight: 'tall',
        },
      },
      defaultProps: {
        size: 'md',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "'Press Start 2P', cursive",
        color: 'text.light',
        _dark: {
          color: 'text.dark',
        },
        letterSpacing: '0.05em',
      },
      sizes: {
        sm: {
          fontSize: ['md', 'lg'],
          lineHeight: 'base',
        },
        md: {
          fontSize: ['lg', 'xl'],
          lineHeight: 'tall',
        },
        lg: {
          fontSize: ['xl', '2xl'],
          lineHeight: 'taller',
        },
      },
      defaultProps: {
        size: 'md',
      },
    },
  },
});

export default theme;
