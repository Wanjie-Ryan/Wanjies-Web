import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

function Service() {
  return (
    <>
      <section id="services">
        <h5>My Expertise</h5>
        <h2 className="bounce">Services</h2>

        <div className="container services-container">
          <article className="service">
            <div className="service-head">
              <h3>Machine Learning & Data Visualization</h3>
            </div>

            <ul className="service-list">
              <li>
                <BiCheck className="icon" />
                <p>Developing advanced models with Python</p>
              </li>
              <li>
                <BiCheck className="icon" />
                <p>Executing data analysis and visualization</p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service-head">
              <h3>Web Development</h3>
            </div>

            <ul className="service-list">
              <li>
                <BiCheck className="icon" />
                <p>Building responsive and dynamic websites</p>
              </li>
              <li>
                <BiCheck className="icon" />
                <p>Designing and managing databases</p>
              </li>
              <li>
                <BiCheck className="icon" />
                <p>Optimizing website performance</p>
              </li>
              <li>
                <BiCheck className="icon" />
                <p>Crafting UI/UX designs with Figma</p>
              </li>
              <li>
                <BiCheck className="icon" />
                <p>Website hosting and maintenance</p>
              </li>
              <li>
                <BiCheck className="icon" />
                <p>Integrating APIs, including payment services</p>
              </li>
              <li>
                <BiCheck className="icon" />
                <p>Utilizing Docker for containerization</p>
              </li>
              <li>
                <BiCheck className="icon" />
                <p>Deploying and managing services on AWS</p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service-head">
              <h3>Content Creation</h3>
            </div>

            <ul className="service-list">
              <li>
                <BiCheck className="icon" />
                <p>Writing articles and blog posts</p>
              </li>
              <li>
                <BiCheck className="icon" />
                <p>Producing academic papers</p>
              </li>
              <li>
                <BiCheck className="icon" />
                <p>Solving computational and technical challenges</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}

export default Service;
