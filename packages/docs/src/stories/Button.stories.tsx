import type { StoryObj, Meta } from '@storybook/react'

import { Button } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Clique aqui',
  },
} as Meta

export const Primary: StoryObj = {}
