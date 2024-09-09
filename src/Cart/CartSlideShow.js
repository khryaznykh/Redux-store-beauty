import shopData from "../data/shop-data";

const CartSlideShow = () => {
    
    return (
        <div>
            {shopData.map((item)=>
                <div  className="slide-moving" key={item.id}>
                    <img className="cart-slides" src={`${item.image}.jpg`} width={300} alt='slideshow'/>
                </div>
            )}
            
        </div>
    )
}
export default CartSlideShow;