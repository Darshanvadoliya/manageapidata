import React, { useEffect, useState } from 'react'

function CurrentTime() {
    const [ Current, setCurrent ] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        let interval = setInterval(() => {
            setCurrent(new Date().toLocaleTimeString())
        }, 1000);
        return ()=> clearInterval(interval)
    },[])
  return (
    <div className='p-4'>
         <h4>Task 4: (Show Current Time Updating Every Second)</h4>
         <h5>{Current}</h5>
    </div>
  )
}

export default CurrentTime