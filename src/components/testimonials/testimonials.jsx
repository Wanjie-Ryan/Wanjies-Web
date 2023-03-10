import React from 'react'
import './testimonials.css'




function Testimonials() {

  const data =[

    {
      id:1,
      name:'Astro Devs Group',
      review:'We collaborated with Wanjie in building the Hackathon project; Real Estate management system, he is highly skilled lad and great to work with.'
    },

    {
      id:2,
      name:'Philip Waruinge',
      review:'Developed the Superior Beehive website for me, I highly Recommend.'

    },

    {

      id:3,
      name:'Wanjie Ryan',
      review:'Developed the Rawa Booking App, it is a great site that can boost the customers coming to your hotel, I highly recommend Wanjie.'

    }




  ]



  return (


      <section id="testimonials">

        <h5>Reviews from Clients.</h5>
        <h2 className='bounce'>Testimonials</h2>



        <div className="container tes-container">

          {

            data.map(({id, name, review})=>{

              return(

                <article key = {id} className="test">


                  <div className="client-details">

                    <h5 className="client-name">{name}</h5>
                    <small className="client-rev">{review}</small>


                  </div>




                </article>
              )


            })


          }

        </div>









      </section>




  )
}

export default Testimonials