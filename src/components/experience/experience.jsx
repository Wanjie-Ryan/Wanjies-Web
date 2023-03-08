import React from 'react'
import './experience.css'
import {FaHtml5,FaReact,FaPython,FaJava,FaNodeJs} from 'react-icons/fa'
import {RiCss3Fill} from 'react-icons/ri'
import {TbBrandJavascript} from 'react-icons/tb'
import {BsGithub} from 'react-icons/bs'
import {SiXampp,SiPostgresql,SiPostman,SiMongodb} from 'react-icons/si'



function Experience() {



  return (


    <>
    
    <section id ='experience'>

      <h5>Skills That I possess...</h5>
      <h2>My Experience</h2>


      <div className="container experience-container">


        <div className="exp-frontend">

          <h3>Languages and Tools</h3>

          <div className="exp-content">

            <article className="exp-details">

              <FaHtml5/>
              <h4>HTML</h4>
              <small className="text-light">I have a diverse experience in <b>HTML</b>.</small>

            </article>


            <article className="exp-details">

              <RiCss3Fill/>
              <h4>CSS</h4>
              <small className="text-light">I have a diverse experience in <b>CSS</b>.</small>

            </article>



            <article className="exp-details">

              <TbBrandJavascript/>
              <h4>Javascript</h4>
              <small className="text-light">I have a diverse experience in <b>JavaScript</b>.</small>

            </article>


            <article className="exp-details">

              <FaReact/>
              <h4>ReactJs</h4>
              <small className="text-light">I have a diverse experience in <b>ReactJS</b>.</small>

            </article>



            <article className="exp-details">

              <FaPython/>
              <h4>Python</h4>
              <small className="text-light">I have a diverse experience in <b>Python(Machine Learning and Data Visualization.)</b>.</small>

            </article>


            <article className='exp-details'>

              <FaJava/>
              <h4>Java</h4>
              <small className="text-light">I have a diverse experience in <b>Java</b>.</small>

            </article>



            <article className='exp-details'>

              <BsGithub/>
              <h4>Git and Github.</h4>
              <small className="text-light">I have a diverse experience in <b>Github and Git commands</b>.</small>

            </article>


          </div>

        </div>




        <div className="exp-backend">

            <h3>Backend Development Tools</h3>

          <div className="exp-content">

                  <article className="exp-details">

                    <SiXampp/>
                    <h4>XAMPP</h4>
                    <small className="text-light">I have a diverse experience in SQL <b>XAMPP</b>.</small>

                  </article>


                  <article className="exp-details">

                    <SiPostgresql/>
                    <h4>PostgreSQL</h4>
                    <small className="text-light">I have a diverse experience in SQL <b>PostgreSQL</b>.</small>

                  </article>



                  <article className="exp-details">

                    <SiPostman/>
                    <h4>Postman</h4>
                    <small className="text-light">I have a diverse experience in using <b>Postman</b>.</small>

                  </article>


                  <article className="exp-details">

                    <FaNodeJs/>
                    <h4>Node and ExpressJS</h4>
                    <small className="text-light">I have a diverse experience in <b>Node and ExpressJS</b>.</small>

                  </article>



                  <article className="exp-details">

                    <SiMongodb/>
                    <h4>MongoDB</h4>
                    <small className="text-light">I have a diverse experience in NON-SQL <b>MongoDB</b>.</small>

                  </article>


                  
          </div>

        </div>


      </div>
      

    </section>
    
    
    </>




  )
}

export default Experience