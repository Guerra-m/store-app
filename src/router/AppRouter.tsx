import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeStorePage } from '../modules/home/pages/HomeStorePage'
import { StoreLayout } from '../shared/layouts/StoreLayout'
import { CategoriesPage } from '../modules/categories/pages/CategoriesPage'
import { CartPage } from '../modules/cart/pages/CartPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<StoreLayout />}>
          <Route path="/" element={<HomeStorePage />} />
        </Route>
        <Route element={<StoreLayout />}>
          <Route path="/categorias" element={<CategoriesPage/>} />
        </Route>
        <Route element={<StoreLayout />}>
          <Route path="/carrito" element={<CartPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}