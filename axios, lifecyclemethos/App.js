import Navbar from "./navbar/Navbar"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./componenets/Home"
import Contact from "./componenets/Contact"
import Service from "./componenets/service"
import User from "./User/User"
import User1 from "./User/User1"
let App =()=>{
  return<div>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/user" element={<User/>}></Route>
          <Route path="/user1" element={<User1/>}></Route>
        </Routes>
    </Router>
  </div>
}
export default App