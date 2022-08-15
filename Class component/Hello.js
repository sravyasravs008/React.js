import React from "react";
import Message from "./Message";
class Hello extends React.Component{
    render(){
        return <div>
        <h1>Hello world </h1>
        <hr></hr>
        <Message/><hr></hr><Message/>
        </div>
    }
}
export default Hello