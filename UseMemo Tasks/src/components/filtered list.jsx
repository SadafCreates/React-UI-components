import { products } from "../data/products";
import { useState } from "react";

function FileteredList(){
    const [category, setCategory] = useState("all");
    const [searchItem, setSearchItem] = useState("");

function SearchHandler(e){
    setSearchItem(e.target.value);
}

function categoryHandler(e){
        setCategory(e.target.value);
}

let FilteredList= products.filter((product)=>{
    const searchMatch= product.name.toLowerCase().includes(searchItem.toLowerCase())  
    const categoryMatch = category === 'All' || product.category===category
return searchMatch && categoryMatch;
});
    return(
        <>
<h3>Products List</h3>

<input type=" text" placeholder="Search item.." value={searchItem} onChange={SearchHandler}/>

<select name="category"  onChange={categoryHandler} value={category}>
    <option value="All">All</option>
    <option value="Skin Care">Skin Care</option>
    <option value="Mugs">Mugs</option>
</select>
        <ul>
            {FilteredList.map((product) => ( 
                <li key={product.id}>{product.name} - rs {product.price}</li>
            ))}
            </ul>
            </>
    )
}

export default FileteredList;