import { useState } from "react";
import Quantity from "./Quantity";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../redux/CartSlice";

const ShopItem = ({ shopItem }) => {
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch()
    return (
       
        <div className='shop-item' key={shopItem.id}>
            <img src={`${shopItem.image}.jpg`} alt="shop product" width={250}/>
            <p className="shop-item-item price">$ {shopItem.price}</p>
            <p className="shop-item-item name">{shopItem.name}</p>
            <Quantity amount = {amount} setAmount = {setAmount}/>
            <button className="shop-item-item button-add-to-cart" onClick={()=> {dispatch(addItemsToCart({shopItem, amount}))}}>ADD</button>
        </div>
    )
}
export default ShopItem;