import NavBar from './Components/Navbar'
import './App.css';
import {FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa"
import {FiDownload} from "react-icons/fi";
import { Container } from '@mui/system';

function App() {
 
  
  function navigateToInsta()
  {
    window.location.href="https://www.instagram.com/_jenza__/";
  }
  function navigateToLinkedin()
  {
    window.location.href="https://www.linkedin.com/in/jens-joy-9a1a4a20a/";
  }
  function navigateToGit()
  {
    window.location.href="https://github.com/learnwithjj";
  }

  return (
    <div className='app'>
       <div className='navbar'><NavBar/></div>
       
       <div className='left'>
      <div style={{display:"flex"}}><div style={{marginTop:"10px",fontSize:"20px",marginRight:"20px"}}>-----</div> <div style={{fontSize:"35px",fontFamily:"monospace",marginBottom:"20px"}}>HI THERE!!</div></div> 
        <div style={{display:"flex",fontSize:"60px",fontFamily:"monospace"}}>I'm <div  id="name"> Jens </div> Joy</div>
      <div className='i-title'>
       <div className='i-title-wrapper'>
          <div class="i-title-item">Web Developer</div>
          <div class="i-title-item">Android Developer</div>
          <div class="i-title-item">DevOps</div>
          <div class="i-title-item">Photography</div>

       </div>
      </div>
      <div id="box">
       <div id="ready">Ready to build your website? </div>
       <div >I'm a developer who focusses on writing clean, elegant and efficient code, </div><div>located in Bangalore, looking for work around the globe.</div>
       <div style={{marginTop:"30px"}}><div id="mission">Mission:</div> To design solutions that will improve the quality of millions of people!</div>
       </div>
       <div><button id='cvbutton'><a style={{textDecordation:"none", color:"wheat"}} href='JensJoy.pdf' download="JensJoy.pdf" ><span>Download CV</span></a></button></div>
       
       </div>
       
       <div ><img id="image2" src='me2.jpg' alt=''/></div>
       <div id="icons" style={{fontSize:"30px",marginLeft:"30px"}}>
              <FaInstagram className='fainsta'  style={{marginLeft:"30px",cursor:"pointer"}} onClick={navigateToInsta}  />
            <FaLinkedin className='falinked'  style={{marginLeft:"15px",cursor:"pointer"}} onClick={navigateToLinkedin}/>
            <FaGithub className='fagithub'  style={{marginLeft:"15px",cursor:"pointer"}} onClick={navigateToGit}/>
       </div>
       
   
       

       </div>
  );
}

export default App;
