// https://github.com/nikolovlazar/egghead-getting-started-with-chakra-ui/blob/lesson-9/src/theme/index.ts
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { brandRing, borderRadius } from './config'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    yellow: { DEFAULT: 'var(--color-yellow)' },
    purple: { DEFAULT: 'var(--color-purple)' },
    primary: {
      400: 'var(--color-primary-400)',
      500: 'var(--color-primary-500)',
      600: 'var(--color-primary-600)',
      700: 'var(--color-primary-700)',
    },
    neutral: {
      900: 'var(--color-neutral-900)',
      800: 'var(--color-neutral-700)',
      500: 'var(--color-neutral-500)',
      300: 'var(--color-neutral-300)',
      200: 'var(--color-neutral-200)',
    },
  },
  ...borderRadius,
  styles: {
    global: (props: { colorMode: string }) => ({}),
  },
  components: {
    Button: {
      variants: {
        primary: (props: Record<string, any>) => ({
          rounded: '20px',
          ...brandRing,
        }),
      },
    },
    Card: {
      baseStyle: {
        borderRadius: '2xl',
      },
    },
  },
})

export default theme
