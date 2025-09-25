import type { Preview } from "@storybook/react";
import '../src/styles/main.scss'
import 'virtual:svg-icons-register'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
