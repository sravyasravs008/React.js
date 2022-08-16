import App4 from "./App4"
let Fun =(props)=>{
    let id=303
    let name="priyanka"
    let sal=70000
    return<div>
    <h3>{JSON.stringify(props)}</h3>
    <App4 id={id} name={name} sal={sal}/>
    </div>
}
export default Fun