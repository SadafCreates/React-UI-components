import { useState,useEffect } from "react";

function FD() {
 const [posts, setPosts] = useState([]);
 const [loading, setLoading] = useState(true);
const [errors , setErrors] = useState(null);

useEffect(()=>{
    async function fetchData(){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosts(data);
        }catch(error){
            setErrors(error.message);
        }finally{
            setLoading(false);
        }   
    }
    if(loading){
    <p>Loading...</p>
}

if(errors){
    <p>Error: {errors}</p>
}

    fetchData();
},[]);


    return(
        <>
        <ul>
            {posts.map(post=>(
                <li key={post.id}>
                   <h3>{post.title}</h3> 
                   <p>{post.body}</p>
                    </li>
                ))}
        </ul>

        </>
    )
}

export default FD;