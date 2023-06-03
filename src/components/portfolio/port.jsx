import React from 'react'
import './port.css'
import video from '../../images/waka.mp4'
import hive from '../../images/beehive.png'
import nikeclone from '../../images/nike clone.png'
import ticTac from '../../images/ticTac.png'


// const data =[

//   {
//     id:1,
//     image: hive,
//     title:'Superior Beehive.',
//     github:'https://github.com/Wanjie-Ryan/BeeTree-client',
//     demo:'https://thybee.netlify.app/'
//   },

//   {
//     id:2,
//     image: hive,
//     title:'Rawa Booking App.',
//     github:'https://github.com/Wanjie-Ryan/Modern-Reservations-App',
//     demo:'https://www.youtube.com/watch?v=_I9UakCEOnY&t=1s&ab_channel=RyanWanjie'

//   }


// ]

function Port() {



  return (

    <>
    
      <section id="portfolio">


        <h5>My Recent Work</h5>
        <h2 className='bounce' >Portfolio</h2>

        <div className="container portfolio-container">

          <article className="portfolio-item">

            <div className="portimage">

                <video controls className='video'>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video.
                </video>

            </div>


            <h3>Wakawaka Real Estate Management System.</h3>

            <div className="port-cta">


              <a href ='https://github.com/orgs/Astro-Devs-Tech/repositories' className='btn' target = '_blank' rel="noreferrer">Github</a>
              <a href ='https://www.youtube.com/watch?v=_I9UakCEOnY&t=1s&ab_channel=RyanWanjie' className='btn btn-primary' target = '_blank' rel="noreferrer">Live Demo</a>

            </div>



          </article>


          <article className="portfolio-item">

            <div className="portimage">

              <img src = {hive} alt =''/>
            </div>


            <h3>Superior Beehive.</h3>

            <div className="port-cta">

              <a href ='https://github.com/Wanjie-Ryan/BeeTree-client' className='btn' target = '_blank' rel="noreferrer">Github</a>
              <a href ='https://thybee.netlify.app/' className='btn btn-primary' target = '_blank' rel="noreferrer">Live Demo</a>

            </div>


          </article>



          <article className="portfolio-item">

            <div className="portimage">

            <img src = '' alt = ''/>
            </div>


            <h3>Mystic Travels.</h3>

            <div className="port-cta">


              <a href ='https://github.com/Wanjie-Ryan/Modern-Reservations-App' className='btn' target = '_blank' rel="noreferrer">Github</a>
              <a href ='https://mystictravels.netlify.app/' className='btn btn-primary' target = '_blank' rel="noreferrer">Live Demo</a>

            </div>


          </article>


          <article className="portfolio-item">

            <div className="portimage">

            <iframe width="350" height="430" title ='wanjie-bot' className = 'bot' allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/2cefb41e-6480-4255-94e6-495a0dc31719"></iframe>



            </div>


          </article>


          <article className="portfolio-item">

            <div className="portimage">

            <img src = {nikeclone} alt = ''/>
            </div>


            <h3>1-pager Nike Clone.</h3>

            <div className="port-cta">


              <a href ='https://github.com/Wanjie-Ryan/Nike-Store' className='btn' target = '_blank' rel="noreferrer">Github</a>
              <a href ='https://nikesstore.netlify.app/' className='btn btn-primary' target = '_blank' rel="noreferrer">Live Demo</a>

            </div>


          </article>

          <article className="portfolio-item">

            <div className="portimage">

            <img src = {ticTac} alt = ''/>
            </div>


            <h3>TicTac Game.</h3>

            <div className="port-cta">


              <a href ='https://github.com/Wanjie-Ryan/Tic-Tac-Game' className='btn' target = '_blank' rel="noreferrer">Github</a>
              <a href ='https://tictacryan.netlify.app/' className='btn btn-primary' target = '_blank' rel="noreferrer">Live Demo</a>

            </div>


          </article>



        </div>


      </section>
    
    



    
    </>





  )
}

export default Port