import { useSelector } from "react-redux";
import { getTotalAmount, getTotalPrice } from "../redux/CartSlice";

const CartShort = () => {
    const totalAmount = useSelector(getTotalAmount);
    const totalPrice = useSelector(getTotalPrice)
    return (
        <div className="cart-short">
            <p>{totalAmount} items</p>
            <p> <b>CART TOTAL:</b> $ {totalPrice.toFixed(2)}</p>
        </div>
    )
}
export default CartShort;