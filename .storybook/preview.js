/** @type { import('@storybook/react').Preview } */
import theme from '../src/theme'
const preview = {
  parameters: {
    chakra: {
      theme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
