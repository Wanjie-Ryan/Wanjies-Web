import React from "react";
import "./testimonials.css";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Astro Devs Group",
      review:
        "We collaborated with Wanjie in building a Hackathon project; Real Estate management system, he is highly skilled lad and great to work with.",
    },

    {
      id: 2,
      name: "International Centre For Reproductive Health",
      review:
        "Ryan Wanjie is a great data analyst, during his time at the International Centre for Reproductive Health, he was very active, and we highly recommend.",
    },

    {
      id: 3,
      name: "Stephen Nzioka",
      review:
        "Ryan Wanjie Developed for me the freeLance experts systems, such a professional guy!!",
    },

    {
      id: 4,
      name: "Wanjie Ryan",
      review:
        "Developed the Rawa Booking App, it is a great site that can boost the customers coming to your hotel, I highly recommend Wanjie.",
    },

    {
      id: 5,
      name: "Philip Waruinge",
      review:
        "Developed the Superior Beehive website for me, I highly Recommend.",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Reviews from Clients.</h5>
      <h2 className="bounce">Testimonials</h2>

      <Swiper
        className="container tes-container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ id, name, review }) => {
          return (
            <SwiperSlide key={id} className="test">
              <div className="client-details">
                <h5 className="client-name">{name}</h5>
                <small className="client-rev">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
