import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from './constants'

const Layout = lazy(() => import('~/pages/layout'))
const Home = lazy(() => import('~/pages/home'))
const Appointments = lazy(() => import('~/pages/appointments'))
const About = lazy(() => import('~/pages/about'))
const Profile = lazy(() => import('~/pages/profile'))

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.APPOINTMENTS} element={<Appointments />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Route>
    </Routes>
  </Suspense>
)

export default AppRoutes
