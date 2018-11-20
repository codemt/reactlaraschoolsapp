import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
        
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand"  to="/" activeClassName="active">Schools of Mumbai</NavLink>
                { /*<a className="navbar-brand" href="/">Schools of Mumbai</a> */ }
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <NavLink className="nav-link"  to="/central" activeClassName="active">Central</NavLink>
                   { /*  <a className="nav-link" href="/central">Central <span className="sr-only">(current)</span></a> */ }
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link"  to="/harbor" activeClassName="active">Harbor</NavLink>
                    { /* <a className="nav-link" href="/harbor">Harbor</a> */ }
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link"  to="/western" activeClassName="active">Western</NavLink>
                   { /* <a className="nav-link" href="#">Western</a> */ }
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link"  to="/thane" activeClassName="active">Thane</NavLink>
                  { /* <a className="nav-link" href="#">Thane</a> */ }
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav> 
        
       
    )
  }
}
export default NavBar;