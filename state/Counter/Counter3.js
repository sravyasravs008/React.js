import React from "react";
class Counter extends React.Component{
    state={
        product:"oneplus",
        price:70000,
        qunt:1,
        img:"https://th.bing.com/th/id/OIP.OrT8Lh6vu1lS6vles4T-AQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        product1:"iphone",
        price1:100000,
        qunty1:1,
        img1:"https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901532-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjYyOTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDZlL2hmZC85NDA3NzMyMTU0Mzk4LmpwZ3wzOGJmYzNiNWE0NGZhNWRiYzFmMTk3ZDk5ZWJkMTk5NGUzN2IwNmY0ODA4NGU0MzJjNDY5M2QxYzU1MzY0YmZk"
    }
    increment=()=>{
        this.setState({qunt:this.state.qunt+1})
    }
    decrement=()=>{
        this.setState({qunt:this.state.qunt-1})
    }   
    increment1=()=>{
        this.setState({qunty1: this.state.qunty1+1})
    }
    decrement1=()=>{
        this.setState({qunty1:this.state.qunty1-1})
    } 
    render(){
        return<div className="container mt-5">
        <div className="row">
        <div className="col">
        <table className="table table-hover">
        <thead className="bg-success text-white">
        <th>Product</th>
        <th>Price</th>
        <th>img</th>
        <th>Quantity</th>
        <th>total</th>
        </thead>
        <tbody>
        <tr>
        <td>{this.state.product}</td>
        <td>{this.state.price}</td>
        <td><img src={this.state.img} height="100px"></img></td>
        <td><i className="fa fa-minus-circle" onClick={this.decrement}></i><>&nbsp;</>{this.state.qunt}<>&nbsp;</><i onClick={this.increment} className="fa fa-plus-circle"></i></td>
        <td>{this.state.price*this.state.qunt}</td>
        </tr>
        <tr>
        <td>{this.state.product1}</td>
        <td>{this.state.price1}</td>
        <td><img src={this.state.img1} height="100px"></img></td>
        <td><i className="fa fa-caret-square-o-right" onClick={this.increment1}></i><>&nbsp;</>{this.state.qunty1}<>&nbsp;</><i className="fa fa-caret-square-o-left" onClick={this.decrement1} ></i></td>
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