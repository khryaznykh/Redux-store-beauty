import Filtered from "./Filtered"

const  AllCategories = () => {
    const categories = ["Face", "Hair", "Body", "Aroma", "Beauty", "All"]
    return (
        <div className="categories-container">
                {categories.map ((category)=> {
                    return(
                        <div key={category}>
                            <Filtered category = {category}/>
                        </div>
                )})}
            </div>
    )
}
export default AllCategories;