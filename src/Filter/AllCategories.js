import Filtered from "./Filtered"

const  AllCategories = () => {
    const categories = ["Face", "Hair", "Body", "Aroma", "Beauty", "All"]
    return (
        <div className="categories-container">
                {categories.map ((category)=> {
                    return(
                            <Filtered key={category} category = {category}/>
                )})}
            </div>
    )
}
export default AllCategories;