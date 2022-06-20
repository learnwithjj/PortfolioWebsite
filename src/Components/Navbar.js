import "./navbar.css" ;
import React from "react";
import {GoHome} from "react-icons/go"
import {MdOutlinePhoneCallback} from "react-icons/md"
import {SiAboutdotme} from "react-icons/si"
import { NavLink } from "react-router-dom";
import {HiLightBulb,HiMoon} from "react-icons/hi";


function Navbar()
{
    // const storedDarkMode=localStorage.getItem("darkmode");
   const [darkMode,setDarkMode]=React.useState(()=> JSON.parse(localStorage.getItem("darkmode")));
   
   React.useEffect(()=>
   {
    if(darkMode)    // if false 
    {
        document.body.classList.add("dark");
       
    }
    else{    //if true
        document.body.classList.remove("dark");
       
    }
   },[darkMode]);

   React.useEffect(()=>{
    localStorage.setItem("darkmode",darkMode);
   },[darkMode]);

  
   

    return(
        <div  style={{fontSize:"20px",display:"flex"}}>
                
                <NavLink activeClassName="active" exact to={"/"}    className="insidenav" id="homenav"><GoHome/></NavLink>
                <NavLink activeClassName="active"  to={"/about"}  className="insidenav" id="aboutnav"><SiAboutdotme/></NavLink>
                <NavLink activeClassName="active"  to={"/contact"}  className="insidenav" id="contactnav"><MdOutlinePhoneCallback/></NavLink>

                <div className="rightdiv"><button id="darkmodebutton" onClick={()=>setDarkMode(!darkMode)}>{!darkMode? <HiMoon/>:<HiLightBulb/>}   {!darkMode? "Dark Mode" :"Light Mode"}</button></div>
        </div>
    );
}
export default Navbar;