import { useState } from 'react';
import './counter.css';
import Button from './Button';

 function Counter(){
const [count , setCount] = useState(0);

const [isOn , setIsOn] = useState(false);

let hasCount = count > 0; 
let decrementDisabled = !hasCount;

function incrementHandler(){
    setCount(count + 1);
};

function decrementHandler(){
    setCount(count-1);
};

function resetHandler(){
    setCount(0);
};

function toggleHandler(){
    setIsOn(!isOn);
}


return(
    <>
    <div className={`content ${isOn ? 'light': 'dark'}`}>
    <h1>Counter App</h1>
    <h2>{count}</h2>
    <div className="buttons">
    <Button label ='Increment' onClick={incrementHandler} isOn={isOn} />
    <Button label = 'decrement' onClick={decrementHandler} disabled={decrementDisabled} isOn={isOn} />
    <Button label = "Reset" onClick= {resetHandler} disabled={!hasCount} isOn={isOn} />
    <Button onClick={toggleHandler} label={isOn? 'Light Mode' : 'Dark Mode'} isOn={isOn} />
    </div>
    </div>
    </>
)
}

export default Counter;