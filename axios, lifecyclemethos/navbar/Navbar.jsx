import {Link} from "react-router-dom"
let Add=()=>{
    return<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="./home" className="navbar-brand">Axios</Link>
        <div className="ml-auto">
           <ul className="navbar-nav">
                 <li className="nav-item"><Link to="./home" className="nav-link">Home</Link></li>
                 <li className="nav-item"><Link to="./service" className="nav-link">Service</Link></li>
                 <li className="nav-item"><Link to="./contact" className="nav-link">Contact</Link></li>
                 <li className="nav-item"><Link to="./user" className="nav-link">User</Link></li>
                 <li className="nav-item"><Link to="./user1" className="nav-link">User1</Link></li>
            </ul>
         </div>
    </nav>
}
export default Add