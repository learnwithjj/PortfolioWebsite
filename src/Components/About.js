import NavBar from './Navbar'
import './about.css';
import {BsCodeSlash} from "react-icons/bs";
import{FcAbout} from "react-icons/fc";
import {GiBrain} from "react-icons/gi";
import ProductList from "../ProductList/ProductList"
import Skillslist from "../Skillslist/skillslist"
import { Container } from '@mui/system';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PhotoList from '../Photolist/photolist';
function About()
{


    const Items=()=>
    {
        return(
           <div>
            <div id='skills' className='center section fadebackground'>
            
            <Skillslist/>
            </div>
          
              
            
            <div id='apps' className='section fadebackground'>
               <ProductList/>
                
            </div>
            
            <div id='photo' className='fadebackground' >
             <PhotoList/>   
                
            </div>
           </div>
        )
    }
    return(

        <div>
             
              
            
            <div className="background" value="5">
              </div>
              <div className='navbar' ><NavBar/> </div>
              <div className='section' style={{height:"70vh"}}>
                
                <div style={{display:"flex",marginTop:"200px",justifyContent:"center"}}>
                 <div id='leftDiv' > <div className='vertical'></div></div>  
                   <div id='rightDiv' >
                   
                <AnchorLink href='#skills' style={{textDecoration:"none"}}><h1  className='title'>SKILLS</h1></AnchorLink>
                <AnchorLink href='#apps' style={{textDecoration:"none"}}><h1 className='title'>APPS</h1></AnchorLink>
                <AnchorLink href='#photo' style={{textDecoration:"none"}}><h1 className='title'>PHOTOS</h1></AnchorLink>                   
                </div>
                </div>
              </div>
           <Items/>

        </div>
    );
}
export default About;