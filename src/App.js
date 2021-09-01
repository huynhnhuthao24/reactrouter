import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
function App() {
  return (
    <Router>
        <div className="App">
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <div className="container-fluid">
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                       aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                               <NavLink activeClassName="active" exact to="/" className="nav-link ">Home</NavLink>
                           </li>
                           <li className="nav-item">
                                <NavLink activeClassName="active" to="/About" className="nav-link">About</NavLink>
                           </li>
                           <li className="nav-item">
                                <NavLink activeClassName="active" to="/Contact" className="nav-link">Contact</NavLink>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
           <Route exact path="/" component={Home} />
           <Route path="/About" component={About} />
           <Route path="/Contact" component={Contact} />
    </div>
    </Router>
  );
}

export default App;
