import React from 'react'
import ModeChild2 from './ModeChild2'

function ModeChild({mode,setMode}) {
  return (
    <div>
        <div className='p-5 d-inline-block' style={{backgroundColor:mode, border:"1px solid black"}}></div>

        <ModeChild2 mode={mode} setMode={setMode}/>
    </div>
  )
}

export default ModeChild