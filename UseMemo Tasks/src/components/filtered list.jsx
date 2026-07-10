import { products } from "../data/products";
import { useState } from "react";

function FileteredList(){
    const [category, setCategory] = useState("all");
    const [searchItem, setSearchItem] = useState("");

function handleProductsResult(e){
    setSearchItem(e.target.value);
    setCategory(e.target.value);
}
let FileteredList= products.filter((product)=>(
  product.name.toLowerCase().includes(searchItem.toLowerCase())  
))

    return(
        <>
<h3>Products List</h3>

<input type=" text" placeholder="Search item.." value={searchItem} onChange={handleProductsResult}/>

        <ul>
            {FileteredList.map((product) => ( 
                <li key={product.id}>{product.name} - rs {product.price}</li>
            ))}
            </ul>
            </>
    )
}

export default FileteredList;