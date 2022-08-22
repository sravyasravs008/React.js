import React from "react"
import Employe from "./Dta"
class Ext extends React.Component{
    constructor(){
        super()
        this.state={
            employe:Employe
        }
    }
    render(){
        return<div className="container">
        <div className="row">
        <div className="col-md-6">
        <table className="table table-hover">
        <thead className="bg-primary tect-black">
        <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>GRNDER</th>
        </tr>
        </thead>
        <tbody>{
            this.state.employe.map((emp,contact)=>{
                return<tr key={contact}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.gender}</td>
                </tr>
            })
        }
        </tbody>
        </table>
        </div>
        </div>
        </div>
    }
}
    
export default Ext