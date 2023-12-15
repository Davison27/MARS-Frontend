import { useTranslation } from 'react-i18next'
import { H1 } from '~/styles'

const Profile = () => {
  const { t } = useTranslation()
  return (
    <>
      <H1>{t('profile.title')}</H1>
      <>This is the home page</>
    </>
  )
}

export default Profile
