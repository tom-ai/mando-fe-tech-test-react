import { Meta, StoryObj } from '@storybook/react'
import PageTitle, { PageTitleProps } from './PageTitle'
import { imageData } from '../lib/data'

export const { h1, description, image }: PageTitleProps = {
  h1: 'Page Title',
  description: `HTML elements are the building
                blocks of HTML pages. With
                HTML constructs, images and
                other objects such as interactive
                forms may be embedded into
                the rendered page.`,
  image: { src: imageData.cloudsPink.src, alt: imageData.cloudsPink.alt }
}

const meta = {
  component: PageTitle,
  args: {
    h1: h1,
    description: description,
    image: { src: image.src, alt: image.alt }
  }
} satisfies Meta<typeof PageTitle>

export default meta

export const basic: StoryObj = {}
