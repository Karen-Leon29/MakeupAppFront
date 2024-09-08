import { RegisterPage, LoginPage, RecoveryPassword, NewPassword } from 'modules/auth/pages'
import { HomePage } from 'modules/homeoage/pages/home'
import { Route, Routes } from 'react-router-dom'

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path={'/'} element={<LoginPage />} />
      <Route path={'/register'} element={<RegisterPage />} />
      <Route path={'/recovery-password'} element={<RecoveryPassword />} />
      <Route path={'/new-password'} element={<NewPassword />} />
      <Route path={'/homepage'} element={<HomePage />} />
    </Routes>
  )
}
