import { useDispatch } from "react-redux";
import { updateItemsInCart } from "../redux/CartSlice";


const CartUpdate = ({itemInCart, amount}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=> {dispatch(updateItemsInCart({itemInCart, amount}))}}  >Update Cart</button>
        </div>
    )
}
export default CartUpdate;