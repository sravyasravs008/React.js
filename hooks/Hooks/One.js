import React ,{useState} from "react"
let Func=()=>{
    let message="hello"
    let [variable,sethooks]=useState("bye")
    let handler=()=>{
        sethooks("have a nice day")
    }

    return<div>
    <h3>message={ variable}</h3>
    <button onClick={handler}>button</button>
    <button onClick={()=>{sethooks("u r welcome")}}>good</button>
    
    </div>
}
export default Func