import { configureStore } from '@reduxjs/toolkit'
import cart from './CartSlice'
import shop from './ShopSlice'

export const store = configureStore({
  reducer: {
    cart: cart,
    shop: shop
  },
})