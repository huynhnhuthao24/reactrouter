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
import Menu from "./Components/Menu";
import  NotFound  from "./Components/NotFound";
function App() {
  return (
    <Router>
        <div className="App">
           <Menu/>
           <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route exact component={NotFound} />
           </Switch>
    </div>
    </Router>
  );
}

export default App;
