import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom"; 

const menus = [
  {
      name: 'Home',
      to:'/',
      exact: true
  },
  {
    name: 'About',
    to:'/about',
    exact: true
  },
  {
    name: 'Contact',
    to:'/contact',
    exact: true
  },
]

const MenuLink = ({label, to, activeClassName} ) =>{
  return(
    <Route path={to} exact={activeClassName} children={({match}) =>{
        var active = match ? 'active' : '';
        return(
          <li className={active}>
              <Link to={to} className='nav-link'>
                  {label}
              </Link>
          </li>
        )
    }} />
  )
}
class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {this.showMenu(menus)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  showMenu = (menus) =>{
    var result = null;
    if(menus.length > 0){
       result = menus.map((menu,index) =>{
         console.log(menu.name);
         return(
           <MenuLink key={index} to={menu.to} label={menu.name} activeClassName={menu.exact}/>
         )
       })
    }
    return result;
  }
}

export default Menu;
