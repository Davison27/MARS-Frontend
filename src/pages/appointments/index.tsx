import { useTranslation } from 'react-i18next'
import Button from '~/stories/Button'
import { H1 } from '~/styles'
import {
  Table,
  Attributes,
  Values,
  ValuesWrapper,
  AppointButton,
} from './styles'
import useModal from '~/hooks/useModal'
import Modal from '~/stories/Modal'
import Delete from './delete/delete'

const Appointments = () => {
  const { t } = useTranslation()
  const { isOpen, toggle } = useModal()
  const data = [
    {
      id: '132456',
      attribute11: 19,
      date: '10/07/2023 10:30',
      reason: 'Obsessive compulsive disorder',
      person: 'Pepe',
      diagnosis: 'Horrible',
    },
    {
      id: '132456',
      attribute11: 19,
      date: '10/07/2023 11:30',
      reason: 'Anxiety',
      person: 'Pepe',
      diagnosis: 'Horrible',
    },
    {
      id: '132456',
      attribute11: 25,
      date: '10/07/2023 12:30',
      reason: 'Depression',
      person: 'Pepe',
      diagnosis: 'Horrible',
    },
  ]

  return (
    <>
      <H1>{t('appointments.title')}</H1>
      <AppointButton>
        <Button label={t('appointments.addButton')}></Button>
      </AppointButton>
      <Modal isOpen={isOpen} toggle={toggle} children={<Delete />}></Modal>

      <Table>
        <tr>
          <Attributes>{t('appointments.id')}</Attributes>
          <Attributes>{t('appointments.person')}</Attributes>
          <Attributes>{t('appointments.attribute11')}</Attributes>
          <Attributes>{t('appointments.date')}</Attributes>
          <Attributes>{t('appointments.reason')}</Attributes>
          <Attributes>{t('appointments.diagnosis')}</Attributes>
          <Attributes>{t('appointments.actions')}</Attributes>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <Values>{val.id}</Values>
              <Values>{val.person}</Values>
              <Values>{val.attribute11}</Values>
              <Values>{val.date}</Values>
              <Values>{val.reason}</Values>
              <Values>{val.diagnosis}</Values>
              <Values>
                <ValuesWrapper>
                  <Button label={t('button.see')} backgroundColor="#d0effb" />
                  <Button
                    label={t('button.modify')}
                    backgroundColor="#f2b827"
                  />
                  <Button
                    label={t('button.delete')}
                    backgroundColor="#d12727"
                    onClick={toggle}
                  />
                </ValuesWrapper>
              </Values>
            </tr>
          )
        })}
      </Table>
    </>
  )
}

export default Appointments
