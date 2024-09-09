// import { useState, useEffect } from "react";
// import slideShowData from "./data/slideshow-data";

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


// <div className="untitled">
//   <div className="untitled__slides">
//     <div className="untitled__slide">
//       <div className="untitled__slideBg"></div>
//       <div className="untitled__slideContent">
//         <span>Cosmetiques de Luxe</span> 
//         <p>Boost your beauty and youth with our products</p>
//         {/* <nav>
//             <Link className="button" to="/Shop">SHOP NOW</Link>
//         </nav> */}
//       </div>
//     </div>
//     <div className="untitled__slide">
//       <div className="untitled__slideBg"></div>
//       <div className="untitled__slideContent">
//         <span>Cosmetiques de Luxe</span> 
//         <p>Only natural ingredients</p>
//         <a class="button" href="https://unsplash.com/@madbyte" target="/black">SHOP NOW</a>
//       </div>
//     </div>
//     <div className="untitled__slide">
//       <div className="untitled__slideBg"></div>
//       <div className="untitled__slideContent">
//         <span>Cosmetiques de Luxe</span>
//         <p>All products are certified and trusted by millions of our customers</p>
//         <a class="button" href="https://unsplash.com/@maicoamorim" target="/black">Unsplash Profile</a>
//       </div>
//     </div>
//     <div className="untitled__slide">
//       <div className="untitled__slideBg"></div>
//       <div className="untitled__slideContent">
//         <span>Cosmetiques de Luxe</span> 
//         <p></p>
//         <a class="button" href="https://unsplash.com/@mariocalvo" target="/black">Unsplash Profile</a>
//       </div>
//     </div>
//   </div>
//   <div className="untitled__shutters"></div>
// </div>
// </div>

    )


    // const [index, setIndex] = useState(0);
    // const delay = 5000;
    // useEffect(() => {
    //     setTimeout(
    //       () =>
    //         setIndex((prevIndex) =>
    //           prevIndex === slideShowData.length - 1 ? 0 : prevIndex + 1
    //         ),
    //       delay
    //     );
    
    //     return () => {};
    //   }, [index]);
    // return (
    //     <div className="slideshow">
    //     <div className="slideshowSlider"
    //     style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
    //     {slideShowData.map((slide) => (
    //         <div className="slide" key={slide.id} >
    //             <img src={`${slide.image}.jpg`} width={650} alt="slide"/>
    //         </div>
    //     ))}
    //     </div>
    // </div>
    // );
}
 
export default Home;