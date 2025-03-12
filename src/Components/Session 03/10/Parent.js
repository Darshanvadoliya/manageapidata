import React, { use, useState } from 'react'
import Child from './2025/Child'

function Parent() {
    const [ count, setCount ] = useState(0)
  return (
    <div className='p-4'>
         <h4>Task 5: (Counter App with State Lifting)</h4>

        <Child count={count} setCount={setCount}/>
    </div>
  )
}

export default Parent