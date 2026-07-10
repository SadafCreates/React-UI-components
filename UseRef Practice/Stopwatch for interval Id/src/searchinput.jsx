import { useRef, useEffect } from "react";

function SearchInput(){

const inputRef = useRef(null);

useEffect(()=>{
    inputRef.current.focus();
},[])

return(
    <input type="text " placeholder="Load to focus the input" ref={inputRef} />
)

}

export default SearchInput;
