import React from "react";
class Sub extends React.Component{
    render(){
        return<div>
           <h2>hello react</h2>
           <h4>{this.props.product}</h4>
           <h4>{JSON.stringify(this.props)}</h4>
        </div>
    }
}
export default Sub