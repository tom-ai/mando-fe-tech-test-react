import { PageTitleProps } from '@root/components/PageTitle'

export const imageData = {
  cloudsPink: {
    src: 'public/clouds-1.jpg',
    alt: 'Warm pink clouds'
  },
  cloudsWhite: {
    src: 'public/clouds-2.jpg',
    alt: 'White clouds'
  }
}

export const pageTitleData: PageTitleProps = {
  h1: 'Page Title',
  description: `HTML elements are the building
                blocks of HTML pages. With
                HTML constructs, images and
                other objects such as interactive
                forms may be embedded into
                the rendered page.`,
  image: imageData.cloudsPink.src,
  imageAlt: imageData.cloudsPink.alt
}
