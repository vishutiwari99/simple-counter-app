import React, { useState } from 'react'
import './Card.css'
const Card = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
     <div className="card">
        <h2> Simple Counter</h2>
        <h1>{counter}</h1>
     <div className='btn-grp'>
       <button onClick={()=>setCounter(counter=>counter-1)}>Decrease</button>
       <button onClick={()=>setCounter(0)}>Reset</button>
       <button onClick={()=>setCounter(counter=>counter+1)}>Increase</button>
     </div>
      </div>
    </div>
  )
}

export default Card