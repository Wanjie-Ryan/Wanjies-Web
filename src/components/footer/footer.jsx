import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsYoutube, BsMedium, BsTwitter} from 'react-icons/bs'
import {SiLinktree} from 'react-icons/si'




function Footer() {


  return (

    <>


      <footer>


        <a href ='#home'>Wanjie Ryan</a>


        <ul className="links">

          <li><a href ='#home'>Home</a></li>
          <li><a href ='#about'>About</a></li>
          <li><a href ='#experience'>Experience</a></li>
          <li><a href ='#services'>Services</a></li>
          <li><a href ='#contact'>Contact</a></li>
          <li><a href ='#portfolio'>Portfolio</a></li>
          <li><a href ='#testimonials'>Testimonials</a></li>


        
        </ul>


        <div className="footer-socials">


                    <a href='https://github.com/Wanjie-Ryan' target ='_blank' rel="noreferrer">

                      <BsGithub/>

                    </a>



                    <a href='https://www.youtube.com/channel/UC1Fu4FFqsOR-pGxkQVQTTsg' target ='_blank' rel="noreferrer">

                      <BsYoutube/>
                    </a>


                      <a href='https://medium.com/@ryanwanjiedistortion' target ='_blank' rel="noreferrer">

                          <BsMedium/>

                      </a>


                        <a href='https://www.linkedin.com/in/ryan-wanjie-7797831b5/' target ='_blank' rel="noreferrer">

                            <BsLinkedin/>
                        </a>

                          <a href ='https://twitter.com/RWanjie' target ='_blank' rel="noreferrer"> 

                              <BsTwitter/>
                          </a>


                            <a href ='https://linktr.ee/wanjieryan' target ='_blank' rel="noreferrer">

                                 <SiLinktree/>
                            </a>


        </div>


          <div className="footer-copyright">

            <small></small>


          </div>


      </footer>
    
    
    
    
    
    
    </>


  )
}

export default Footer