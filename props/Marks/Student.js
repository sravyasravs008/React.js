import React from "react";
import Marks1 from "./Marks1"
class Hello extends React.Component{
    name="rosey"
    marks=50
    subject="science"
    performance={
        status:"pass",
        grade:"above average",
        subjects:["mat","sci","soc","eng"]
    }
    render(){
        return<div>
        <h1>Record</h1>
        <Marks1 Name={this.name} Marks={this.marks} Subject={this.subject} perf={this.performance}/>
        </div>
    }
}
export default Hello