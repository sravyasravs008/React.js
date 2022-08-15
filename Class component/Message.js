import React from "react";
class Message extends React.Component{
    product="samsung"
    model="flip"
    price=60000
    render(){
        return<div>
        <h2>product={this.product}</h2>
        <h2>Model={this.model}</h2>
        <h2>Price={this.price}</h2>
        </div>
    }
}
export default Message