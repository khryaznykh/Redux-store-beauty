import shopData from "../data/shop-data";
import ShopItem from "./ShopItem";
import AllCategories from "../Filter/AllCategories";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../redux/ShopSlice";
import ShopTop from "./ShopTop";

const Shop = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
            <div className="shutter door1"></div>
            <div className="shutter door2"></div>
            <div className="shutter door3"></div>
            <div className="shutter door4"></div>
            <div className="shutter door5"></div>
            <div className="shutter door6"></div>
            <div className="shutter door7"></div>
            <div className="shutter door8"></div>
            <div className="opacity-delay">
                <ShopTop/>
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