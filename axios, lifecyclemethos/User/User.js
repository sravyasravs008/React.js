import React, { Fragment } from "react";
import Axios from "axios"
class Add extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:[]
        }
    }
    componentDidMount(){
        Axios.get("https://api.instantwebtools.net/v1/airlines")
        .then((hello)=>{ this.setState({user:hello.data})})
        .catch()
    }
    render(){
        return<div className="container mt-5">
        <pre>{JSON.stringify(this.state.user)}</pre>
        <div className="row">
             <div className="col-md-6">
                <table className="table table-hover">
                    <thead className="bg-primary">
                        <td>Id</td>
                        <td>Name</td>
                        <td>Country</td>
                    </thead>
                    <tbody>
                    {
                        this.state.user.length > 0 ? <Fragment>
                        {
                            this.state.user.map((emp)=>{
                                return<tr>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.country}</td>
                                </tr>
                            })
                        }
                        </Fragment> : null
                    }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    }
}
export default Add