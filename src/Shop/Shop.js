import { Link, useNavigate } from "react-router-dom";
import shopData from "../data/shop-data";
import ShopItem from "./ShopItem";
import CartShort from "../Cart/CartShort";
import AllCategories from "../Filter/AllCategories";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../redux/ShopSlice";

const Shop = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    const navigate = useNavigate();
    return( 
        <div>
            
                <div class="shutter door1"></div>
                <div class="shutter door2"></div>
                <div class="shutter door3"></div>
                <div class="shutter door4"></div>
                <div class="shutter door5"></div>
                <div class="shutter door6"></div>
                <div class="shutter door7"></div>
                <div class="shutter door8"></div>       
                <div className="opacity-delay">   
                <div className="shop-top">
                    <div>
                        <button className="button button-black" onClick={()=> navigate(-1)} >Go Back</button>
                    </div>
                    <div className="shop-cart">
                        <Link to="/Cart" className="link">
                            <img src="https://img.icons8.com/?size=100&id=lweWyGBSK7KO&format=png&color=000000" width={70} alt="cart"/>
                        </Link>
                        <CartShort />
                    </div>
                </div>

                <AllCategories/>
            
            <div  className="shop-positioning"> 
                {shopData
                    .filter(shopItem => {
                    if (selectedCategory === 'All') return true;
                    return selectedCategory.toLowerCase() === shopItem.category;
                    })
                    .map ((shopItem) => 
                        <div key={shopItem.id}>
                            <ShopItem shopItem = {shopItem}/>
                        </div>)}
            </div>
        
            </div>
        </div>
    )
}
export default Shop;