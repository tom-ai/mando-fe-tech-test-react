import { Meta, StoryObj } from '@storybook/react'
import Header, { MenuItem } from './header'

export const menuItems: MenuItem[] = [
  { label: 'About us', url: '/about-us' },
  { label: 'Contact us', url: '/contact-us' }
]

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    siteHeader: 'Mando Group',
    menuItems: menuItems
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
