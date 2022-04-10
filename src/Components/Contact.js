import NavBar from './Navbar';
import {useRef} from "react";
import './contact.css';
import {FiPhoneCall} from "react-icons/fi"
import {GoLocation} from "react-icons/go"
import {BsMailbox} from "react-icons/bs"
import {TextInput} from "react-native-web"
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
      //   document.getElementById("form").reset();
      e.target.reset();
    };
    return(
        <div>
        <div className='navbar'><NavBar/> </div>
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

                <div style={{fontSize:"60px",marginLeft:"40px",fontWeight:"bold",fontFamily:"monospace",marginTop:"60px"}}>Hire me </div>
                <form id="form" ref={form} onSubmit={sendEmail}>
                <div style={{marginLeft:"40px",marginTop:"40px"}}>Name</div>
               <input  style={{border:"0.5px solid lightgray",paddingRight:"200px",padding:"15px",marginLeft:"40px",paddingLeft:"20px",marginTop:"20px"}} name="name" />
               <div style={{marginLeft:"40px",marginTop:"40px"}}>Email</div>
               <input style={{border:"0.5px solid lightgray",paddingRight:"200px",padding:"15px",marginLeft:"40px",paddingLeft:"20px",marginTop:"20px"}} name="user_email" />
               <div  style={{marginLeft:"40px",marginTop:"30px"}}>Message</div>
               <input style={{border:"0.5px solid lightgray",paddingRight:"340px",padding:"15px",marginLeft:"40px",paddingLeft:"20px",marginTop:"20px",paddingBottom:"80px"}} name="message"  /> 
               <div><input className='buttonsubmit' type="submit" value="Send" /></div>
            </form>
            </div>

            <div id='right'><img src='discuss.jpg' alt=''/></div>
         </div>
    );
}
export default Contact;