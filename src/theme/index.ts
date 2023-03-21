// https://github.com/nikolovlazar/egghead-getting-started-with-chakra-ui/blob/lesson-9/src/theme/index.ts
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { brandRing } from './config'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  colors: {
    primary: {
      500: 'var(--color-primary-500)',
      600: 'var(--color-primary-600)',
    },
    neutral: {
      900: '--color-neutral-900',
      800: '--color-neutral-800',
      500: '--color-neutral-500',
      300: '--color-neutral-300',
      200: '--color-neutral-200',
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({}),
  },
  components: {
    Button: {
      variants: {
        primary: (props: Record<string, any>) => ({
          rounded: '20px',
          ...brandRing,
          color: mode('white', 'gray.800')(props),
          backgroundColor: mode('brand.500', 'brand.200')(props),

          _hover: {
            backgroundColor: mode('brand.600', 'brand.300')(props),
          },

          _active: {
            backgroundColor: mode('brand.700', 'brand.400')(props),
          },
        }),
      },
    },
  },
})

export default theme
