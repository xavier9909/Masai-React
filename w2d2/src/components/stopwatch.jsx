import React, { useState } from 'react'

export const Stopwatch = () => {
    const [timer, settimer] = useState(0)
    const [timerid, settimerid] = useState(null)
    const start = () => { 
        if(!timerid){ let id  = setInterval(() => {
            settimer((e)=>e+1)
        },1000);
        settimerid(id)}
      
    
    }
    const reset = () => { 
        clearInterval(timerid)
        settimer(0)
        settimerid(null)
    }
    const pause = () => {   clearInterval(timerid)}
    return (
        <div> <h2>stopwatch : {timer}</h2>
            <div></div>
            <button onClick={start}>start</button> <button onClick={reset}>reset</button> <button onClick={pause}>pause</button>

        </div>


    )
}
