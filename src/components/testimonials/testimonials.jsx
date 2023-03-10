import React from 'react'
import './testimonials.css'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';




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



        <Swiper className="container tes-container">

          {

            data.map(({id, name, review})=>{

              return(

                <SwiperSlide key = {id} className="test">


                  <div className="client-details">

                    <h5 className="client-name">{name}</h5>
                    <small className="client-rev">{review}</small>


                  </div>




                </SwiperSlide>
              )


            })


          }

        </Swiper>









      </section>




  )
}

export default Testimonials