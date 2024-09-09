import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../redux/CartSlice";


const CartItem = ({ itemInCart }) => {
    console.log(itemInCart)
    const dispatch = useDispatch();
    return (
        <table >
            <tr className="cart-item">
                <td>
                    <img src = {`${itemInCart.image}.jpg`} width={200} alt="item" />
                </td>
                <td className="cart-left">
                        <p className="cart-left-name">{itemInCart.name }</p>
                        <p>{itemInCart.amount}</p>
                        <p>$ {itemInCart.totalPrice.toFixed(2)}</p>
                </td>
                <td>
                    <button className="button-in-cart" onClick={()=> dispatch (deleteItemFromCart({cartItemId: itemInCart.id}))}>Delete</button>
                </td>
            </tr>
        </table>
    )
}
export default CartItem;