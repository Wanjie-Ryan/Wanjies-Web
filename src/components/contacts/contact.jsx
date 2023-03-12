import React, {useState, useRef} from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BiPhoneCall} from 'react-icons/bi'
import emailjs from 'emailjs-com'



function Contact() {

  const form = useRef()

  const [message, setmessage]= useState(null)

  const sendEmail = (e)=>{

    e.preventDefault();

    emailjs.sendForm('service_qk9tbm9', 'template_7i9342m', form.current, '0f4fZFS8wPre3XSug')
      .then((result)=>{
        console.log(result.text)
        setmessage(`Message was sent successfully!`)

        setTimeout(() => {
          setmessage(null);
        }, 2000);
      }, (error)=>{
        console.log(error.text)
        setmessage(`Message was not sent, try again later!`)

        setTimeout(() => {
          setmessage(null);
        }, 2000);
      })

      e.target.reset()


    }


  return (

    <>
    
    <section id ='contact'>

      <h5>Get In Touch</h5>
      <h2 class ='bounce'>Contact Me</h2>


      <div className="container contact-container">

        <div className="contact-options">


          <article className="contact-option">

            <MdEmail className = 'icons'/>
            <h4>Email</h4>
            {/* <h5>ryanwanjie1@gmail.com</h5> */}
            <a href ='mailto:ryanwanjie1@gmail.com' target ='_blank' rel="noreferrer">Send an Email</a>



          </article>


          <article className="contact-option">

            <BiPhoneCall className = 'icons'/>
            <h4>Call me</h4>
            {/* <h5>ryanwanjie1@gmail.com</h5> */}
            <a href ='tel:+254791618714' target ='_blank' rel="noreferrer">Call me, Let's engage.</a>



          </article>


          <article className="contact-option">

            <BsWhatsapp className = 'icons'/>
            <h4>Whatsapp</h4>
            {/* <h5>ryanwanjie1@gmail.com</h5> */}
            <a href="https://api.whatsapp.com/send?phone=254791618714" target ='_blank' rel="noreferrer" >Reach me on Whatsapp</a>


          </article>


        </div>

        <form ref = {form} onSubmit ={sendEmail}>

          <input type ='text' name='name' placeholder ='Your Full name' required />

          <input type ='email' name='email' placeholder ='Your Email address' required />

          <textarea name ='message' rows='7' placeholder='Your message' required></textarea>

            
          <button type ='submit' className="btn btn-primary">Send Message</button>
            
            
          {message && <h2>{message}</h2>}



        </form>

      </div>





    </section>
    
    </>




  )
}

export default Contact