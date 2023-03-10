import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BiPhoneCall} from 'react-icons/bi'

function Contact() {


  return (

    <>
    
    <section id ='contact'>

      <h5>Get In Touch</h5>
      <h2 class ='bounce'>Contact Me</h2>


      <div className="container contact-container">

        <div className="contact-options">


          <article className="contact-option">

            <MdEmail/>
            <h4>Email</h4>
            {/* <h5>ryanwanjie1@gmail.com</h5> */}
            <a href ='mailto:ryanwanjie1@gmail.com' target ='_blank' rel="noreferrer">Send an Email</a>



          </article>


          <article className="contact-option">

            <BiPhoneCall/>
            <h4>Call me</h4>
            {/* <h5>ryanwanjie1@gmail.com</h5> */}
            <a href ='tel:+254791618714' target ='_blank' rel="noreferrer">Call me, Let's engage.</a>



          </article>


          <article className="contact-option">

            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            {/* <h5>ryanwanjie1@gmail.com</h5> */}
            <a href="https://api.whatsapp.com/send?phone=254791618714" target ='_blank' rel="noreferrer" >Reach me on Whatsapp</a>


          </article>


        </div>

        <form action =''>

          <input type ='text' name='name' placeholder ='Your Full name' required />

          <input type ='email' name='email' placeholder ='Your Email address' required />

          <textarea name ='message' rows='7' placeholder='Your message' required></textarea>

          <button type ='submit' className="btn btn-primary">Send Message</button>



        </form>

      </div>





    </section>
    
    </>




  )
}

export default Contact