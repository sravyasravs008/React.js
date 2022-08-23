import Navbar from "./navbar/Navbar"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Components/Home"
import Service from "./Components/Service"
import Contact from "./Components/Contact"
let App =()=>{
  return<div>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/conatct" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
       </Switch>
     </Router>
  </div>
  
}
export default App