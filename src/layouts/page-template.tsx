import Header from '@components/header'
import PageTitle from '@root/components/PageTitle'
import { h1, description, image } from '@components/PageTitle.stories'
import { menuItems } from '@components/header.stories'

function PageTemplate() {
  return (
    <>
      <Header menuItems={menuItems} siteHeader="Mando Group" />
      <PageTitle h1={h1} description={description} image={image} />
    </>
  )
}

export default PageTemplate
