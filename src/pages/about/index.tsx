import { useTranslation } from 'react-i18next'
import { HospitalWrapper, HospitalImage, Slogan, BoxWrapper } from './styles'
import { H1, Box, H3, H4, Text } from '~/styles'
import hospital from '~/assets/images/hospital-image.jpg'

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <H1>{t('about.title')}</H1>
      <HospitalWrapper>
        <HospitalImage src={hospital}></HospitalImage>
        <Slogan>{t('about.slogan')}</Slogan>
      </HospitalWrapper>
      <BoxWrapper>
        <Box>
          <H3>{t('about.mission')}</H3>
          <Text>{t('about.missionText')}</Text>
        </Box>
        <Box>
          <H3>{t('about.vision')}</H3>
          <Text>{t('about.visionText')}</Text>
        </Box>
      </BoxWrapper>
      <Box>
        <H3>{t('about.values')}</H3>
        <H4>{t('about.valuesText.security')}</H4>
        <Text>{t('about.valuesText.securityText')}</Text>
        <H4>{t('about.valuesText.professionalism')}</H4>
        <Text>{t('about.valuesText.professionalismText')}</Text>
        <H4>{t('about.valuesText.innovation')}</H4>
        <Text>{t('about.valuesText.innovationText')}</Text>
        <H4>{t('about.valuesText.normative')}</H4>
        <Text>{t('about.valuesText.normativeText')}</Text>
        <H4>{t('about.valuesText.sustainable')}</H4>
        <Text>{t('about.valuesText.sustainableText')}</Text>
      </Box>
    </>
  )
}

export default About
