import React, { useState } from "react"
let Func=()=>{
    let [set,hooks]=useState({
        product:"car",
        price:60000,
        img:"https://icdn-9.motor1.com/images/mgl/62Owk/s3/road-rover-velar-concept.jpg",
        qunty:1
    })
    let increment=()=>{
        hooks({...set,qunty:set.qunty+1})
    }
    let decrement=()=>{
        hooks({...set,qunty:set.qunty-1})
    }
    return<div className="container mt-5">
    <div className="row">
        <div className="col-mt-8">
            <table className="table table-hover">
                <thead className="bg-success">
                     <th>Product</th>
                     <th>cost</th>
                     <th>img</th>
                     <th>quntity</th>
                     <th>total</th>
                </thead>
                <tbody>
                    <tr>
                         <td>{set.product}</td>
                         <td>{set.price}</td>
                         <td><img src={set.product} height="150px"/></td>
                         <td><button on onClick={increment}>+</button>{set.qunty}<button onClick={decrement}>-</button></td>
                         <td>{set.price*set.qunty}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
}
export default Func
    