import Header from '@components/header'
import PageTitle from '@root/components/PageTitle'
import { pageTitleData } from '@root/lib/data'

function PageTemplate() {
  return (
    <>
      <Header />
      <PageTitle {...pageTitleData} />
    </>
  )
}

export default PageTemplate
