import { Meta, StoryObj } from '@storybook/react'
import Header, { MenuItem, SiteLogo } from './header'

export const menuItems: MenuItem[] = [
  { label: 'About us', url: '/about-us' },
  { label: 'Contact us', url: '/contact-us' }
]

export const siteLogo: SiteLogo = {
  src: 'public/images/mandogroup_logo.svg',
  alt: 'Mando Group logo',
  url: undefined
}

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    siteLogo: siteLogo,
    menuItems: menuItems
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
