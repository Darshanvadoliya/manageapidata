import React, { useState } from 'react'

let a 
function Task03A() {
    const [count, setCount] = useState(0)
    // const [increment, setIncrement ] = useState(0)

    return (
        <div className='px-4'>
            <h4>Tack : 1 (useState Task – Simple Counter with Step Increment)</h4>
            <h4>{count}</h4>
                <div class="dropdown mb-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    choose a step size
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" onClick={(e)=> a = 1}>+1</a></li>
                        <li><a class="dropdown-item" href="#" onClick={(e)=> a = 2}>+2</a></li>
                        <li><a class="dropdown-item" href="#" onClick={(e)=> a = 5}>+5</a></li>
                    </ul>
                </div>
            <button onClick={(e) => a > 0 ? setCount(count + a) : ""}>Count</button>
            <div>............................................................</div>
        </div>
    )
}

export default Task03A