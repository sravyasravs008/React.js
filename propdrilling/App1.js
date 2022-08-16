import App2 from "./App2"
let App=()=>{
    let id=101
    let name="rahul"
    let sal=30000
    return<div>
    <h1>APP1</h1>
    <App2 id={id} name={name} sal={sal}/>
    </div>
}
export default App