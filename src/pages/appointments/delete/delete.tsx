import { useTranslation } from 'react-i18next'
import Button from '~/stories/Button'
import { H1, H3, H4, Text } from '~/styles'

const Delete = () => {
  const { t } = useTranslation()
  return (
    <>
      <H3>{t('delete.title')}</H3>
      <Text>{t('delete.text')}</Text>
      <H3>
        <Button label={t('button.delete')} backgroundColor="#d12727" />
      </H3>
    </>
  )
}

export default Delete
