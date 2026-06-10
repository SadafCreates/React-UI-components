import { useState } from 'react';
import './counter.css';
import Button from './Button';

 function Counter(){
const [count , setCount] = useState(0);
let hasCount = count > 0; 

function incrementHandler(){
    setCount(count + 1);
};

function decrementHandler(){
    setCount(count-1);
};

function resetHandler(){
    setCount(0);
};



return(
    <>
    <div className="content">
    <h1>Counter App</h1>
    <h2>{count}</h2>
    <div className="buttons">
    <Button label ='Increment' onClick={incrementHandler} />
    <Button label = 'decrement' onClick={decrementHandler}/>
    <Button label = "Reset" onClick= {resetHandler} disabled={!hasCount} />
    </div>
    </div>
    </>
)
}

export default Counter;