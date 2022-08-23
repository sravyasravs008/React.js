import {Link} from "react-router-dom"
function App(){
    return<nav className="navbar navbar-dark bg-transparent navbar-expand-lg">
    <Link to="./home" className="navbar-barnd">Rounting</Link>
    <div className="ml-auto">
    <ul className="navbar-nav">
    <li className="nav-item"><Link to="./home" className="nav-link">About</Link></li>
    <li className="nav-item"><Link to="./contact" className="nav-link">Contact</Link></li>
    <li className="nav-item"><Link to="./service" className="nav-link">Service</Link></li>
    </ul>
    </div>
    </nav>
}
export default App