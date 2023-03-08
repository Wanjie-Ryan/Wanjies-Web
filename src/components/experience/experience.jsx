import React from 'react'
import './experience.css'
import {FaHtml5,FaReact,FaPython,FaJava,FaNodeJs} from 'react-icons/fa'
import {RiCss3Fill} from 'react-icons/ri'
import {TbBrandJavascript} from 'react-icons/tb'
import {BsGithub,BsFillPenFill} from 'react-icons/bs'
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

              <FaHtml5 className = 'icons'/>
              <div>

                <h4>HTML</h4>
                <small className="text-light">I have a diverse experience in <b>HTML</b>.</small>

              </div>

            </article>


            <article className="exp-details">

              <RiCss3Fill className = 'icons'/>

              <div>

                <h4>CSS</h4>
                <small className="text-light">I have a diverse experience in <b>CSS</b>.</small>

              </div>

            </article>



            <article className="exp-details">

              <TbBrandJavascript className = 'icons'/>

              <div>
                <h4>Javascript</h4>
                <small className="text-light">I have a diverse experience in <b>JavaScript</b>.</small>
              </div>

            </article>


            <article className="exp-details">

              <FaReact className = 'icons'/>

              <div>

                <h4>ReactJs</h4>
                <small className="text-light">I have a diverse experience in <b>ReactJS</b>.</small>

              </div>

            </article>



            <article className="exp-details">

              <FaPython className = 'icons'/>

              <div>

                <h4>Python</h4>
                <small className="text-light">I have a diverse experience in <b>Python(Machine Learning and Data Visualization.)</b>.</small>

              </div>

            </article>


            <article className='exp-details'>

              <FaJava className = 'icons'/>

              <div>

                <h4>Java</h4>
                <small className="text-light">I have a diverse experience in <b>Java</b>.</small>

              </div>

            </article>



            <article className='exp-details'>

              <BsGithub className = 'icons'/>

              <div>

                <h4>Git and Github.</h4>
                <small className="text-light">I have a diverse experience in <b>Github and Git commands</b>.</small>

              </div>

            </article>


            <article className='exp-details'>

              <BsFillPenFill className = 'icons'/>

              <div>

                <h4>Online writing, Documentation and Content Writing.</h4>
                <small className="text-light">I have a diverse experience in <b>Online content writing</b>.</small>

              </div>

            </article>


          </div>

        </div>




        <div className="exp-backend">

            <h3>Backend Development Tools</h3>

          <div className="exp-content">

                  <article className="exp-details">

                    <SiXampp className = 'icons'/>

                    <div>

                      <h4>XAMPP</h4>
                      <small className="text-light">I have a diverse experience in SQL <b>XAMPP</b>.</small>

                    </div>

                  </article>


                  <article className="exp-details">

                    <SiPostgresql className = 'icons'/>

                    <div>

                      <h4>PostgreSQL</h4>
                      <small className="text-light">I have a diverse experience in SQL <b>PostgreSQL</b>.</small>

                    </div>

                  </article>



                  <article className="exp-details">

                    <SiPostman className = 'icons'/>

                    <div>

                      <h4>Postman</h4>
                      <small className="text-light">I have a diverse experience in using <b>Postman</b>.</small>

                    </div>

                  </article>


                  <article className="exp-details">

                    <FaNodeJs className = 'icons'/>

                    <div>

                      <h4>Node and ExpressJS</h4>
                      <small className="text-light">I have a diverse experience in <b>Node and ExpressJS</b>.</small>

                    </div>

                  </article>



                  <article className="exp-details">

                    <SiMongodb className = 'icons'/>

                    <div>

                        <h4>MongoDB</h4>
                        <small className="text-light">I have a diverse experience in NON-SQL <b>MongoDB</b>.</small>

                    </div>


                  </article>


                  
          </div>

        </div>


      </div>
      

    </section>
    
    
    </>




  )
}

export default Experience