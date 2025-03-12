import React, { useEffect, useState } from 'react'

function Task03B() {
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []); 

    return (
        <div className='p-4'>
            <h4>Task 2: (Display a Counter that Increases Automatically Every Second)</h4>
            <h5 className='bg-body-secondary d-inline-block p-2 rounded-3'>Counter : {count}</h5>
        </div>
    )
}
export default Task03B