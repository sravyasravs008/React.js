import React from "react";
class qunt extends React.Component{
    state={
        qunty:1
    }
    incrhandler=()=>{
        this.setState({qunty:this.state.qunty+1})
    }
    dcrhandler=()=>{
        this.setState({qunty:this.state.qunty-1})
    }
    
    render(){
        return<div>
        <h1>sunflower oil</h1>
        <button onClick={this.dcrhandler}>-</button>
        <>&nbsp;&nbsp;</>
        <span>{this.state.qunty}</span>
        <>&nbsp;&nbsp;&nbsp;></>
        <button onClick={this.incrhandler}>+</button>
        </div>
    }
}
export default qunt