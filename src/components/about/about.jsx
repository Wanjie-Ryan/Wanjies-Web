import React from 'react'
import './about.css'
import MyImage from '../../images/me.jpeg'
import {FaAward} from 'react-icons/fa'


function About() {


  return (

    <>
    
    <section id ='about'>
      
      <h5>Get To Know</h5>
      <h2>About Wanjie Ryan</h2>
      
      
      <div className="container about-container">

        <div className="about-me">
          <div className="about-me-img">

              <img src ={MyImage} alt = ''/>

          </div>


        </div>


        <div className="about-content">
          <div className="about-cards">

            <article className='about-card'>

              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working Experience.</small>


            </article>

            <article className='about-card'>

              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working Experience.</small>


            </article>


            <article className='about-card'>

              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working Experience.</small>


            </article>


          </div>


        </div>


      </div>




      
      
    </section>
    
    
    </>



  )
}

export default About