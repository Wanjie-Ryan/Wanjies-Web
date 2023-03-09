import React from 'react'
import './port.css'
import video from '../../images/waka.mp4'
import hive from '../../images/beehive.png'



function Port() {



  return (

    <>
    
      <section id="portfolio">


        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio-container">

          <article className="portfolio-item">

            <div className="portimage">

            <video controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video.
            </video>
            </div>


            <h3>Wakawaka Real Estate Management System.</h3>
            <a href ='https://github.com/orgs/Astro-Devs-Tech/repositories' className='btn' target = '_blank' rel="noreferrer">Github</a>
            <a href ='https://www.youtube.com/watch?v=_I9UakCEOnY&t=1s&ab_channel=RyanWanjie' className='btn btn-primary' target = '_blank' rel="noreferrer">Live Demo</a>



          </article>


          <article className="portfolio-item">

            <div className="portimage">

              <img src = {hive} alt =''/>
            </div>


            <h3>Superior Beehive.</h3>
            <a href ='https://github.com/Wanjie-Ryan/BeeTree-client' className='btn' target = '_blank' rel="noreferrer">Github</a>
            <a href ='https://thybee.netlify.app/' className='btn btn-primary' target = '_blank' rel="noreferrer">Live Demo</a>



          </article>



          <article className="portfolio-item">

            <div className="portimage">

            <img src = '' alt = ''/>
            </div>


            <h3>Rawa Booking App.</h3>
            <a href ='https://github.com/Wanjie-Ryan/Modern-Reservations-App' className='btn' target = '_blank' rel="noreferrer">Github</a>
            <a href ='https://www.youtube.com/watch?v=_I9UakCEOnY&t=1s&ab_channel=RyanWanjie' className='btn btn-primary' target = '_blank' rel="noreferrer">Live Demo</a>



          </article>








        </div>








      </section>
    
    



    
    </>





  )
}

export default Port