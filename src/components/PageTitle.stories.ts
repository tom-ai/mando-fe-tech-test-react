import { Meta, StoryObj } from '@storybook/react'
import PageTitle from './PageTitle'
import { pageTitleData } from '../lib/data'

const meta = {
  component: PageTitle,
  args: {
    h1: pageTitleData.h1,
    description: pageTitleData.description,
    image: pageTitleData.image,
    imageAlt: pageTitleData.imageAlt
  }
} satisfies Meta<typeof PageTitle>

export default meta

export const basic: StoryObj = {}
