import { useState, useRef } from "react";

function StopWatch(){
    const [isCounting, setIsCounting] = useState(false);
    const [count, setCount] = useState(0);
    const countref = useRef(null);

    function startCount(){
        setIsCounting(true);
        const timer= setInterval(()=>{
            setCount(prevCount=> prevCount+1);
            console.log('Count updated');
        }, 100);

        countref.current = timer;
    }
     
    function stopCount(){
        setIsCounting(false);
        clearInterval(countref.current);
        countref.current=null;
    }

    function resetCount(){
        clearInterval(countref.current);
        setCount(0);
        setIsCounting(false);
    }

    return(
        <>
        <div>
<h3>{count}</h3>
<button onClick={startCount} disabled={isCounting}>Start</button>
<button onClick={stopCount} disabled={!isCounting} >Stop</button>
<button onClick={resetCount} >Reset</button>
        </div>
        </>
    )
}

export default StopWatch;