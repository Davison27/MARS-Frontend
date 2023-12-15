import { Outlet } from 'react-router-dom'

import Navbar from './navbar'
import { Container } from './styles'

const Layout = () => (
  <>
    <Navbar />
    <Container>
      <Outlet />
    </Container>
  </>
)

export default Layout
