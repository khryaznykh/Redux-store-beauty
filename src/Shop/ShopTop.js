import { Link, useNavigate } from "react-router-dom";
import CartShort from "../Cart/CartShort";

const ShopTop = () => {
    const navigate = useNavigate();
    return (
        <div className="shop-top">
            <div className="shop-top-left">
                <div>
                    <p className="shop-logo">Cosmetiques de Luxe</p>
                </div>
                <div className="shop-cart">
                    <Link to="/Cart" className="link">
                        <img src="https://img.icons8.com/?size=100&id=lweWyGBSK7KO&format=png&color=000000" width={50} alt="cart"/>
                    </Link>
                    <CartShort />
                </div>
            </div>
            <div className="button-shop">
                <button className="button button-black" onClick={()=> navigate(-1)} >Go Back</button>
            </div>
        </div>
    )
}
export default ShopTop;