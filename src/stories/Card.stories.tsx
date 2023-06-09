import { StoryFn, Meta } from '@storybook/react'

import { Button } from '@chakra-ui/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const ColorScheme = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorScheme.args = {
  colorScheme: 'orange',
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  label: 'Button',
}
