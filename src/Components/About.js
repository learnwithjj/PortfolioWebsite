import NavBar from './Navbar'
import './about.css';
import {BsCodeSlash} from "react-icons/bs";
import{FcAbout} from "react-icons/fc";
import {GiBrain} from "react-icons/gi";
import ProductList from "../ProductList/ProductList"
import Skillslist from "../Skillslist/skillslist"

function About()
{

    return(
        <div  >
            <div className='navbar' ><NavBar/> </div>
            <div><img id='left' src='Photographer.jpg' alt=''/></div>
            <div id='code'><FcAbout/></div>
            <div className="aboutme">About me</div>
            <p id='aboutpara' style={{color:"orangeRed"}}>I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best.</p>
           <p id='aboutpara' style={{color:"orangeRed"}}>I love meeting new people and learning about their lives and their backgrounds.</p> 
           <p id='aboutpara' style={{color:"orangeRed"}}> I’m not comfortable with settling, and I always look for an opportunity to do better and achieve greatness. </p> 
           <p id='aboutpara' style={{color:"orangeRed"}}> I am highly organised. I always take notes, and I use a series of tools to help myself stay on top of deadlines.</p> 

           
            <div id='code' style={{marginTop:"100px"}}><GiBrain style={{color:"brown"}}/></div>
            <div className='skills'>
                Skills
            </div>
            <Skillslist/>
          
              <div id='mywork'>
            <div id='code' style={{marginTop:"100px"}}><BsCodeSlash/></div>
            <div className="buildapps">Apps I've built</div>
            <ProductList/>
            </div>
            

        </div>
    );
}
export default About;