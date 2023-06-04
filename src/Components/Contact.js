import NavBar from './Navbar';
import {useRef} from "react";
import './contact.css';
import {FiPhoneCall} from "react-icons/fi"
import {GoLocation} from "react-icons/go"
import {GrMail} from "react-icons/gr"
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
        <div className="app">
        <div className='navbar' ><NavBar /> </div>
           <div id="left"> 
                <div style={{fontSize:"50px",marginLeft:"60px",fontWeight:"bold",fontFamily:"monospace",marginTop:"20px"}}>Let's discuss </div>
                <div style={{fontSize:"50px",marginLeft:"60px",fontWeight:"bold",fontFamily:"monospace",marginTop:"20px",marginBottom:"40px"}}>your project</div>

               
                <div id='icon'>
                   <GrMail style={{color:"brown",paddingRight:"15px"}}/> jens.joyy@gmail.com
                </div>
                <div id='icon'>
                   <GoLocation  style={{color:"red",paddingRight:"12px"}}/> Bangalore
                </div>
          </div>
                
            <div className="right">
               
            <div style={{fontSize:"50px",marginLeft:"100px",fontWeight:"bold",fontFamily:"monospace",marginTop:"10px"}}>Hire me </div>
               <form id="form" ref={form} onSubmit={sendEmail}>
                  <div style={{marginLeft:"100px",marginTop:"30px"}}>Name</div>
                  <input  id='forminput' name="name" />
                  <div style={{marginLeft:"100px",marginTop:"30px"}}>Email</div>
                  <input id='forminput' name="email" />
                  <div  style={{marginLeft:"100px",marginTop:"30px"}}>Message</div>
                  <input id='forminput' style={{paddingBottom:"50px"}} name="message"  /> 
                  <div><input className='buttonsubmit' type="submit" value="Send" /></div>   
               </form>
            
            
             </div>
      </div>   
    );
}
export default Contact;