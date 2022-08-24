import React,{useState} from "react";
let Func=()=>{
    let [set,hooks]=useState("names")
    let [incre,decre]=useState(1)
    let handler=()=>{
        hooks("rahul")
    }
    let handler2=()=>{
        hooks("rosey")
    }
    let handler3=()=>{
        hooks("soniya")
    }
         return<div>
         <h1>names={set}</h1>
         <button onClick={handler}>A</button>
         <button onClick={handler2}>B</button>
         <button onClick={handler3}>C</button>
         <h3>qunty={incre}</h3>
         <button onClick={()=>{decre(incre-1)}}>-</button>
         <button onClick={()=>{decre(incre+1)}}>+</button>
    </div>
}
export default Func