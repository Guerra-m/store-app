import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeStorePage } from '../modules/home/pages/HomeStorePage'
import { StoreLayout } from '../shared/layouts/StoreLayout'
import { CategoriesPage } from '../modules/categories/pages/CategoriesPage'
import { CartPage } from '../modules/cart/pages/CartPage'
import { OrdersPage } from '../modules/orders/pages/OrdersPage'
import { ProfilePage } from '../modules/profile/pages/profilePage'
import { CategoriesProductsPage } from '../modules/categories/pages/CategoriesProductsPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<StoreLayout />}>
          <Route path="/" element={<HomeStorePage />} />
        </Route>
        <Route element={<StoreLayout />}>
          <Route path="/categorias" element={<CategoriesPage />} />
        </Route>
        <Route element={<StoreLayout />}>
          <Route path="/categorias/:id" element={<CategoriesProductsPage />} />
        </Route>
        <Route element={<StoreLayout />}>
          <Route path="/carrito" element={<CartPage />} />
        </Route>

        <Route element={<StoreLayout />}>
          <Route path="/pedidos" element={<OrdersPage />} />
        </Route>
        <Route element={<StoreLayout />}>
          <Route path="/pedidos" element={<OrdersPage />} />
        </Route>
        <Route element={<StoreLayout />}>
          <Route path="/perfil" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}