import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemsToCart: (state, action) => {
            const timeId = new Date().getTime();
            const itemExists = state.cartItems.find((item) => item.itemID === action.payload.shopItem.id);
            
            if (itemExists) {
                itemExists.amount += action.payload.amount;
                itemExists.totalPrice += action.payload.shopItem.price * action.payload.amount;
            }
            
            else {
                state.cartItems.push ({
                id: timeId,
                itemID: action.payload.shopItem.id,
                name: action.payload.shopItem.name,
                image: action.payload.shopItem.image,
                amount: action.payload.amount,
                price: action.payload.shopItem.price,
                totalPrice: action.payload.shopItem.price * action.payload.amount
            })
        }
        },

        updateItemsInCart: (state, action) => {
            const itemToUpdate = state.cartItems.find((item) => item.itemID === action.payload.itemInCart.itemID);
                        
            if (itemToUpdate) {
                itemToUpdate.amount = action.payload.amount;
                itemToUpdate.totalPrice = itemToUpdate.price * action.payload.amount;
            }
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
export const { addItemsToCart, deleteItemFromCart, updateItemsInCart } = cartSlice.actions;

export default cartSlice.reducer