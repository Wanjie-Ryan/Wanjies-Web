import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'



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
            <h5>ryanwanjie1@gmail.com</h5>
            <a href ='mailto:ryanwanjie1@gmail.com'>Send an Email</a>



          </article>


          {/* <article className="contact-option">

            <MdEmail/>
            <h4>Email</h4>
            <h5>ryanwanjie1@gmail.com</h5>
            <a href ='mailto:ryanwanjie1@gmail.com'>Send an Email</a>



          </article> */}


          <article className="contact-option">

            <MdEmail/>
            <h4>Email</h4>
            <h5>ryanwanjie1@gmail.com</h5>
            <a href ='mailto:ryanwanjie1@gmail.com'>Send an Email</a>



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