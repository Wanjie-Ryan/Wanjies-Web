import React from "react";
import "./about.css";
// import MyImage from "../../images/me.jpeg";
import { FaAward, FaUsers } from "react-icons/fa";
import { BsFolderFill } from "react-icons/bs";
import Pic1 from "../../images/pic1.jpg";

function About() {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2 className="bounce">About Wanjie Ryan</h2>

        <div className="container about-container">
          <div className="about-me">
            <div className="about-me-img">
              <img src={Pic1} alt="" />
            </div>
          </div>

          <div className="about-content">
            <div className="about-cards">
              <article className="about-card">
                <FaAward className="about-icon" />
                <h5>Experience</h5>
                <small>3+ Years Working Experience.</small>
              </article>

              <article className="about-card">
                <FaUsers className="about-icon" />
                <h5>Clients</h5>
                <small>
                  Worked with over 3 clients countrywide.
                  <br></br>
                  You've Got a project? Contact me.
                </small>
              </article>

              <article className="about-card">
                <BsFolderFill className="about-icon" />
                <h5>Projects</h5>
                <small>Completed over 40+ both Mini and Major Projects.</small>
              </article>
            </div>

            <p>
              I am an Experienced Software Developer, I love Programming and I
              am always learning and seeking to know new Tricks and Knowledge.
              <br></br>
              Apart from Programming, I also love football, not only an Fc
              Barcelona fan,but also playing.
              <br></br>I also Love Hiking, have you gone to Lukenya Hills? Such
              an awesome place. I also play chess, bet you cannot beat me there.
              <br></br>
              <b>When It Rains, It Pours.</b>
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
