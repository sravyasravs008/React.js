import React from 'react'
class Amount extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Amount:60000
        }
    }
    AmountOne=()=>{
        this.setState({Amount:10000 })
    }
    AmountTwo=()=>{
        this.setState({Amount:40000})
    }
    AmountThree=()=>{
        this.setState({Amount:700000})
    }
    render(){
        return<div>
        <h3>Amount credited={this.state.Amount}</h3>
            <button onClick={this.AmountOne}>10000</button>
            <button onClick={this.AmountTwo}>4</button>
            <button onClick={this.AmountThree}>10</button>
        </div>
    }
}
export default Amount
    