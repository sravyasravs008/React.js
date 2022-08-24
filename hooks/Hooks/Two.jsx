import React ,{useState} from "react";
let Func=()=>{
    let [variable,sethooks]=useState("hooks")
    return<div>
    <h2>display={variable}</h2>
    <button onClick={sethooks("concept in reactjs")}>onclick</button>
    </div>
}
export default Func