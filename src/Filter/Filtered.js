import { useDispatch, useSelector } from "react-redux";
import { filterCategories, getSelectedCategory } from "../redux/ShopSlice";

const Filtered = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <button className={`category ${selectedCategory === category ? "selected" : "not-selected"}`} onClick={()=>{dispatch(filterCategories(category))}}>{category}</button>
    )
}
export default Filtered;