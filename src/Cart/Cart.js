import { useSelector } from "react-redux";
import { getCartItems } from "../redux/CartSlice";
import CartItem from "./CartItem";
import CartSlideShow from "./CartSlideShow";
import ShopTop from "../Shop/ShopTop";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    return (
        <div >
            <ShopTop/>
            <div className="cart-position-slide">
                <div className="cart-main">
                {cartItems.map (itemInCart =>
                    <div key={itemInCart.id}> 
                        <CartItem itemInCart = { itemInCart } />
                    </div>)}
                    <button className="button button-black">CHECK OUT</button>
                </div>
                <CartSlideShow/>
            </div>
        </div>
    )
}
export default Cart;