import { Meta, StoryObj } from '@storybook/react'
import PageTemplate from './page-template'

const meta: Meta<typeof PageTemplate> = {
  title: 'Templates/Landing',
  component: PageTemplate,
  argTypes: {
    // ToDo: Add argTypes
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
