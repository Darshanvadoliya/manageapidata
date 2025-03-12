import React, { useState } from 'react'
import ModeChild from './ModeChild'

function Light_Dark_Theme() {
    const [ mode, setMode ] = useState('white')
  return (
    <div className='p-4'>
         <h4>Task 6: (Light/Dark Theme Toggle with useState and State Lifting)</h4>

       <ModeChild mode={mode} setMode={setMode}/>
    </div>  
  )
}

export default Light_Dark_Theme