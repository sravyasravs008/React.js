import React from "react";
class Event extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Amount:60000
        }
    }
    Amountone=(credit)=>{
        this.setState({
            Amount:credit
        })
    }
    render(){
        return<div>
        <h2 className="text-pink">Amount={this.state.Amount}</h2>
        <button onClick={this.Amountone.bind(this,2000000)}>a</button>
        <button onClick={this.Amountone.bind(this,"hello")}>b</button>
        <button onClick={this.Amountone.bind(this,"hii")}>c</button>
        <button onClick={this.Amountone.bind(this,"good mornig")}>c</button>
        <button onClick={this.Amountone.bind(this,400000)}>n</button>
        </div>
    }
}
export default Event