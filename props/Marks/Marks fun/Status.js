let Add=(hello)=>{
    return<div> 
    <h3>{JSON.stringify(hello)}</h3>
    <div className="col-md-6">
        <div className="row">
            <div className="card">
                <div className="card-header">
                    <h4>{hello.Name}</h4>
                </div>
                        <div className="card-body">
                            <ul className="list-group">
                              <li className="list-group-item">Name={hello.Name}</li>
                              <li className="list-group-item">Marks={hello.marks}</li>
                              <li className="list-group-item">Subject={hello.subject[3]}</li>
                              <li className="list-group-item">Status={hello.status}</li>
                            </ul>
                        </div>
            </div>
        </div>
    </div>
    </div>
}
export default Add