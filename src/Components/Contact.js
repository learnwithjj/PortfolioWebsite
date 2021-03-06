import NavBar from './Navbar';
import {useRef} from "react";
import './contact.css';
import {FiPhoneCall} from "react-icons/fi"
import {GoLocation} from "react-icons/go"
import {BsMailbox} from "react-icons/bs"
import React from "react";
import emailjs from "emailjs-com";


function Contact()
{

   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_qyh1vir', 'template_q94inyi', form.current, 'sKiEhBQ9_pMLRPiZG')
        .then((result) => {
            alert(result.text);
        }, (error) => {
            console.log(error.text);
        });
      
      e.target.reset();
      };
    return(
        <div>
        <div className='navbar' ><NavBar /> </div>
           <div id="left"> 
                <div style={{fontSize:"60px",marginLeft:"60px",fontWeight:"bold",fontFamily:"monospace",marginTop:"20px"}}>Let's discuss </div>
                <div style={{fontSize:"60px",marginLeft:"60px",fontWeight:"bold",fontFamily:"monospace",marginTop:"20px",marginBottom:"40px"}}>your project</div>

                <div id='icon' style={{marginTop:"60px"}}>
                   <FiPhoneCall style={{color:"green",paddingRight:"15px"}}/> +91 8105393318
                </div>
                <div id='icon'>
                   <BsMailbox style={{color:"brown",paddingRight:"15px"}}/> jens.joyy@gmail.com
                </div>
                <div id='icon'>
                   <GoLocation  style={{color:"red",paddingRight:"12px"}}/> #207 Jana Jeeva Silver Palm Harlur Road Bangalore 560102.
                </div>
         
                <div style={{fontSize:"60px",marginLeft:"100px",fontWeight:"bold",fontFamily:"monospace",marginTop:"60px"}}>Hire me </div>
                <form id="form" ref={form} onSubmit={sendEmail}>
                <div style={{marginLeft:"100px",marginTop:"40px"}}>Name</div>
               <input  id='forminput' name="name" />
               <div style={{marginLeft:"100px",marginTop:"40px"}}>Email</div>
               <input id='forminput' name="email" />
               <div  style={{marginLeft:"100px",marginTop:"30px"}}>Message</div>
               <input id='forminput' style={{paddingBottom:"50px"}} name="message"  /> 
               <div><input className='buttonsubmit' type="submit" value="Send" /></div>   
            </form>
            
            </div>
            <div id="right">
            <img id="im1" src='discuss.jpg' alt=''/>
           <img id="im2" style={{maxWidth:"450px"}} src='three.jpeg'   alt=''/>
         </div>
         </div>
    );
}
export default Contact;