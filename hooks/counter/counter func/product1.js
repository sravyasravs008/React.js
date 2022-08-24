import React, {useState} from "react";
let Add=()=>{
    let [ set,hooks]=useState({
        product:"Ear pods",
        price:60000,
        img:"https://img.tatacliq.com/images/i6/437Wx649H/MP000000007756832_437Wx649H_202009190947011.jpeg",
        qunty:1
    })
    let increment =()=>{
        hooks({...set,qunty:set.qunty+1})
    }
    let decrement=()=>{
        hooks({...set,qunty:set.qunty-1})
    }
    let [a,b]=useState({
        product1:"power bank",
        price1:60000,
        img1:"https://th.bing.com/th/id/OIP.fbfTk4iDlVqX732kgLIszwHaHa?pid=ImgDet&rs=1",
        quntity:1
    })
    let high =()=>{
        b({...b,quntity:b.quntity+1})
    }
    let low=()=>{
        b({...b,quntity:b.quntity-1})
    }
    let [apple,counter]=useState({
        product2:"neck band",
        price2:8000,
        img2:"https://devicenext.com/wp-content/uploads/2021/01/Ui-Killer-Wireless-Neckband-1-scaled.jpg",
        qunty1:1
    })
    let increment2 =()=>{
        counter({...counter,qunty1:counter.qunty1+1})
    }
    let decrement2=()=>{
        counter({...counter,qunty1:counter.qunty1-1})
    }
    return<div className="container mt-6">
    <div className="row">
        <div className="col-mt-8">
            <table className="table table-hover">
                <thead className="bg-danger">
                    <th>product</th>
                    <th>Price</th>
                    <th>img</th>
                    <th>quntity</th>
                    <th>total</th>
                </thead>
                <tbody>
                    <tr>
                          <td>{set.product}</td>
                          <td>{set.price}</td>
                          <td><img src={set.img} height="200px" alt=""/></td>
                          <td><i className="fa fa-plus-circle" onClick={increment}></i>{set.qunty}<i className="fa fa-minus-circle" onClick={decrement}></i></td>
                          <td>{set.price*set.qunty}</td>
                    </tr>
                    <tr>
                        <td>{a.product1}</td>
                          <td>{a.price1}</td>
                          <td><img src={a.img1} height="200px" alt=""/></td>
                          <td><i className="fa fa-plus-circle" onClick={high}></i>{a.quntity}<i className="fa fa-minus-circle" onClick={low}></i></td>
                          <td>{a.price1*a.quntity}</td>
                    </tr>
                    <tr>
                         <td>{apple.product2}</td>
                          <td>{apple.price2}</td>
                          <td><img src={apple.img2} height="200px" alt=""/></td>
                          <td><i className="fa fa-plus-circle" onClick={increment2}></i>{set.qunty}<i className="fa fa-minus-circle" onClick={decrement2}></i></td>
                          <td>{apple.price2*apple.qunty1}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
}
export default Add