import React from "react";
class Add extends React.Component{
    render(){
        return<div className="row">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <h4>Name={this.props.Name}</h4>   
                </div>
                    <div className="card-body">
                            <ul className="list-group">
                             <li className="list-group-item">subject={this.props.Subject}</li>
                             <li className="list-group-item">marks={this.props.Marks}</li>
                             <li className="list-group-item">status={this.props.perf.status}</li>
                             <li className="list-group-item">course={this.props.pref.subjects[4]}</li>
                            </ul>
                    </div>
            </div>
        </div>
     </div>
    }

}
export default Add