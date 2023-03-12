import React from 'react'
import './header.css'
import Action from './action'
import MyImage from '../../images/me.jpeg'
import Socials from './socials'
import {BsToggleOn} from 'react-icons/bs'


function Header() {

    // const themestyles = {


    //   backgroundColor: darktheme ? '#1f1f38'  : '#ccc',
    //   color:darktheme ? '#fff' : '#1f1f38'


    // }


  return (

    <>

      <header id = 'home'>

        <div className="container header_container">

          <BsToggleOn className='toggle'/>

          <h5>Hello,&#128075; I Go By the Name,</h5>
          <h1 className='slide'>Wanjie Ryan.</h1> 

          <h5 className="text-light">I am a FullStack Developer.</h5>

          <Action/>
          <Socials/>

          <div className="me">

            <img src ={MyImage} alt=''/>

          </div>


          <a href ='#contact' className='scroll-down'>Scroll Down</a>


        </div>





      </header>
    
    
    
    
    </>


  )
}

export default Header