import React from "react";
class Mesg extends React.Component{
    constructor(props){
        super(props)
    }
    state={
        message:"hello"
    }
    change=()=>{
        this.setState({message:"welocome to world"})
    }
    render(){
        return<div>
        <h1>state</h1>
        <h3>message={this.state.message}</h3>
        <button onClick={this.change}>onclick</button>
        </div>
    }
}
export default Mesg