import React from "react";
class CompB extends React.Component{
    render(){
        return<div>
        <h1>component b</h1>
        <h4>{(this.props.product)}</h4>
        <h4>{(this.props.model)}</h4>
        </div>
    }
}
export default CompB