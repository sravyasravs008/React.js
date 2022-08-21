import React from "react"
class Counter extends React.Component{
    state={
        product:"samsung flip",
        price:85900,
        qunty:1,
        img:"https://rukminim1.flixcart.com/image/416/416/ksnjp8w0/mobile/w/u/8/galaxy-z-flip3-5g-sm-f711bzeeinu-samsung-original-imag662adrayy6cg.jpeg?q=70",

        product1:"iphone",
        price1:100000,
        qunty1:1,
        img1:"https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901532-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjYyOTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDZlL2hmZC85NDA3NzMyMTU0Mzk4LmpwZ3wzOGJmYzNiNWE0NGZhNWRiYzFmMTk3ZDk5ZWJkMTk5NGUzN2IwNmY0ODA4NGU0MzJjNDY5M2QxYzU1MzY0YmZk"
    }
    increment=()=>{
        this.setState({qunty: this.state.qunty+1})
    }
    decrement=()=>{
        this.setState({qunty:this.state.qunty-1})
    }
    increment1=()=>{
        this.setState({qunty1: this.state.qunty1+1})
    }
    decrement1=()=>{
        this.setState({qunty1:this.state.qunty1-1})
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
        <tr>
        <td>{this.state.product1}</td>
        <td><img src={this.state.img1} height="50px"></img></td>
        <td>{this.state.price1}</td>
        <td><button onClick={this.increment1}>+</button>{this.state.qunty1}<button onClick={this.decrement1}>-</button></td>
        <td>{this.state.price1*this.state.qunty1}</td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
    }
}
export default Counter