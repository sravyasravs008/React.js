import Navbar from "./navbar/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Service from "./Components/Service"
import Contact from "./Components/Contact"
let App =()=>{
  return<div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/conatct" element={<Contact/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
       </Routes>
     </Router>
  </div>
  
}
export default App