import React from "react"
class Counter extends React.Component{
    state={
        product:"samsung flip",
        price:85900,
        qunty:1,
        img:"https://rukminim1.flixcart.com/image/416/416/ksnjp8w0/mobile/w/u/8/galaxy-z-flip3-5g-sm-f711bzeeinu-samsung-original-imag662adrayy6cg.jpeg?q=70",
    }
    increment=()=>{
        this.setState({qunty: this.state.qunty+1})
    }
    decrement=()=>{
        this.setState({qunty:this.state.qunty-1})
    }
    render(){
        return<div className="conatiner mt-5">
        <div className="row">
        <div className="col-md-5">
        <table className="table table-hover">
        <thead>
        <th>Product</th>
        <th>Image</th>
        <th>Price</th>
        <th>Quntaty</th>
        <th>Total</th>
        </thead>
        <tbody>
        <tr>
        <td>{this.state.product}</td>
        <td><img src={this.state.img} height="50px"></img></td>
        <td>{this.state.price}</td>
        <td><button onClick={this.increment}>+</button>{this.state.qunty}<button onClick={this.decrement}>-</button></td>
        <td>{this.state.price*this.state.qunty}</td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
    }
}
export default Counter