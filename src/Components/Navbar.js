import "./navbar.css" ;
import React from "react";
import {useNavigate} from "react-router";
import { NavLink } from "react-router-dom";
function Navbar()
{
   
   
    return(
        <div  style={{fontSize:"20px",display:"flex"}}>
                
                <NavLink activeClassName="active" exact to={"/"}    className="insidenav">HOME</NavLink>
                <NavLink activeClassName="active"  to={"/about"}  className="insidenav">ABOUT</NavLink>
                <NavLink activeClassName="active"  to={"/contact"}  className="insidenav">CONTACT</NavLink>
        </div>
    );
}
export default Navbar;