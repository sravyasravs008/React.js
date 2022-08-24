import axios from "axios";
import React from "react";
class Add extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:[]
        }
    }
    getdetails=()=>{
        axios.get("https://api.instantwebtools.net/v1/airlines")
        .then((response)=>{this.setState({user:response.data})})
        .catch(()=>{})
    }
    render(){
        return<div>
        <pre>{JSON.stringify(this.state.user)}</pre>
        <button onClick={this.getdetails}>details</button>
        </div>
    }
}
export default Add