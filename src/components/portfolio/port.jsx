import React from 'react'
import './port.css'
import video from '../../images/waka.mp4'
import hive from '../../images/beehive.png'


const data =[

  {
    id:1,
    image: hive,
    title:'Superior Beehive.',
    github:'https://github.com/Wanjie-Ryan/BeeTree-client',
    demo:'https://thybee.netlify.app/'
  },

  {
    id:2,
    image: hive,
    title:'Rawa Booking App.',
    github:'https://github.com/Wanjie-Ryan/Modern-Reservations-App',
    demo:'https://www.youtube.com/watch?v=_I9UakCEOnY&t=1s&ab_channel=RyanWanjie'

  },

  {

    id:3,
    image: video,
    title:'Real Estate Management System.',
    github:'https://github.com/orgs/Astro-Devs-Tech/repositories',
    demo:'https://www.youtube.com/watch?v=_I9UakCEOnY&t=1s&ab_channel=RyanWanjie'


  }



]




function Port() {



  return (

    <>
    
      <section id="portfolio">


        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio-container">

          {

            
            data.map(({id,image, title, github, demo})=>{

              return(


                  <article className="portfolio-item">

                    <div className="portimage">

                        <video controls className='video'>
                          <sour ce src={video} type="video/mp4" />
                          Your browser does not support the video.
                        </video>

                    </div>


                    <h3>Wakawaka Real Estate Management System.</h3>

                    <div className="port-cta">


                      <a href ='https://github.com/orgs/Astro-Devs-Tech/repositories' className='btn' target = '_blank' rel="noreferrer">Github</a>
                      <a href ='https://www.youtube.com/watch?v=_I9UakCEOnY&t=1s&ab_channel=RyanWanjie' className='btn btn-primary' target = '_blank' rel="noreferrer">Live Demo</a>

                    </div>



                  </article>
              )
              })



          }



          
        </div>


      </section>
    
    



    
    </>





  )
}

export default Port