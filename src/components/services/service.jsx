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




          <article className="service">

            <div className="service-head">

              <h3>Web Development.</h3>

            </div>


            <ul className="service-list">

              <li>

                <BiCheck className = 'icon'/>

                <p>Creating nice-looking and fully functional websites.</p>
              </li>

              <li>

                <BiCheck className = 'icon'/>

                <p>Creating and Managing Databases.</p>
              </li>


              <li>

                <BiCheck className = 'icon'/>

                <p>Optimizing Your website and make it better.</p>
              </li>


              <li>

                <BiCheck className = 'icon'/>

                <p>UI/UX designing using Figma.</p>
              </li>


              <li>

                <BiCheck className = 'icon'/>

                <p>Hosting your Website.</p>
              </li>


              <li>

                <BiCheck className = 'icon'/>

                <p>Integrating APIs such as Payment services.</p>
              </li>

            </ul>

          </article>




          <article className="service">

            <div className="service-head">

              <h3>Content Creation.</h3>

            </div>


            <ul className="service-list">

              <li>

                <BiCheck className = 'icon'/>

                <p>Article and Blog writing.</p>
              </li>

              <li>

                <BiCheck className = 'icon'/>

                <p>Academic writing.</p>
              </li>


              <li>

                <BiCheck className = 'icon'/>

                <p>Solving Computational and Technical problems.</p>
              </li>



            </ul>

          </article>






      </div>



    </section>
    
    </>


  )
}

export default Service