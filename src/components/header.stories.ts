import { Meta, StoryObj } from '@storybook/react'
import Header from './header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    // ToDo: Add argTypes
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
