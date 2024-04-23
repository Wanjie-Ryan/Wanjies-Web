import React from "react";
import "./port.css";
import video from "../../images/waka.mp4";
import ryanChats from "../../images/ryanChats.png";
import ManageAdmin from "../../images/Admin-Lets Manage.png";
import MemberManage from "../../images/Member- Lets Manage.png";
import ticTac from "../../images/ticTac.png";
import monica from "../../images/monica.png";
import monicaClergy from "../../images/monica-clergy.png";
import GiftShop from "../../images/gift shop.png";
import Watugot from "../../images/watugot-admin.png";
import Salam from "../../images/salam.jpeg";
import bloodbanks from "../../images/bloodbanks.png";
function Port() {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2 className="bounce">Portfolio</h2>

        <div className="container portfolio-container">
          <article className="portfolio-item">
            <div className="portimage">
              <img src={monica} alt="Ack St.Monica Church" />
            </div>

            <h3>ACK St.Monica Church.</h3>

            <div className="port-cta">
              <a
                href="https://github.com/Wanjie-Ryan/Monica-Client"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://monica-client.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portimage">
              <img src={monicaClergy} alt="Ack St.Monica Church" />
            </div>

            <h3>ACK St.Monica Church- Clergy Section.</h3>

            <div className="port-cta">
              <a
                href="https://github.com/Wanjie-Ryan/Monica-Clergy"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://monica-clergy.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portimage">
              <video controls className="video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video.
              </video>
            </div>

            <h3>Wakawaka Real Estate Management System.</h3>

            <div className="port-cta">
              <a
                href="https://github.com/orgs/Astro-Devs-Tech/repositories"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.youtube.com/watch?v=_I9UakCEOnY&t=1s&ab_channel=RyanWanjie"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portimage">
              <img src={ryanChats} alt="" />
            </div>

            <h3>Mini WhatsApp.</h3>

            <div className="port-cta">
              <a
                href="https://github.com/Wanjie-Ryan/chat-client"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://ryanchats.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portimage">
              <img src={ManageAdmin} alt="Lets Manage" />
            </div>

            <h3>Let's Manage Admin.</h3>

            <div className="port-cta">
              <a
                href="https://github.com/Wanjie-Ryan/Project-management"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://project-task-management.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portimage">
              <img src={MemberManage} alt="Lets Manage" />
            </div>

            <h3>Let's Manage Member.</h3>

            <div className="port-cta">
              <a
                href="https://github.com/Wanjie-Ryan/Project-management"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://project-task-management.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portimage">
              <iframe
                width="350"
                height="430"
                title="wanjie-bot"
                className="bot"
                allow="microphone;"
                src="https://console.dialogflow.com/api-client/demo/embedded/2cefb41e-6480-4255-94e6-495a0dc31719"
              ></iframe>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portimage">
              <img src={ticTac} alt="" />
            </div>

            <h3>TicTac Game.</h3>

            <div className="port-cta">
              <a
                href="https://github.com/Wanjie-Ryan/Tic-Tac-Game"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://tictacryan.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portimage">
              <img src={GiftShop} alt="" />
            </div>

            <h3>Kenyan Gift Art And Jewelry Shop.</h3>

            <div className="port-cta">
              <a
                href="https://github.com/Astro-Devs-Tech/Gift-Shop"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://gift-shop.pages.dev/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portimage">
              <img src={Watugot} alt="" />
            </div>

            <h3>Watugot Admin Panel.</h3>

            <div className="port-cta">
              <a
                href="https://github.com"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://admin-dev.watugot.org/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portimage">
              <img src={Salam} alt="" />
            </div>

            <h3>Store Billing System- C#.</h3>

            <div className="port-cta">
              <a
                href="https://github.com/Wanjie-Ryan/Wiko-Store---Billing-System"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://ryanwanjie.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portimage">
              <img src={bloodbanks} alt="" />
            </div>

            <h3>Blood Banks Management System- C#.</h3>

            <div className="port-cta">
              <a
                href="https://github.com/Wanjie-Ryan/Blood-Bank-Management-system"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://ryanwanjie.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Port;
