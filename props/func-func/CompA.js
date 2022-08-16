import CompB from "./CompB"

let CompA=()=>{
    let mesg="hello gud morning"
    let color="orange"
    let sal=45000
    return <div>
    <h1>componentA</h1>
    <CompB message={mesg} colour={color} salary={sal}/>
    </div>
}
export default CompA