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
        <div className='about' >
            <div className='navbar' ><NavBar/> </div>
            <div id='code'><FcAbout/></div>
            <div className="aboutme">About me</div>
            <div><img id='im1' src='Photographer.jpg' alt=''/></div>
            <div><img id='im2' src='one.jpeg' alt=''/></div>
            
            
            <p id='aboutpara' >I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best.</p>
           <p id='aboutpara'>I love meeting new people and learning about their lives and their backgrounds.</p> 
           <p id='aboutpara'> I’m not comfortable with settling, and I always look for an opportunity to do better and achieve greatness. </p> 
           <p id='aboutpara' > I am highly organised. I always take notes, and I use a series of tools to help myself stay on top of deadlines.</p> 
          
           
            <div id='code' style={{marginTop:"50px"}}><GiBrain style={{color:"brown"}}/></div>
            <div className='skills'>
                Skills
            </div>
            <Skillslist/>
          
              <div id='mywork'>
            <div id='code' style={{marginTop:"30px"}}><BsCodeSlash/></div>
            <div className="builtapps">Apps I've built</div>
            <ProductList/>
            </div>
            

        </div>
    );
}
export default About;