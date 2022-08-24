import React ,{useState}from 'react'

function Three() {
    let [use,state]=useState(6)
  return (
    <div>
    <h3>message={use}</h3>
    <button onClick={()=>{state(use -1)}}>-</button>
    <button onClick={()=>{state(use +1)}}>+</button>
    </div>
  )
}

export default Three