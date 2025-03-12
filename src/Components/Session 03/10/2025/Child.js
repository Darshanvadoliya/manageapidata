import React from 'react'
import Child2 from './Child2'

function Child({count,setCount}) {
  return (
    <div>
        <h4 className=''>{count}</h4>
        <Child2 count={count} setCount={setCount}/>
    </div>
  )
}

export default Child