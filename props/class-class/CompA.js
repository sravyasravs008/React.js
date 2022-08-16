import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{
    product="samsung"
    model="flip"
    price="90000"
    render(){
        return<div>
        <h1>component A</h1>
        <CompB product={this.product} model={this.model}/>
        </div>
    }
}
export default CompA