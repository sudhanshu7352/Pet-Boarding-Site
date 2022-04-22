import React, { useState } from 'react'

const Test = () => {
    const [toggle,setToggle] =useState(false)
  return (
    <div>
        <button onClick={()=>setToggle(!toggle) }>Toggle</button>

        {toggle ? <h3>login success</h3>: <h3>Logout</h3>}
    </div>
  )
}

export default Test