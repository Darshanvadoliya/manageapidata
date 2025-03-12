import React from 'react'

function ModeChild2({mode, setMode}) {
  return (
    <div>
        <button className='' onClick={()=> setMode(mode==="white" ? "black" : "white")}>{mode==="black" ? "white Mode": "Dark Mode"}</button>
    </div>
  )
}

export default ModeChild2