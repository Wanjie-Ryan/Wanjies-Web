import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'


function Service() {


  return (

    <>
    
    
    <section id ='services' >

      <h5>What I Offer...</h5>
      <h2>Services</h2>


      <div className="container services-container">

          <article className="service">

            <div className="service-head">

              <h3>Machine Learning & Data Visualization.</h3>

            </div>


            <ul className="service-list">

              <li>

                <BiCheck className = 'icon'/>

                <p>Creating Models using Python.</p>
              </li>

              <li>

                <BiCheck className = 'icon'/>

                <p>Performing data Visualization and analysis.</p>
              </li>



            </ul>

          </article>


      </div>



    </section>
    
    </>


  )
}

export default Service