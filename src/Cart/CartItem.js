import { useDispatch } from "react-redux";
import { deleteItemFromCart, updateItemsInCart } from "../redux/CartSlice";
import Quantity from "../Shop/Quantity";
import { useState } from "react";


const CartItem = ({ itemInCart }) => {
    const [amount, setAmount] = useState (itemInCart.amount)
    const dispatch = useDispatch();
    return (
        <div className="cart-item">
            <div className="row">
            <div className="cart-item-el one">
                <img src = {`${itemInCart.image}.jpg`} width={150} alt="item" />
            </div>
            <div className="cart-item-el one">
                <p className="cart-left-name">{itemInCart.name }</p>
            </div>
            </div>
            <div className="col two">
                <div className="cart-item-el">
                    <Quantity amount = {amount} setAmount={setAmount}/>
                    <p className="in-cart">$ {itemInCart.totalPrice.toFixed(2)}</p>
                </div>
                <div className="cart-item-el">
                    <button className="button-in-cart" onClick={()=> {dispatch(updateItemsInCart({itemInCart, amount, idClicked: itemInCart.id}))}}>Update</button>
                    <button className="button-in-cart" onClick={()=> dispatch (deleteItemFromCart({cartItemId: itemInCart.id}))}>Delete</button>
                </div>
            </div>
        </div>
    )
}
export default CartItem;