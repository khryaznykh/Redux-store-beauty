import { Link } from "react-router-dom";

function Home() {
    const textCarousel = ["Boost your beauty and youth with our products", "Only natural ingredients", "All products are certified and trusted by millions of our customers", "Bla bla"]
    return (    
        <div className="untitled">
            <div className="untitled__slides">
                {textCarousel.map ((text)=> {
                return(
                    <div className="untitled__slide">
                        <div className="untitled__slideBg"></div>
                        <div className="untitled__slideContent">
                            <span>Cosmetiques de Luxe</span> 
                            <p>{text}</p>
                            <Link to="/Shop">    <button className='button button-white'> SHOP NOW </button></Link>
                        </div>
                    </div>)
                })}
                <div className="untitled__shutters"></div>
            </div>
        </div>
    ) 
}
export default Home;