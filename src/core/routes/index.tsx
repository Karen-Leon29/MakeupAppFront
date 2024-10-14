import { RegisterPage, LoginPage, RecoveryPassword, NewPassword } from 'modules/auth/pages'
import { DashboardPage } from 'modules/dashboard/pages'
import { CategoryManagement } from 'modules/dashboard/pages/categories'
import { ProductsManagement } from 'modules/dashboard/pages/products'
import { RegisterUsers } from 'modules/dashboard/pages/register'
import { RegisterProducts } from 'modules/dashboard/pages/registerProducts'
import { AboutUs, HomePage, ContactUs } from 'modules/homeoage/pages'
import { ShoppingCarComponent } from 'modules/product/components/shoppingCar'
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
      <Route path={'/dashboard/products'} element={<ProductsManagement />} />
      <Route path={'/dashboard/products/register'} element={<RegisterProducts />} />
      <Route path={'/dashboard/products/edit/:id'} element={<RegisterProducts />} />
      <Route path={'/shopping-car'} element={<ShoppingCarComponent />} />
      <Route path={'*'} element={<LoginPage />} />
    </Routes>
  )
}
