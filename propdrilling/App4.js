import React from "react";
class App extends React.Component{
    render(){
        return<div>
        <h4>name={JSON.stringify(this.props)}</h4>
        </div>
    }
}
export default App