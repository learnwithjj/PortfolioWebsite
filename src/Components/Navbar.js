import "./navbar.css" ;
import React from "react";
import {GoHome} from "react-icons/go"
import {MdOutlinePhoneCallback} from "react-icons/md"
import {SiAboutdotme} from "react-icons/si"
import {useNavigate} from "react-router";
import { NavLink } from "react-router-dom";
function Navbar()
{
   
   
    return(
        <div  style={{fontSize:"20px",display:"flex"}}>
                
                <NavLink activeClassName="active" exact to={"/"}    className="insidenav"><GoHome/></NavLink>
                <NavLink activeClassName="active"  to={"/about"}  className="insidenav"><SiAboutdotme/></NavLink>
                <NavLink activeClassName="active"  to={"/contact"}  className="insidenav"><MdOutlinePhoneCallback/></NavLink>
        </div>
    );
}
export default Navbar;