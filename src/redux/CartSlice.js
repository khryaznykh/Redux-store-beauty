import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemsToCart: (state, action) => {
            const timeId = new Date().getTime();
            // const itemExists = state.cartItems.find((item) => item.id === action.payload.id)
            // if (!itemExists) return 
            //     {state.cartItems[itemExists].reduce((totalForItem, itemExists)=> {
            //         return itemExists.amount + totalForItem
            //     }, 0)}
                
            
            state.cartItems.push ({
                id: timeId,
                itemID: action.payload.shopItem.id,
                name: action.payload.shopItem.name,
                image: action.payload.shopItem.image,
                amount: action.payload.amount,
                totalPrice: action.payload.shopItem.price * action.payload.amount
            })
        },

    
        deleteItemFromCart:(state, action) => {
            state.cartItems = state.cartItems.filter (
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        },
},
})

// Action creators are generated for each case reducer function

export const getTotalAmount = state => {
    return state.cart.cartItems.reduce((totalAmount,cartItems)=> {
        return cartItems.amount + totalAmount
    }, 0)
}
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems)=> {
        return cartItems.totalPrice + total
    }, 0)
  }

export const getCartItems = state => state.cart.cartItems;
export const { addItemsToCart, deleteItemFromCart } = cartSlice.actions;

export default cartSlice.reducer