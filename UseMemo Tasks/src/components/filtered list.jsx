import { products } from "../data/products";

function FileteredList(){
    // const [category, setCategory] = useState("all");
    // const [searchItem, setSearchItem] = useState("");

    return(
        <>
<h3>Products List</h3>

        <ul>
            {products.map((product) => ( 
                <li key={product.id}>{product.name} - rs {product.price}</li>
            ))}
            </ul>
            </>
    )
}

export default FileteredList;