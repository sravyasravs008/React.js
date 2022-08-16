import React from "react";
import CompB from "./CompB"
class Add extends React.Component{
    tree="neem"
    use="medicinal use"
    age=50
    render(){
        return<div>
        <CompB tree={this.tree} use={this.use}/>
        </div>
    }
}
export default Add