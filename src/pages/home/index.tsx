import { useTranslation } from 'react-i18next'
import { H1 } from '~/styles'

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <H1>{t('home.title')}</H1>
      <>This is the home page</>
    </>
  )
}

export default Home
