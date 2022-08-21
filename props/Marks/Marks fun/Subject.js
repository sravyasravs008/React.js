import Avg from "./Avg"
let App=()=>{
    let name="rosey"
    let marks = 100
    let subject=["maths","science","social","english"]
    let status="average"
    return<div>
    <h1>Record</h1>
        <Avg Name={name} Marks={marks} subject={subject} status={status}/>
    </div>
}
export default App