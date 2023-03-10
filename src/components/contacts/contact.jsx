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
            <a href ='mailto:ryanwanjie1@gmail.com'>Send an Email</a>



          </article>


          <article className="contact-option">

            <BiPhoneCall/>
            <h4>Call me</h4>
            {/* <h5>ryanwanjie1@gmail.com</h5> */}
            <a href ='tel:+254791618714'>Call me, Let's engage.</a>



          </article>


          <article className="contact-option">

            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            {/* <h5>ryanwanjie1@gmail.com</h5> */}
            <a href="https://api.whatsapp.com/send?phone=254791618714">Reach me on Whatsapp</a>



          </article>








        </div>

        <form action =''>





        </form>

      </div>





    </section>
    
    </>




  )
}

export default Contact