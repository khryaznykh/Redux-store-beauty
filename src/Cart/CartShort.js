import { useSelector } from "react-redux";
import { getTotalPrice } from "../redux/CartSlice";

const CartShort = () => {
    const totalPrice = useSelector(getTotalPrice)
    return (
        <div className="cart-short">
            <p> <b>CART TOTAL:</b> $ {totalPrice.toFixed(2)}</p>
        </div>
    )
}
export default CartShort;