import "./navbar.css" ;
import {useNavigate} from "react-router";
function Navbar()
{
    let navigate=useNavigate();
    function aboutclick(value)
    {
        navigate("/"+value);
    }
    return(
        <div  style={{fontSize:"20px",display:"flex",}}>
                <div className="insidenav" onClick={()=>aboutclick("")}>HOME </div>
                <div className="insidenav" onClick={()=>aboutclick("about")}>ABOUT</div>
                <div className="insidenav" onClick={()=>aboutclick("contact")} >CONTACT</div>
        </div>
    );
}
export default Navbar;