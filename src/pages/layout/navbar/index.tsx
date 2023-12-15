import { useTranslation } from 'react-i18next'
import { NavWrapper, Logo, User, UserWrapper, Link, List } from './styles'
import logo from '~/assets/icons/logo.svg'
import user from '~/assets/icons/user.png'

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <NavWrapper>
      <List>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Link to={'/'}>{t('navbar.home')}</Link>
        <Link to={'/appointments'}>{t('navbar.appointments')}</Link>
        <Link to={'/profile'}>{t('navbar.profile')}</Link>
        <Link to={'/about'}>{t('navbar.about')}</Link>
      </List>
      <UserWrapper>
        <div>{t('navbar.welcome')} David</div>
        <User src={user} alt="user" />
      </UserWrapper>
    </NavWrapper>
  )
}

export default Navbar
