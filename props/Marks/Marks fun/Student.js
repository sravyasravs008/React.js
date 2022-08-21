import Status from "Status"
let App=()=>{
    let name="rosey"
    let marks = 100
    let subject=["maths","science","social","english"]
    let status="average"
    return<div>
    <h1>Record</h1>
        <Status Name={name} Marks={marks} subject={subject} status={status}/>
    </div>
}
export default Status