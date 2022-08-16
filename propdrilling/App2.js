import React from "react"
import App3 from "./App3"
class Sub extends React.Component{
    id=202
    name="soniya"
    sal=40000
    render(){
        return<div>
        <h2>name={JSON.stringify(this.props.id)}</h2>

        <App3 name={this.name} id={this.id} salary={this.sal}/>
        </div>
    }
}
export default Sub