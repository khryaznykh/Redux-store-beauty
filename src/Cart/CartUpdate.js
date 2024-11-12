import { useDispatch } from "react-redux";
import { updateItemsInCart } from "../redux/CartSlice";


const CartUpdate = ({itemInCart, amount}) => {
    const dispatch = useDispatch();
    return (
            <button onClick={()=> {dispatch(updateItemsInCart({itemInCart, amount}))}}  >Update Cart</button>
    )
}
export default CartUpdate;