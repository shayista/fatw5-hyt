import React from 'react'
import { Link } from 'react-router'
import { browserHistory } from "react-router";
import Logo from "../assets/images/logo.png";
export class Header extends React.Component {
   onNavigateHome() {
    browserHistory.push("/");
  }
  render(){

   
  return (
   
      <nav className="navbar-container">
        <a onClick={this.onNavigateHome}><img className="logo-image" src={Logo}/></a>
          <ul className="nav-content">
            <Link className="nav-tabs tab-link" to="/myfavorites" >My Favorites</Link>
            <Link className="nav-tabs tab-link" to="/cart" >My Cart</Link>
          
             <Link className="nav-tabs tab-link" to="/faq" >FAQ</Link>
              <Link className="nav-tabs tab-link" to="/customercare" >CustomerCare</Link>
          </ul>
    </nav>


  )
}
}
export default Header;
