import React from 'react'

function Child2({count, setCount}) {
  return (
    <div>
        <button onClick={()=> setCount(count + 1)}>increment</button>
        <button onClick={()=> count > 0 ? setCount(count - 1) : ""} className='ms-3'>decrement</button>
    </div>
  )
}

export default Child2