import { RegisterPage, LoginPage, RecoveryPassword, NewPassword } from 'modules/auth/pages'
import { DashboardPage } from 'modules/dashboard/pages'
import { CategoryManagement } from 'modules/dashboard/pages/categories'
import { RegisterUsers } from 'modules/dashboard/pages/register'
import { AboutUs, HomePage, ContactUs } from 'modules/homeoage/pages'
import { ProductDetailPage } from 'modules/product/pages'
import { Route, Routes } from 'react-router-dom'

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path={'/'} element={<LoginPage />} />
      <Route path={'/register'} element={<RegisterPage />} />
      <Route path={'/recovery-password'} element={<RecoveryPassword />} />
      <Route path={'/new-password'} element={<NewPassword />} />
      <Route path={'/homepage'} element={<HomePage />} />
      <Route path={'/about-us'} element={<AboutUs />} />
      <Route path={'/contact-us'} element={<ContactUs />} />
      <Route path={'/product-detail/:id'} element={<ProductDetailPage />} />
      <Route path={'/dashboard/users'} element={<DashboardPage />} />
      <Route path={'/dashboard/users/register'} element={<RegisterUsers />} />
      <Route path={'/dashboard/categories'} element={<CategoryManagement />} />
      <Route path={'*'} element={<LoginPage />} />
    </Routes>
  )
}
