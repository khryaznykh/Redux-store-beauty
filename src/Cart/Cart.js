import { useSelector } from "react-redux";
import { getCartItems } from "../redux/CartSlice";
import CartItem from "./CartItem";
import CartShort from "./CartShort";
import { useNavigate } from "react-router";
import CartSlideShow from "./CartSlideShow";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const navigate = useNavigate();
    console.log(cartItems)
    return (
        <div >
            <div className="cart-top">
                <CartShort/>
                <button className="button button-black" onClick={()=> navigate(-1)} >Go Back</button>
            </div>
            <div className="cart-position-slide">
                <div>
                {cartItems.map (itemInCart =>
                    <div key={itemInCart.id}> 
                        <CartItem itemInCart = { itemInCart }/>
                    </div>)}
                </div>
                <CartSlideShow/>
            </div>
        </div>
    )
}
export default Cart;